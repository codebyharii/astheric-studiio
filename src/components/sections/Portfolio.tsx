import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { ExternalLink, ArrowRight, CornerDownRight } from 'lucide-react';

const projects = [
  {
    title: "NEURAL_NET_V1",
    category: "EXPERIMENTAL_3D",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?q=80&w=1200&auto=format&fit=crop",
    description: "Real-time visualization of synaptic connections using a custom GPU-based particle system.",
    tags: ["Three.js", "GLSL", "GSAP"]
  },
  {
    title: "QUANTUM_DASH",
    category: "FINTECH_INTERFACE",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=1200&auto=format&fit=crop",
    description: "High-frequency trading dashboard with sub-millisecond data rendering and 3D market depth.",
    tags: ["React", "D3.js", "WebGPU"]
  },
  {
    title: "VOID_EXPLORER",
    category: "ORBITAL_ENGINE",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
    description: "First-person orbital exploration engine built purely for web browsers with custom physics.",
    tags: ["Cannon.js", "WebGL", "React Fiber"]
  }
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-48 px-6 md:px-12 bg-black relative">
       {/* Background Text Overlay */}
       <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02] select-none">
          <span className="text-[30vw] font-black whitespace-nowrap leading-none">PROJECT_ARCHIVE_0024</span>
       </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-baseline mb-32 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-blue-500 font-mono text-xs tracking-[0.5em] uppercase mb-4 block">// Selection_Criteria_Selected</span>
            <h2 className="text-6xl md:text-9xl font-black italic uppercase tracking-tighter mix-blend-difference">
               Work_Vault
            </h2>
          </motion.div>
          
          <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full border border-neutral-900 flex items-center justify-center animate-spin-slow">
                 <div className="w-1 h-1 bg-blue-500 rounded-full" />
              </div>
              <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-[0.5em]">
                Scanning_Archive...
              </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true, margin: "-100px" }}
              className="group cursor-none"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950 border border-neutral-900 group-hover:border-blue-500 transition-colors duration-500">
                {/* Image Layer */}
                <motion.div className="w-full h-full" whileHover={{ scale: 1.1 }}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                    />
                </motion.div>

                {/* Info Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                   <div className="flex justify-between items-start">
                      <div className="px-3 py-1 bg-blue-600 text-white font-mono text-[9px] uppercase tracking-widest shadow-lg">
                        {project.category}
                      </div>
                      <motion.div 
                        whileHover={{ rotate: 45 }}
                        className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md"
                      >
                         <ExternalLink size={14} className="text-white" />
                      </motion.div>
                   </div>

                   <div>
                      <h3 className="text-3xl font-bold tracking-tighter text-white mb-4 uppercase italic">
                        {project.title}
                      </h3>
                      <p className="text-neutral-400 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        {project.tags.map(tag => (
                          <span key={tag} className="text-[9px] font-mono border border-white/10 px-2 py-1 rounded-sm text-neutral-500 uppercase">
                            {tag}
                          </span>
                        ))}
                      </div>
                   </div>
                </div>

                {/* Scanner Line Effect */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.div 
                      animate={{ y: ["0%", "100%", "0%"] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                      className="w-full h-[1px] bg-blue-500 shadow-[0_0_15px_blue] z-20"
                    />
                </div>
              </div>

              <div className="mt-8 flex justify-between items-end">
                  <div className="space-y-1">
                      <p className="text-[10px] font-mono text-neutral-600 uppercase flex items-center gap-2">
                        <CornerDownRight size={10} /> Case_Study_0{i + 1}
                      </p>
                      <div className="h-px w-0 group-hover:w-full bg-blue-500 transition-all duration-1000" />
                  </div>
                  <motion.div whileHover={{ x: 5 }} className="text-neutral-700 group-hover:text-white transition-colors">
                      <ArrowRight size={24} />
                  </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global CTA */}
        <motion.div 
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          className="mt-48 pt-24 border-t border-neutral-900 text-center"
        >
            <h3 className="text-neutral-500 font-mono text-xs uppercase tracking-[0.5em] mb-8">End_Of_Selected_Archive</h3>
            <button className="group relative overflow-hidden px-12 py-6 border border-neutral-800 transition-all hover:border-blue-500">
                <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-sm">Full_Manifesto_Access</span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
            </button>
        </motion.div>
      </div>
    </section>
  );
};

