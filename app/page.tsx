"use client";

import { SlideEngine } from "@/components/show/SlideEngine";
import { SlideNav } from "@/components/show/SlideNav";
import { SlideProgress } from "@/components/show/SlideProgress";
import Logo from "@/components/show/Logo";
import SlideHead from "@/components/show/SlideHead";
import SlideFoot from "@/components/show/SlideFoot";
import SlideFrame from "@/components/show/SlideFrame";

import Act1Hero from "@/components/acts/Act1Hero";
import Act2Reach from "@/components/acts/Act2Reach";
import Act3Trilingual from "@/components/acts/Act3Trilingual";
import Act4Stories from "@/components/acts/Act4Stories";
import Act5Thanks from "@/components/acts/Act5Thanks";

import { exitToHub, HUB } from "@/lib/exitToHub";

const SLIDES = [Act1Hero, Act2Reach, Act3Trilingual, Act4Stories, Act5Thanks];

export default function NandutiShowcase() {
  return (
    <SlideEngine totalSlides={SLIDES.length}>
      <Logo />
      <SlideHead />
      <SlideProgress />
      <SlideNav />

      {/* Dock simplified: exit only (no audio/PDF/i18n in this pass) */}
      <div className="audio-dock">
        <a className="exit-btn" href={HUB} onClick={exitToHub}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
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
