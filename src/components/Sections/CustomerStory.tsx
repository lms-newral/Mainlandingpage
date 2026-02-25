"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CustomerStory() {
  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#E2E8F0] mb-6">
            <span className="text-[#0066FF] text-xs">💙</span>
            <span className="text-[12px] font-medium text-[#0066FF]">Wall of Love</span>
          </div>
          <h2 className="text-[48px] font-bold text-[#1A1A1A] mb-4 tracking-tight">
            See what all the talk is about
          </h2>
          <p className="text-[#64748B] text-[18px] max-w-xl mx-auto leading-relaxed">
            Don't take our word for it. Here is what the community has to say about our platform.
          </p>
        </div>

        {/* Cards Container: Gap 40px */}
        <div className="flex flex-row gap-[40px] px-4 overflow-x-auto no-scrollbar pb-8">
          
          {/* Left Card: Text Testimonial */}
          <div 
            className="flex-shrink-0 bg-white border border-black/10 flex overflow-hidden"
            style={{ 
              width: '873px', 
              height: '513px', 
              borderRadius: '16px' 
            }}
          >
            {/* Man's Profile Image */}
            <div className="w-1/2 h-full">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop" 
                alt="Testimonial User" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Quote Content */}
            <div className="w-1/2 p-12 flex flex-col justify-center">
              <p className="text-[28px] font-medium text-[#1A1A1A] leading-[1.3] mb-6">
                "Beautiful analytics. I can finally see where my students struggle."
              </p>
              <div>
                <h4 className="text-[20px] font-bold text-[#1A1A1A]">Elena Gomez,</h4>
                <p className="text-[#64748B] text-[16px]">CEO, Loreum</p>
              </div>
            </div>
          </div>

          {/* Right Card: Video/Woman Profile */}
          <div 
            className="flex-shrink-0 relative overflow-hidden group border border-black/10"
            style={{ 
              width: '873px', 
              height: '513px', 
              borderRadius: '16px' 
            }}
          >
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1740&auto=format&fit=crop" 
              alt="Woman holding clipboard" 
              className="w-full h-full object-cover"
            />
            {/* Playing Indicator */}
            <div className="absolute top-8 left-8 bg-black/40 backdrop-blur-md px-4 py-2 rounded-lg flex items-center gap-2 text-white">
              <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-sm" />
              </div>
              <span className="text-[14px] font-medium tracking-wide">Playing</span>
            </div>
          </div>

        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 mt-8">
          <button className="w-[50px] h-[50px] rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button className="w-[50px] h-[50px] rounded-full bg-[#F1F5F9] flex items-center justify-center text-[#64748B] hover:bg-[#E2E8F0] transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>

      </div>
    </section>
  );
}