"use client";

import PricingTable from "@/components/packages/pricing-table";

export default function WebhostingPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden glow-background">
        <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-purple-500/25 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] left-[30%] w-[600px] h-[600px] bg-indigo-500/25 rounded-full blur-[140px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-16">
            <h1 className="text-5xl font-extrabold leading-[1.25] mb-8 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-gradient float-animation relative z-10">
            Premium Web Hosting Plans<br />for Every Business Need
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            <span className="text-2xl">Choose your pace.</span> Add capabilities as you grow.
            <br />
            No pressure to buy more than you need.
          </p>
        </div>

        <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl rounded-lg shadow-lg p-16 glass-card relative overflow-hidden">
          <PricingTable />
        </div>
      </div>
    </main>
  );
}
