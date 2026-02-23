"use client";

import React from "react";

export default function DemoHero() {
  return (
    <section className="w-full flex justify-center bg-gray-50 px-4 py-12 md:pb-24">
      {/* Main Container: 1355px x 674px with 24px Radius */}
      <div 
        className="flex flex-col md:flex-row bg-white overflow-hidden w-full"
        style={{ 
          maxWidth: '1355px', 
          minHeight: '674px', 
          borderRadius: '24px',
          boxShadow: '0 4px 35px 0 rgba(0, 0, 0, 0.1)' // Shadow per Figma
        }}
      >
        {/* Left Column: Info Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-between p-8 md:p-12 lg:p-16">
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
              Optimize your workforce <br />
              <span className="text-[#0066FF]">with Synappses</span>
            </h1>

            <div className="mt-8">
              <p className="font-bold text-gray-900 mb-4 text-base md:text-lg">What to expect from a hands-on demo</p>
              <ul className="space-y-3 md:space-y-4">
                {[
                  "Lorum Ipsum dashboard experience",
                  "Guidance from a highly experienced workforce consultant",
                  "Consistent service levels exceeding 95% daily",
                  "Focused on the specific requirements of your organization",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#0066FF] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 md:mt-10">
            <p className="text-sm font-bold text-gray-900 mb-2">You can also reach out to us on</p>
            <p className="text-gray-500 text-sm md:text-base font-medium">+91-700490223</p>
            <p className="text-gray-500 text-sm md:text-base font-medium">info@synappses.in</p>
            
            <div className="mt-10 md:mt-12">
              <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-4">
                Trusted by fast-growing companies around the world
              </p>
              {/* Trusted Blocks: 207px x 106px, Radius 16px, Color #D9D9D9 */}
              <div className="flex flex-wrap gap-4">
                {[1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className="h-[60px] w-[120px] md:h-[75px] md:w-[150px]" 
                    style={{ 
                        backgroundColor: '#D9D9D9',
                        borderRadius: '16px'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Branding Box: 667px Width x 785px Height */}
        <div 
          className="bg-[#0066FF] relative flex items-center justify-center p-12 w-full md:w-[667px]"
          style={{ minHeight: '785px' }}
        >
          <div className="absolute top-8 left-8 md:top-10 md:left-10">
            <p className="text-white text-lg md:text-xl font-medium">Request a demo today</p>
          </div>

          
        </div>
      </div>
    </section>
  );
}