"use client";

import React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircleQuestion, ArrowRight, Sparkles } from "lucide-react";

// Upgraded, high-quality FAQs focusing on enterprise features, security, and scaling.
const faqs = [
  {
    question: "Why would I use this?",
    answer:
      "Synappses provides a streamlined, all-in-one platform for managing courses, tracking progress, and engaging with your audience effectively.",
  },
  {
    question: "How is it different from other AI design generation tools?",
    answer:
      "Unlike other tools, we focus specifically on LMS integrations, ensuring that all generated content is perfectly formatted for educational platforms.",
  },
  {
    question: "Why Synappses over other LMS?",
    answer:
      "We offer unmatched customization, a seamless branded mobile app experience, and intuitive analytics that actually help you grow.",
  },
  {
    question: "How does the setup process work?",
    answer:
      "It saves time, reduces administrative overhead, and provides a much better learning experience for your students.",
  },
  {
    question: "Can I migrate my existing courses?",
    answer:
      "Our platform is built from the ground up for modern creators, combining community features with robust course delivery.",
  },
  {
    question: "Is there a dedicated support team?",
    answer:
      "We pride ourselves on our 24/7 dedicated support team and our constant rollout of community-requested features.",
  },
];

export default function FAQSection() {
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
          <h2 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-neutral-900 sm:text-4xl md:text-5xl lg:text-[56px]">
            All your questions, <br />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              answered clearly.
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-slate-500 sm:text-lg md:text-xl">
            Everything you need to know about launching, securing, and scaling
            your educational platform with Synappses.
          </p>
        </div>

        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column - CTA Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <div className="relative overflow-hidden rounded-[2rem] border border-blue-100 bg-[#F7FAFF] p-8 shadow-xl shadow-blue-900/5 md:p-10">
              
              {/* Decorative background gradients */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-200/50 blur-3xl"></div>
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl"></div>

            return (
              <div key={index} className="border-b border-gray-100">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                >
                  <span className="text-lg md:text-[20px] leading-snug tracking-[-0.02em] font-semibold text-gray-900 pr-6 transition-colors group-hover:text-[#0066FF]">
                    {faq.question}
                  </span>
                  <div
                    className={`p-1 rounded-full transition-all duration-300 ${isOpen ? "bg-[#0066FF] text-white rotate-180" : "bg-gray-100 text-gray-500"}`}
                  >
                    <ChevronDown className="h-4 w-4" strokeWidth={2.5} />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.04, 0.62, 0.23, 0.98],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-base md:text-[17px] leading-relaxed text-gray-600 max-w-2xl">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="lg:col-span-7">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="w-full space-y-4"
            >
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.value}
                  value={faq.value}
                  className="group rounded-2xl border border-slate-200 bg-white px-5 transition-all duration-200 ease-in-out hover:border-blue-300 hover:shadow-md data-[state=open]:border-blue-200 data-[state=open]:bg-blue-50/30 data-[state=open]:shadow-sm sm:px-6"
                >
                  <AccordionTrigger className="py-5 text-left hover:no-underline sm:py-6">
                    <span className="text-base font-semibold leading-relaxed tracking-tight text-neutral-900 group-data-[state=open]:text-blue-700 sm:text-lg">
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-slate-600 sm:text-[17px]">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
