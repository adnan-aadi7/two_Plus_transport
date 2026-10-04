import React from 'react';
import { AboutSection, MissionValues, LeadershipSection } from '../../components/Home';
import { FadeIn, TextReveal } from '../../components/common';

interface AboutUsPageProps {
  onOpenQuoteModal: () => void;
}

export const AboutUsPage: React.FC<AboutUsPageProps> = ({ onOpenQuoteModal }) => {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-slate-950 text-white py-16 text-center relative overflow-hidden">
        <img src="/images/about-fleet.jpg" alt="" aria-hidden="true" className="anim-img-ken-burns absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative">
          <h1 className="text-4xl font-black"><TextReveal byWord>About Two Plus Transport WLL</TextReveal></h1>
          <FadeIn delay={0.3}><p className="text-slate-400 text-sm mt-2">Connecting Qatar through dependable, safe, and professional transportation solutions.</p></FadeIn>
        </div>
      </div>
      <AboutSection onOpenQuoteModal={onOpenQuoteModal} />
      <MissionValues />
      <LeadershipSection />
    </div>
  );
};
