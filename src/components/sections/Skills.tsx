import { motion } from 'motion/react';
import { ResponsiveContainer, Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';
import { Cpu, Globe, Layers, Zap, Code, Database } from 'lucide-react';
import { Card } from '@/components/ui/card';

const skillData = [
  { subject: 'Three.js', A: 120, fullMark: 150 },
  { subject: 'React', A: 98, fullMark: 150 },
  { subject: 'Shaders', A: 86, fullMark: 150 },
  { subject: 'GSAP', A: 99, fullMark: 150 },
  { subject: 'TypeScript', A: 85, fullMark: 150 },
  { subject: 'WebGPU', A: 65, fullMark: 150 },
];

export const Skills = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <span className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase mb-4 block">
              // Technical_Stack_Evaluation
            </span>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase italic">
              ENGINEERING<br />CREATIVE_SOLUTIONS
            </h2>
          </div>
          <div className="text-right">
              <p className="text-neutral-500 font-mono text-xs uppercase tracking-widest">Core_Competencies_v2.4.0</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Radar Chart Card */}
          <Card className="md:col-span-2 bg-neutral-900/40 border-neutral-800 backdrop-blur-xl p-8 rounded-none flex flex-col justify-center items-center h-[400px]">
            <h3 className="text-xs font-mono uppercase tracking-[0.4em] text-neutral-500 mb-8 self-start">Biometric_Skill_Scan</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={skillData}>
                <PolarGrid stroke="#333" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#666', fontSize: 10, fontFamily: 'monospace' }} />
                <Radar
                  name="Proficiency"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.6}
                />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          {/* Quick Metrics */}
          <div className="flex flex-col gap-6">
            {[
              { icon: Cpu, label: 'Compute_Optimization', value: '98%' },
              { icon: Globe, label: 'Cross_Browser_Sync', value: '100%' },
              { icon: Zap, label: 'Animation_Latency', value: '0.04ms' },
            ].map((item, i) => (
              <Card key={i} className="bg-neutral-950 border-neutral-900 p-6 rounded-none flex items-center justify-between group hover:border-blue-500 transition-colors cursor-default">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-neutral-900 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                    <item.icon size={20} />
                  </div>
                  <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white">{item.label}</span>
                </div>
                <span className="text-xl font-bold tracking-tighter transition-all group-hover:translate-x--2">{item.value}</span>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {[
                { label: 'WebGL_2.0', icon: Layers },
                { label: 'GLSL_Shaders', icon: Code },
                { label: 'Node_Infrastructure', icon: Database },
                { label: 'Realtime_Physics', icon: Zap }
            ].map((item, i) => (
                <div key={i} className="p-8 border border-neutral-900 flex flex-col gap-4 items-center text-center group hover:bg-neutral-900 transition-colors">
                    <item.icon className="w-8 h-8 text-neutral-700 group-hover:text-blue-500 transition-colors" />
                    <span className="text-[10px] font-mono tracking-[0.2em] text-neutral-500 uppercase">{item.label}</span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
