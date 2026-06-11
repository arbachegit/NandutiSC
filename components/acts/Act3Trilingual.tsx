import { Shell } from "@/components/_shared";
import { BrowserChrome } from "./Act1Hero";

export default function Act3Trilingual() {
  return (
    <Shell label="Tri-lingue TTS Karaoke ABNT">
      <div className="ndt-browser">
        <BrowserChrome url="nanduti.iconsai.ai/conversa" />
        <div className="ndt-split">
          <div className="ndt-split-dark" />
          <div className="ndt-split-light">
            <div className="ndt-grid-bg" />
          </div>
        </div>
        <div className="ndt-dialog">
          <div className="ndt-dialog-tag">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="6" width="18" height="13" rx="2" />
              <path d="M3 10h18" />
            </svg>
            nanduti
            <span className="ndt-dialog-tag-x">x</span>
          </div>
          <div className="ndt-prompt-text">Conta uma historia sobre o jaguar</div>
          <div className="ndt-prompt-actions">
            <div className="ndt-prompt-tools">
              {/* Grid icon (replaces emoji) */}
              <span className="ndt-tool" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                </svg>
              </span>
              {/* Paperclip icon (replaces emoji) */}
              <span className="ndt-tool" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M21 12.5L12 21.5C9.5 24 5.5 24 3 21.5C0.5 19 0.5 15 3 12.5L12 3.5C13.6 2 16.4 2 18 3.5C19.6 5 19.6 7.8 18 9.4L9 18.5" />
                </svg>
              </span>
              {/* Edit icon (replaces emoji) */}
              <span className="ndt-tool" aria-hidden="true">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M17 3a2.83 2.83 0 114 4L7.5 20.5 2 22l1.5-5.5L17 3z" />
                </svg>
              </span>
              <span className="ndt-tool ndt-tool-import">Import</span>
            </div>
            <button type="button" className="ndt-send" aria-label="Send">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" aria-hidden="true">
                <polygon points="4 4 22 12 4 20 8 12" />
              </svg>
              Send
            </button>
          </div>
        </div>
        <div className="ndt-caption" style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,.6)" }}>
          TRI-LINGUE · TTS · KARAOKE · ABNT
        </div>
      </div>
    </Shell>
  );
}
