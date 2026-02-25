"use client";

import React from "react";

export default function Reviews() {
  return (
    <section className="w-full bg-white py-16 md:py-24 flex justify-center">
      {/* Main Container: 1355px */}
      <div className="w-full max-w-[1355px] px-4">
        
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
            See what all the talk is about
          </h2>
          <p className="text-gray-500 text-lg md:text-xl max-w-3xl">
            Don't take our word for it. Here is what the community has to say about our platform.
          </p>
        </div>

        {/* Static Grid Replacement for Marquee */}
        {/* Each Block: 207px x 106px | Color: #D9D9D9 | Radius: 16px */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div 
              key={item}
              className="w-full h-[106px]"
              style={{
                maxWidth: '207px',
                backgroundColor: '#D9D9D9',
                borderRadius: '16px'
              }}
            />
          ))}
        </div>

      </div>
    </section>
  );
}