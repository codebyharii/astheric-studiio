/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MainScene } from './components/3d/MainScene';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { Portfolio } from './components/sections/Portfolio';
import { Skills } from './components/sections/Skills';
import { Timeline } from './components/sections/Timeline';
import { Contact } from './components/sections/Contact';
import { useEffect } from 'react';
import { useAppStore } from './store/useAppStore';

export default function App() {
  const setScrollProgress = useAppStore((state) => state.setScrollProgress);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrolled / (maxScroll || 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setScrollProgress]);

  return (
    <main className="relative bg-black text-white selection:bg-blue-500 selection:text-white">
      <MainScene />

      <div className="relative z-10 w-full">
        <Navbar />
        
        <Hero />
        
        <Portfolio />

        <Timeline />
        
        <Skills />

        <Contact />

        <footer className="py-24 px-6 border-t border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-8 font-mono text-[10px] text-neutral-500 tracking-widest uppercase bg-black">
            <div className="flex gap-12">
                <span className="hover:text-white transition-colors cursor-pointer">PRIVACY_PROTOCOL</span>
                <span className="hover:text-white transition-colors cursor-pointer">SYSTEM_TERMS</span>
            </div>
            <div className="text-center md:text-right">
                <p>© 2024 AETHERIS_CORE // MANIFESTED_IN_3D_SPACE</p>
                <p className="mt-2 opacity-50">STABLE_REL_V4.2.0_LATEST</p>
            </div>
        </footer>
      </div>
      
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </main>
  );
}
