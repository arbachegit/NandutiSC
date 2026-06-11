#!/usr/bin/env bash
# audit-css.sh — gate estatico de CODIGO (bloqueia build se falhar)
# Adapted from infraTPU for nanduti (no AudioControl, no PDF, no maps).
set -uo pipefail
CSS="app/globals.css"
FAIL=0
fail(){ echo "FAIL [$1]: $2"; FAIL=$((FAIL+1)); }

# Helper: flatten CSS into one-line-per-rule for multi-line grep.
FLAT=$(awk '{gsub(/\n/," ")} 1' RS='}' "$CSS" | sed 's/  */ /g')

# === GLOBALS.CSS ===

# F1: .slide-stage align-items
echo "$FLAT" | grep -qE '\.slide-stage\b[^}]*align-items:\s*center' 2>/dev/null \
  && fail F1 ".slide-stage tem align-items:center (deve ser stretch)"
echo "$FLAT" | grep -qE '\.slide-stage\b[^}]*align-items:\s*stretch' 2>/dev/null \
  || fail F1 ".slide-stage sem align-items:stretch"

# F2: .slide-content align-items
echo "$FLAT" | grep -qE '\.slide-content\b[^}]*align-items:\s*center' 2>/dev/null \
  && fail F2 ".slide-content tem align-items:center (deve ser stretch)"

# F3: classe .slide-fit (obsoleta)
grep -qE '\.slide-fit\b' "$CSS" 2>/dev/null \
  && fail F3 "classe .slide-fit encontrada (usar .slide-content)"

# F4: max-width em containers de slide
echo "$FLAT" | grep -qE '\.(slide-content|slide-fit)\b[^}]*max-width' 2>/dev/null \
  && fail F4 "max-width em container de slide"
echo "$FLAT" | grep -qE '\.(slide-content|slide-fit)\b[^}]*width:\s*min\(' 2>/dev/null \
  && fail F4 "width:min() em container de slide"

# F8: .slide-content height:100%
echo "$FLAT" | grep -qE '\.slide-content\b[^}]*height:\s*100%' 2>/dev/null \
  || fail F8 ".slide-content sem height:100%"

# F9: .slide-content align-items:stretch
echo "$FLAT" | grep -qE '\.slide-content\b[^}]*align-items:\s*stretch' 2>/dev/null \
  || fail F9 ".slide-content sem align-items:stretch"

# F13: .slide-band justify/align center
echo "$FLAT" | grep -qE '\.slide-band\b[^}]*justify-content:\s*center' 2>/dev/null \
  && fail F13 ".slide-band tem justify-content:center"
echo "$FLAT" | grep -qE '\.slide-band\b[^}]*align-items:\s*center' 2>/dev/null \
  && fail F13 ".slide-band tem align-items:center"

# F14: .slide-stage height:100% (deve ser flex:1)
echo "$FLAT" | grep -qE '\.slide-stage\b[^}]*height:\s*100%' 2>/dev/null \
  && fail F14 ".slide-stage tem height:100% (deve ser flex:1; min-height:0)"

# F15: max() no padding de .slide-band (deve ser clamp())
echo "$FLAT" | grep -qE '\.slide-band\b[^}]*padding-top:\s*max\(' 2>/dev/null \
  && fail F15 ".slide-band usa max() (deve ser clamp())"
echo "$FLAT" | grep -qE '\.slide-band\b[^}]*padding-bottom:\s*max\(' 2>/dev/null \
  && fail F15 ".slide-band usa max() (deve ser clamp())"

# F16: setas > 44px
echo "$FLAT" | grep -qE '\.slide-nav__btn\b[^}]*width:\s*(4[5-9]|[5-9][0-9]|[1-9][0-9]{2,})px' 2>/dev/null \
  && fail F16 ".slide-nav__btn width > 44px"

# F22: faixas opacas (var(--bg) token — §3.2/§3.3, nunca cor hardcoded)
echo "$FLAT" | grep -qE 'body::before[^}]*background:\s*var\(--bg\)' 2>/dev/null \
  || fail F22 "body::before sem background:var(--bg) (faixas opacas — §3.2)"
echo "$FLAT" | grep -qE 'body::after[^}]*background:\s*var\(--bg\)' 2>/dev/null \
  || fail F22 "body::after sem background:var(--bg) (faixas opacas — §3.2)"

# === TSX (scope: components/ + app/) ===

# F5: max-w-grid em wrappers
SHELL_FILES=$(grep -rlE 'Shell|slide-content|slide-stage' app/ components/ 2>/dev/null || true)
for f in $SHELL_FILES; do
  grep -qE 'max-w-grid' "$f" 2>/dev/null && fail F5 "$f: max-w-grid em wrapper"
done

# F6: items-center na Shell
SHELL_DEF=$(grep -rlE 'function Shell|const Shell' components/ 2>/dev/null || true)
for f in $SHELL_DEF; do
  grep -qE 'items-center' "$f" 2>/dev/null && fail F6 "$f: Shell com items-center"
done

# F7: UPCAP != 1.0
FRAME_FILES=$(grep -rlE 'UPCAP' components/ 2>/dev/null || true)
for f in $FRAME_FILES; do
  grep -qE 'UPCAP\s*=\s*1\.0' "$f" 2>/dev/null || fail F7 "$f: UPCAP != 1.0"
done

# F18: overflow-hidden em Shell ou wrappers dentro de .slide-content
for f in $SHELL_DEF; do
  grep -qE 'overflow-hidden|overflow:\s*hidden' "$f" 2>/dev/null && fail F18 "$f: Shell com overflow-hidden"
done

ACT_FILES=$(find components/ app/ -name '*.tsx' \
  -not -name 'SlideFrame*' -not -name 'SlideEngine*' \
  -not -name 'layout*' 2>/dev/null || true)

for f in $ACT_FILES; do
  OHITS=$(grep -nE 'overflow-hidden' "$f" 2>/dev/null | grep -vE 'absolute.*overflow-hidden|overflow-hidden.*pointer-events-none' || true)
  if [ -n "$OHITS" ]; then
    while IFS= read -r line; do
      fail F18 "$f: overflow-hidden em act wrapper — $line"
    done <<< "$OHITS"
  fi
done

# F20: font-size < 12px em slides (exceto chrome)
for f in $ACT_FILES; do
  grep -nE 'font-size:\s*(([0-9]|1[01])(\.[0-9]+)?px)' "$f" 2>/dev/null | while read -r line; do
    fail F20 "$f: font-size < 12px (CSS) — $line"
  done
  grep -nE 'text-\[(([0-9]|1[01])(\.[0-9]+)?px)\]' "$f" 2>/dev/null | while read -r line; do
    fail F20 "$f: text-[<12px] (Tailwind) — $line"
  done
done

# === RESULTADO ===
if [ $FAIL -eq 0 ]; then
  echo "audit-css: OK (0 falhas)"
  exit 0
else
  echo "audit-css: $FAIL FALHA(S) — build bloqueado"
  exit 1
fi
