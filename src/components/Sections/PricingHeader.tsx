"use client";

import type { Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";

interface PricingHeaderProps {
  isAnnual: boolean;
  setIsAnnual: Dispatch<SetStateAction<boolean>>;
}

export default function PricingHeader({ isAnnual, setIsAnnual }: PricingHeaderProps) {
  return (
    <section className="relative pt-24 md:pt-40 pb-44 md:pb-72 px-4 flex flex-col items-center text-center bg-[linear-gradient(180deg,_rgba(255,255,255,0.1)_14%,_rgba(0,102,255,0.1)_100%)]">
      <h1 className="text-4xl sm:text-5xl md:text-[64px] font-semibold tracking-tighter text-gray-900 leading-[1.1]">
        Plans designed to match <br className="hidden md:block" />
        your <span className="text-[#1863FF]">learning goals.</span>
      </h1>

      <p className="mt-6 font-medium text-gray-800 max-w-2xl mx-auto text-lg md:text-[20px] leading-snug">
        Synappses grows with you. Choose the products your organization needs today.
      </p>

      <div className="mt-10 inline-flex items-center p-1 bg-black rounded-full relative shadow-lg scale-90 sm:scale-100">
        <button
          onClick={() => setIsAnnual(false)}
          className={`relative z-10 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium transition-colors duration-300 ${!isAnnual ? "text-black" : "text-gray-400"}`}
        >
          {!isAnnual && <motion.div layoutId="pill" className="absolute inset-0 bg-white rounded-full -z-10" />}
          Monthly
        </button>

        <button
          onClick={() => setIsAnnual(true)}
          className={`relative z-10 flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 rounded-full text-sm font-medium transition-colors duration-300 ${isAnnual ? "text-black" : "text-gray-400"}`}
        >
          {isAnnual && <motion.div layoutId="pill" className="absolute inset-0 bg-white rounded-full -z-10" />}
          Annual
          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#0d993032] text-[#0D992F]">
            -20%
          </span>
        </button>
      </div>
    </section>
  );
}
