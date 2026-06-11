import { Shell } from "@/components/_shared";

export default function Act4Wallet() {
  return (
    <Shell label="billetera">
      <div className="ndt-side">
        {/* Left: Wallet dashboard */}
        <div className="ndt-side-l">
          <span className="ndt-eyebrow">Billetera digital</span>
          <div className="ndt-wallet-dash">
            <div className="ndt-wallet-header">
              <div className="ndt-wallet-bal">
                <span className="ndt-wallet-curr">PYG</span>
                <span className="ndt-wallet-amount">Gs. 4.350.000</span>
              </div>
              <div className="ndt-wallet-bal ndt-wallet-bal--usdc">
                <span className="ndt-wallet-curr">USDC</span>
                <span className="ndt-wallet-amount">247,83</span>
              </div>
            </div>
            <div className="ndt-ticker" style={{ marginTop: "10px" }}>
              <div className="ndt-ticker-cell">
                <span className="ndt-ticker-k">USD</span>
                <span className="ndt-ticker-v">6.159,41</span>
              </div>
              <div className="ndt-ticker-cell">
                <span className="ndt-ticker-k">BRL</span>
                <span className="ndt-ticker-v">1.085,22</span>
              </div>
              <div className="ndt-ticker-cell">
                <span className="ndt-ticker-k">ARS</span>
                <span className="ndt-ticker-v">5,14</span>
              </div>
              <div className="ndt-ticker-cell">
                <span className="ndt-ticker-k">EUR</span>
                <span className="ndt-ticker-v">6.890,50</span>
              </div>
            </div>
            <div className="ndt-tx-list">
              <div className="ndt-tx-row ndt-tx-row--in">
                <span className="ndt-tx-sign">+</span>
                <span className="ndt-tx-desc">Salario mensual</span>
                <span className="ndt-tx-amt">+2.650.000</span>
              </div>
              <div className="ndt-tx-row ndt-tx-row--out">
                <span className="ndt-tx-sign">-</span>
                <span className="ndt-tx-desc">ANDE electricidad</span>
                <span className="ndt-tx-amt">-150.000</span>
              </div>
              <div className="ndt-tx-row ndt-tx-row--out">
                <span className="ndt-tx-sign">-</span>
                <span className="ndt-tx-desc">QR Farmacia Central</span>
                <span className="ndt-tx-amt">-28.500</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: USDC card + QR */}
        <div className="ndt-side-r">
          <div className="ndt-usdc-card">
            <div className="ndt-usdc-card-top">
              <span className="ndt-usdc-label">Tarjeta USDC</span>
              <span className="ndt-usdc-brand">Mastercard</span>
            </div>
            <span className="ndt-usdc-number">4827 XXXX XXXX 3891</span>
            <div className="ndt-usdc-card-bottom">
              <div>
                <span className="ndt-usdc-k">Custodio</span>
                <span className="ndt-usdc-v">Circle</span>
              </div>
              <div>
                <span className="ndt-usdc-k">Adquirente</span>
                <span className="ndt-usdc-v">Bancard</span>
              </div>
            </div>
          </div>
          <div className="ndt-qr-hub">
            <div className="ndt-qr-placeholder">
              <svg viewBox="0 0 64 64" width="64" height="64" aria-hidden="true" style={{ color: "var(--cyan)", opacity: 0.4 }}>
                <rect x="4" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="36" y="4" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="4" y="36" width="24" height="24" rx="2" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="40" y="40" width="16" height="16" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                <rect x="10" y="10" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="42" y="10" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="10" y="42" width="12" height="12" rx="1" fill="currentColor" opacity="0.3" />
              </svg>
            </div>
            <span className="ndt-byline">QR Hub / Pago instantaneo SIP-BCP</span>
          </div>
        </div>
      </div>
    </Shell>
  );
}
