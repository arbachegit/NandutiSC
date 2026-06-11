import { Shell } from "@/components/_shared";

function BrowserChrome({ url }: { url?: string }) {
  return (
    <div className="ndt-browser-bar">
      <span className="ndt-dot ndt-dot-red" />
      <span className="ndt-dot ndt-dot-yellow" />
      <span className="ndt-dot ndt-dot-green" />
      {url && (
        <div className="ndt-browser-url">
          <svg width="10" height="12" viewBox="0 0 10 12" fill="none" aria-hidden="true">
            <rect x="1" y="5" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1" />
            <path d="M2.5 5V3.5C2.5 2 3.5 1 5 1C6.5 1 7.5 2 7.5 3.5V5" stroke="currentColor" strokeWidth="1" />
          </svg>
          {url}
        </div>
      )}
    </div>
  );
}

function PromptBox({ text }: { text: string }) {
  return (
    <div className="ndt-prompt">
      <div className="ndt-prompt-text">{text}</div>
      <div className="ndt-prompt-actions">
        <div className="ndt-prompt-tools">
          <span className="ndt-tool" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="6" r="2.5" />
              <circle cx="6" cy="18" r="2.5" /><circle cx="18" cy="18" r="2.5" />
            </svg>
          </span>
          <span className="ndt-tool" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12.5L12 21.5C9.5 24 5.5 24 3 21.5C0.5 19 0.5 15 3 12.5L12 3.5C13.6 2 16.4 2 18 3.5C19.6 5 19.6 7.8 18 9.4L9 18.5" />
            </svg>
          </span>
          <span className="ndt-tool" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M3 21L21 3M14 3h7v7" />
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
  );
}

export { BrowserChrome, PromptBox };

export default function Act1Hero() {
  return (
    <Shell label="Historia, licao e curiosidade na lingua da crianca">
      <div className="ndt-warm">
        <h1 className="ndt-hero">Historia, licao e curiosidade na lingua da crianca</h1>
        <PromptBox text="Como se dice amigo en guarani?" />
      </div>
    </Shell>
  );
}
