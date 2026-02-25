"use client";

import { Check, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "$10",
    description: "Perfect for developers building web agents and data workflows.",
    features: ["Parse API", "Up to 5 seats for Reducto Studio", "Parse API", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio"],
  },
  {
    name: "Beginner",
    price: "$50",
    isPopular: true,
    description: "Perfect for developers building web agents and data workflows.",
    features: ["Parse API", "Up to 5 seats for Reducto Studio", "Parse API", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio"],
  },
  {
    name: "Enterprise",
    price: "$90",
    description: "Perfect for developers building web agents and data workflows.",
    features: ["Parse API", "Up to 5 seats for Reducto Studio", "Parse API", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio", "Up to 5 seats for Reducto Studio"],
  }
];

export default function PricingContent({ isAnnual }: { isAnnual: boolean }) {
  return (
    /* FIXED: pb-8 ensures there isn't a massive gap before the next section */
    <section className="relative z-20 mx-auto w-full max-w-[1362px] px-4 pb-8 -mt-32 md:-mt-64 lg:px-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-[24px]">
        {plans.map((plan, index) => {
          const isMiddle = index === 1;
          const displayPrice = isAnnual ? `$${parseInt(plan.price.replace('$', '')) * 0.8}` : plan.price;

          return (
            <div key={plan.name} className={`flex flex-col rounded-[2.5rem] p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 ${isMiddle ? "bg-[#0055FF] text-white shadow-2xl scale-100 md:scale-105 z-10" : "border border-gray-100 bg-white text-gray-900 shadow-xl"}`}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-xl font-medium">{plan.name}</h3>
                {plan.isPopular && <span className="rounded-full bg-white px-3 py-1 text-[11px] font-bold text-black">Most popular</span>}
              </div>

              <div className="mb-4 flex items-baseline">
                <span className="text-5xl font-medium tracking-tight">{displayPrice}</span>
                <span className={`ml-1 text-sm ${isMiddle ? "text-blue-200" : "text-gray-400"}`}>{isAnnual ? "/yearly" : "/monthly"}</span>
              </div>

              <p className={`mb-8 min-h-[48px] text-[15px] leading-relaxed ${isMiddle ? "text-blue-100" : "text-gray-500"}`}>{plan.description}</p>

              <button className={`w-full py-3.5 rounded-full text-[15px] font-medium mb-10 transition-all ${isMiddle ? "bg-white text-black hover:bg-gray-50" : "bg-black text-white hover:bg-gray-800"}`}>
                Book plan
              </button>

              <div className="flex-1">
                <p className={`text-sm font-medium mb-5 ${isMiddle ? "text-white" : "text-gray-900"}`}>Features</p>
                <ul className="space-y-4 text-[14px]">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-[10px]">
                      {isMiddle ? (
                        <div className="shrink-0 w-5 h-5 rounded-full bg-white flex items-center justify-center mt-0.5"><Check className="w-3.5 h-3.5 text-[#0055FF]" strokeWidth={3} /></div>
                      ) : (
                        <Check className="shrink-0 w-5 h-5 text-[#34C759] mt-0.5" strokeWidth={2.5} />
                      )}
                      <span className={isMiddle ? "text-blue-50" : "text-gray-600"}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}