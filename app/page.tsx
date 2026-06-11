"use client";

import { SlideEngine } from "@/components/show/SlideEngine";
import { SlideNav } from "@/components/show/SlideNav";
import { SlideProgress } from "@/components/show/SlideProgress";
import Logo from "@/components/show/Logo";
import SlideHead from "@/components/show/SlideHead";
import SlideFoot from "@/components/show/SlideFoot";
import SlideFrame from "@/components/show/SlideFrame";
import { LocaleProvider } from "@/components/show/LocaleContext";
import AudioControl from "@/components/show/AudioControl";
import PdfDocument from "@/components/PdfDocument";

import Act1Cover from "@/components/acts/Act1Cover";
import Act2Persona from "@/components/acts/Act2Persona";
import Act3Dialog from "@/components/acts/Act3Dialog";
import Act4Wallet from "@/components/acts/Act4Wallet";
import Act5State from "@/components/acts/Act5State";
import Act6Safety from "@/components/acts/Act6Safety";
import Act7Catalog from "@/components/acts/Act7Catalog";
import Act8Data from "@/components/acts/Act8Data";
import Act9Arch from "@/components/acts/Act9Arch";
import Act10Docs from "@/components/acts/Act10Docs";
import Act11Obrigado from "@/components/acts/Act11Obrigado";

const SLIDES = [
  Act1Cover,
  Act2Persona,
  Act3Dialog,
  Act4Wallet,
  Act5State,
  Act6Safety,
  Act7Catalog,
  Act8Data,
  Act9Arch,
  Act10Docs,
  Act11Obrigado,
];

export default function NandutiShowcase() {
  return (
    <LocaleProvider>
      <SlideEngine totalSlides={SLIDES.length}>
        <Logo />
        <SlideHead />
        <SlideProgress />
        <SlideNav />
        <AudioControl />
        <SlideFoot />

        {SLIDES.map((Comp, i) => (
          <SlideFrame key={Comp.name || i} index={i}>
            <Comp />
          </SlideFrame>
        ))}
      </SlideEngine>
      <PdfDocument />
    </LocaleProvider>
  );
}
