import React from "react";

export default function PricingContent() {
  return (
    <div className="relative mx-auto w-full flex flex-col pt-32 md:pt-42 pb-20">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-neutral-900 mb-6">
          Simple, transparent pricing
        </h1>
        <p className="text-xl text-neutral-500 max-w-2xl mx-auto">
          Choose the plan that fits your needs. No hidden fees, cancel anytime.
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Starter</h3>
            <p className="text-3xl font-bold mb-4">
              $0 <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-gray-500 mb-8 flex-grow">
              Perfect for trying out the platform.
            </p>
            <button className="w-full py-3 rounded-full border border-blue-600 text-blue-600 font-bold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-2xl border border-blue-200 bg-blue-50/30 shadow-md flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
              POPULAR
            </div>
            <h3 className="text-xl font-semibold mb-2 text-blue-900">Pro</h3>
            <p className="text-3xl font-bold mb-4">
              $29 <span className="text-base font-normal text-gray-500">/mo</span>
            </p>
            <p className="text-gray-600 mb-8 flex-grow">
              For growing teams and businesses needing more power.
            </p>
            <button className="w-full py-3 rounded-full bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
              Get Started
            </button>
          </div>

          <div className="p-8 rounded-2xl border border-gray-200 bg-white shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
            <p className="text-3xl font-bold mb-4">Custom</p>
            <p className="text-gray-500 mb-8 flex-grow">
              For large organizations with specific security needs.
            </p>
            <button className="w-full py-3 rounded-full border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
