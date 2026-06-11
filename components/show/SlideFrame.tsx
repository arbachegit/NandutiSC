"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
import { useSlideContext } from "./SlideEngine";

const UPCAP = 1.0;
const FLOOR = 0.15;

export default function SlideFrame({
  index,
  children,
}: {
  index: number;
  children: ReactNode;
}) {
  const { currentSlide, seenSlides } = useSlideContext();
  const stageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef(1);
  const [scale, setScale] = useState(1);
  const readyRef = useRef(false);
  const [ready, setReady] = useState(false);

  const fit = useCallback(() => {
    const stage = stageRef.current;
    const content = contentRef.current;
    if (!stage || !content) return;
    const cs = getComputedStyle(stage);
    const padT = parseFloat(cs.paddingTop) || 0;
    const padB = parseFloat(cs.paddingBottom) || 0;
    const padL = parseFloat(cs.paddingLeft) || 0;
    const padR = parseFloat(cs.paddingRight) || 0;
    const availH = stage.clientHeight - padT - padB;
    const availW = stage.clientWidth - padL - padR;
    const naturalW = content.scrollWidth;
    const naturalH = content.scrollHeight;
    if (naturalW <= 0 || naturalH <= 0 || availW <= 0 || availH <= 0) return;
    // F25: largest scale that fits BOTH dimensions (with 2% breathing room)
    const fitScale = Math.min(availW / naturalW, availH / naturalH) * 0.98;
    const next = Math.max(FLOOR, Math.min(UPCAP, fitScale));
    if (Math.abs(next - scaleRef.current) > 0.004) {
      scaleRef.current = next;
      setScale(next);
    }
    if (!readyRef.current) {
      readyRef.current = true;
      setReady(true);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    fit();
  }, [fit]);

  useEffect(() => {
    fit();
    const ro = new ResizeObserver(() => fit());
    if (contentRef.current) ro.observe(contentRef.current);
    if (stageRef.current) ro.observe(stageRef.current);
    window.addEventListener("resize", fit);
    type DocWithFonts = Document & { fonts?: { ready: Promise<unknown> } };
    (document as DocWithFonts).fonts?.ready.then(() => fit());
    const safety = setTimeout(() => {
      if (!readyRef.current) {
        readyRef.current = true;
        setReady(true);
      }
    }, 400);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", fit);
      clearTimeout(safety);
    };
  }, [fit]);

  useEffect(() => {
    if (currentSlide === index) {
      const t1 = setTimeout(fit, 60);
      const t2 = setTimeout(fit, 300);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    }
  }, [currentSlide, index, fit]);

  const contentStyle = useMemo(() => ({
    transform: scale < 1 ? `scale(${scale})` : undefined,
    visibility: ready ? undefined : ("hidden" as const),
    opacity: ready ? 1 : 0,
    transition: "opacity 0.18s ease",
  }), [scale, ready]);

  return (
    <section
      className="slide"
      data-active={currentSlide === index}
      data-seen={seenSlides.has(index)}
      data-index={index}
    >
      <div className="slide-band">
       <div ref={stageRef} className="slide-stage">
        <div
          ref={contentRef}
          className="slide-content"
          style={contentStyle}
        >
          {children}
        </div>
       </div>
      </div>
    </section>
  );
}
