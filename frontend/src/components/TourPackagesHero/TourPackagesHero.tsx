import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn, TextReveal } from '../common';

interface TourPackagesHeroProps {
  onOpenQuoteModal: (serviceType?: string) => void;
}

export const TourPackagesHero: React.FC<TourPackagesHeroProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="relative py-24 bg-slate-950 text-white overflow-hidden">
      <img src="/images/hero-fleet.jpg" alt="Qatar Tour Packages" className="anim-img-ken-burns absolute inset-0 w-full h-full object-cover object-center opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <FadeIn duration={0.6}>
        <span className="px-3.5 py-1 rounded-full bg-blue-500/20 text-sky-400 border border-blue-500/40 text-xs font-extrabold uppercase tracking-widest">
          EXPLORE QATAR IN LUXURY
        </span>
        </FadeIn>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          <TextReveal byWord delay={0.12}>Qatar Sightseeing &amp; Tour Packages</TextReveal>
        </h1>
        <FadeIn delay={0.32}>
        <p className="text-slate-300 text-base max-w-2xl font-light">
          Discover the beauty of Doha, desert dunes, and cultural landmarks with custom sightseeing charters and professional tour drivers.
        </p>
        </FadeIn>
        <FadeIn delay={0.44}>
        <div className="pt-4">
          <button onClick={() => onOpenQuoteModal('Tour Packages')} className="bg-gradient-to-r from-[#00A3FF] to-[#0055FF] text-white px-6 py-3.5 rounded-xl text-xs font-extrabold flex items-center space-x-2">
            <span>BOOK CUSTOM TOUR PACKAGE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
        </FadeIn>
      </div>
    </div>
  );
};
