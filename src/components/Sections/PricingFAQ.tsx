"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const pricingFaqs = [
  {
    question: "Why would I use this?",
    answer: "Synappses provides a streamlined, all-in-one platform for managing courses, tracking progress, and engaging with your audience effectively.",
  },
  {
    question: "How is it different from other AI design generation tools?",
    answer: "Unlike other tools, we focus specifically on LMS integrations, ensuring that all generated content is perfectly formatted for educational platforms.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer: "We offer unmatched customization, a seamless branded mobile app experience, and intuitive analytics that actually help you grow.",
  },
  {
    question: "How does the setup process work?",
    answer: "It saves time, reduces administrative overhead, and provides a much better learning experience for your students.",
  },
  {
    question: "Can I migrate my existing courses?",
    answer: "Our platform is built from the ground up for modern creators, combining community features with robust course delivery.",
  },
  {
    question: "Is there a dedicated support team?",
    answer: "We pride ourselves on our 24/7 dedicated support team and our constant rollout of community-requested features.",
  },
];

export default function PricingFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    /* FIXED: Adjusted padding to sit better within the white rounded container */
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
      <div className="flex flex-col lg:flex-row lg:gap-20 xl:gap-32">
        
        <div className="lg:w-1/3 flex flex-col items-start mb-12 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Frequently Asked <br className="hidden sm:block" /> Questions
          </h2>
          
          <div className="mt-6 md:mt-10 p-5 rounded-2xl bg-gray-50/50 border border-gray-100 w-full lg:w-fit">
            <p className="text-sm font-bold text-gray-900">
              Can't find the answer here?
            </p>
            <a 
              href="#contact" 
              className="text-sm text-[#0066FF] hover:text-blue-700 font-medium transition-colors underline decoration-blue-200 underline-offset-4 mt-2 inline-block"
            >
              Contact our support team
            </a>
          </div>
        </div>

        <div className="lg:w-2/3 flex flex-col border-t lg:border-t-0 border-gray-100">
          {pricingFaqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-[20px] leading-snug tracking-[-0.02em] font-semibold text-gray-900 pr-6 transition-colors group-hover:text-[#0066FF]">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded-full transition-all duration-300 ${isOpen ? 'bg-[#0066FF] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base md:text-[17px] leading-relaxed text-gray-600 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}