import { motion } from 'motion/react';
import { ChevronDown, Zap, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  return (
    <section className="relative h-[250vh] w-full flex flex-col items-center">
      {/* Sticky Content Area */}
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden px-6">
        
        {/* Background Grid Pattern - Visual Polish */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #ffffff22 1px, transparent 0)', backgroundSize: '40px 40px' }} />

        <div className="max-w-7xl w-full z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-16">
            
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-blue-500" />
                <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase">
                  Aetheris_Protocol_Active
                </span>
              </div>
              <h1 className="text-7xl md:text-[12rem] font-bold tracking-tighter leading-[0.75] uppercase italic font-headline">
                REDEFINING<br />
                <span className="text-transparent border-text text-outline opacity-50">REALITY</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="lg:max-w-md bg-neutral-950/40 backdrop-blur-2xl p-10 border border-neutral-900"
            >
              <p className="text-neutral-400 text-lg leading-relaxed font-light mb-10">
                Pioneering the next generation of creative technology through <span className="text-white font-medium">high-fidelity 3D graphics</span>, 
                spatial human-computer interfaces, and complex mathematical visualizations.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-none px-10 h-16 bg-blue-600 text-white hover:bg-blue-500 uppercase tracking-widest text-xs font-bold shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                  Initialize_System
                </Button>
                <Button variant="outline" size="lg" className="rounded-none px-10 h-16 border-neutral-800 hover:bg-neutral-900 uppercase tracking-widest text-xs font-bold font-mono">
                  Explore_Core
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Technical Specs Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-neutral-900 pt-10"
          >
            {[
              { label: 'Latency_Optimized', value: '0.002ms', icon: Zap },
              { label: 'Global_Sync', value: 'SAT_LINK_9', icon: Globe },
              { label: 'Compute_Grade', value: 'AETHER_V4', icon: Cpu },
              { label: 'Neural_Engine', value: 'COGNITIVE_S7', icon: Cpu }
            ].map((spec, i) => (
              <div key={i} className="flex flex-col gap-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-600 flex items-center gap-2">
                  <spec.icon size={10} /> {spec.label}
                </span>
                <span className="text-sm font-bold uppercase tracking-tight">{spec.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <span className="text-[9px] font-mono tracking-[0.6em] uppercase vertical-text">Scroll_Down</span>
          <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent" />
          <ChevronDown className="w-3 h-3 text-blue-500" />
        </motion.div>
      </div>

      {/* Transitional Section for Scrolling Visuals */}
      <div className="h-screen w-full flex items-center justify-center p-6 bg-transparent">
        <motion.div 
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="max-w-4xl text-center"
        >
            <h2 className="text-[8vw] font-black tracking-tighter uppercase leading-[0.8] mb-12 select-none pointer-events-none">
              THE_FUTURE<br />
              <span className="text-blue-500 italic">IS_SPATIAL</span>
            </h2>
            <div className="w-24 h-px bg-neutral-800 mx-auto mb-12" />
            <p className="text-neutral-500 font-mono text-sm max-w-xl mx-auto leading-loose uppercase tracking-widest px-8">
              "We don't just build websites. We construct digital architecture that responds to the rhythm of human interaction."
            </p>
        </motion.div>
      </div>
    </section>
  );
};

