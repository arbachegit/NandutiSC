"use client";

import { SlideEngine } from "@/components/show/SlideEngine";
import { SlideNav } from "@/components/show/SlideNav";
import { SlideProgress } from "@/components/show/SlideProgress";
import Logo from "@/components/show/Logo";
import SlideHead from "@/components/show/SlideHead";
import SlideFoot from "@/components/show/SlideFoot";
import SlideFrame from "@/components/show/SlideFrame";

import Act1Hero from "@/components/acts/Act1Hero";
import Act2Dialog from "@/components/acts/Act2Reach";
import Act3Catalog from "@/components/acts/Act3Trilingual";
import Act4Stack from "@/components/acts/Act4Stories";
import Act5Thanks from "@/components/acts/Act5Thanks";

import { exitToHub, HUB } from "@/lib/exitToHub";

const SLIDES = [Act1Hero, Act2Dialog, Act3Catalog, Act4Stack, Act5Thanks];

export default function NandutiShowcase() {
  return (
    <SlideEngine totalSlides={SLIDES.length}>
      <Logo />
      <SlideHead />
      <SlideProgress />
      <SlideNav />

      {/* Dock simplified: exit only (no audio/PDF/i18n in this pass) */}
      <div className="audio-dock">
        <a className="exit-btn" href={HUB} onClick={exitToHub} aria-label="Sair para o hub">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <polyline points="16 17 21 12 16 7" />
            <line x1="21" y1="12" x2="9" y2="12" />
          </svg>
          <span>Sair</span>
        </a>
      </div>

      <SlideFoot />

      {SLIDES.map((Comp, i) => (
        <SlideFrame key={Comp.name || i} index={i}>
          <Comp />
        </SlideFrame>
      ))}
    </SlideEngine>
  );
}
