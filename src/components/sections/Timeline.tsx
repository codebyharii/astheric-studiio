import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Clock, Rocket, Sparkles, Zap } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'Aetheris_Corp // Lead_Architect',
    description: 'Masterminding the transition to 4D spatial interfaces and autonomous neural design systems.',
    icon: Zap,
    color: 'text-blue-500'
  },
  {
    year: '2022',
    title: 'Nebula_Protocol // Senior_Dev',
    description: 'Redefining cloud-native visualization frameworks for distributed ledger technologies.',
    icon: Rocket,
    color: 'text-purple-500'
  },
  {
    year: '2020',
    title: 'Synthesis_Lab // Founder',
    description: 'Pioneered generative design languages that bridged the gap between bio-tech and digital aesthetics.',
    icon: Clock,
    color: 'text-emerald-500'
  },
  {
    year: '2018',
    title: 'Foundation_Phase',
    description: 'First steps into low-level shader engineering and competitive creative coding.',
    icon: Sparkles,
    color: 'text-amber-500'
  }
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} id="about" className="py-48 px-6 md:px-12 bg-black relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-32">
          <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
            // Temporal_Trajectory_v4
          </span>
          <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mix-blend-difference">
            Evolution_Path
          </h2>
        </div>

        <div className="relative">
          {/* Animated Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-900 -translate-x-1/2">
            <motion.div 
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]"
            />
          </div>

          <div className="space-y-48">
            {timelineEvents.map((event, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`relative flex flex-col md:flex-row items-center justify-between w-full ${isEven ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-12 md:pl-0">
                    <div className="p-8 border border-neutral-900 bg-neutral-900/20 backdrop-blur-3xl hover:border-blue-500/50 transition-colors group">
                      <div className={`mb-4 ${event.color} transition-transform group-hover:scale-110 duration-500`}>
                        <event.icon size={32} />
                      </div>
                      <span className="font-mono text-4xl font-bold italic mb-2 block">{event.year}</span>
                      <h3 className="text-xl font-bold tracking-tight mb-4 uppercase">{event.title}</h3>
                      <p className="text-neutral-500 font-body text-sm leading-relaxed">
                        {event.description}
                      </p>
                      
                      <div className="mt-8 pt-8 border-t border-neutral-800 flex gap-4 text-[10px] font-mono text-neutral-600 uppercase">
                        <span>Status: Logged</span>
                        <span>Sector: {i + 1}</span>
                      </div>
                    </div>
                  </div>

                  {/* Node Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-neutral-900 border-2 border-neutral-800 -translate-x-1/2 z-10 hidden md:block">
                    <motion.div 
                      whileInView={{ scale: [1, 1.5, 1], backgroundColor: ["#171717", "#3b82f6", "#171717"] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-full h-full rounded-full"
                    />
                  </div>

                  {/* Empty Side for Desktop Spacing */}
                  <div className="hidden md:block md:w-[45%]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
