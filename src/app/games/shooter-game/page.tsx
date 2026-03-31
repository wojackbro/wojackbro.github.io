'use client';

import TabNavigation from '../../components/TabNavigation';
import Footer from '../../components/Footer';

export default function ShooterGamePage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#0a0f1a]">
      <TabNavigation />
      <section className="w-full pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Shooter Game</h1>
          <p className="text-slate-400 text-lg">Coming soon.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
