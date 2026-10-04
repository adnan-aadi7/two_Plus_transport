import React from 'react';
import { FadeIn, StaggerItem, StaggerText, TextReveal } from '../common';

export const TowingDetails: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <h2 className="text-3xl font-extrabold text-slate-900">
            <TextReveal byWord>15-Minute Response Guaranteed Across Doha &amp; Outskirts</TextReveal>
          </h2>
          <FadeIn delay={0.15}>
          <div className="w-16 h-1 bg-[#0066FF] rounded-full"></div>
          <p className="text-slate-700 text-sm leading-relaxed">
            Whether you experienced a tire blow-out, engine breakdown, battery failure, or need safe transport for luxury/exotic sports cars, our tilt-tray flatbed recovery units handle your vehicle with extreme precision.
          </p>
          </FadeIn>

          <StaggerText className="grid grid-cols-1 sm:grid-cols-2 gap-4" stagger={0.12} delay={0.2} as="div">
            <StaggerItem className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase">Hydraulic Tilt Flatbeds</h4>
              <p className="text-[11px] text-slate-600">Zero ground contact loading for low clearance luxury cars</p>
            </StaggerItem>
            <StaggerItem className="p-4 rounded-xl bg-sky-50/60 border border-sky-100">
              <h4 className="text-xs font-bold text-slate-900 uppercase">Roadside Support</h4>
              <p className="text-[11px] text-slate-600">Battery jump start, fuel delivery &amp; tire changing</p>
            </StaggerItem>
          </StaggerText>
        </div>

        <FadeIn className="lg:col-span-5" direction="left" amount={0.2}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 anim-img-hover">
            <img src="/images/towing-service.jpg" alt="Tow Truck Flatbed" loading="lazy" className="anim-img-ken-burns w-full h-80 object-cover" />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
