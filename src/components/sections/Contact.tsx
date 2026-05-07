import { motion } from 'motion/react';
import { Send, MapPin, Mail, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Contact = () => {
  return (
    <section id="contact" className="py-48 px-6 md:px-12 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <span className="text-blue-500 font-mono text-xs tracking-[0.4em] uppercase mb-4 block">
              // Establish_Uplink_v4.2
            </span>
            <h2 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-12">
              Get_In<br /><span className="text-outline text-transparent">TOUCH</span>
            </h2>
            
            <div className="space-y-12">
              <p className="text-neutral-400 text-lg max-w-md leading-relaxed font-light">
                Ready to transcend digital boundaries? Send a secure transmission 
                to initiate collaboration or protocol discussions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Protocol_Email</p>
                    <p className="text-xl font-bold group-hover:text-blue-500 transition-colors">hello@aetheris.studio</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-neutral-800 flex items-center justify-center group-hover:bg-purple-600 group-hover:border-purple-600 transition-all">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-widest">Node_Location</p>
                    <p className="text-xl font-bold group-hover:text-purple-500 transition-colors">Neo_Tokyo_Sector_7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="p-8 md:p-12 border border-neutral-800 bg-neutral-900/20 backdrop-blur-3xl relative overflow-hidden">
              {/* Corner Accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-blue-500/30" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-blue-500/30" />

              <form className="space-y-8">
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Subject_Identity</label>
                  <Input 
                    placeholder="ENTER_NAME_OR_OS" 
                    className="rounded-none bg-black/50 border-neutral-800 h-14 border-x-0 border-t-0 focus:border-blue-500 transition-colors"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Return_Channel</label>
                  <Input 
                    type="email"
                    placeholder="COMMAND_EMAIL@LINK.COM" 
                    className="rounded-none bg-black/50 border-neutral-800 h-14 border-x-0 border-t-0 focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-[10px] uppercase tracking-[0.2em] text-neutral-500">Message_Payload</label>
                  <textarea 
                    placeholder="DESCRIBE_OBJECTIVE..." 
                    className="w-full min-h-[150px] rounded-none bg-black/50 border border-neutral-800 p-4 focus:border-blue-500 outline-none transition-colors border-x-0 border-t-0"
                  />
                </div>

                <Button className="w-full h-16 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-[0.3em] uppercase group flex items-center justify-center gap-4 transition-all">
                  Execute_Transmission
                  <Send size={18} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Social Links Sidebar / Floating */}
            <div className="mt-12 flex gap-4 md:absolute md:-right-24 md:top-1/2 md:-rotate-90 md:translate-x-12">
               {['TWITTER', 'GITHUB', 'LINKEDIN', 'DRIBBBLE'].map((social) => (
                 <a key={social} href="#" className="font-mono text-[10px] tracking-widest text-neutral-500 hover:text-white transition-colors flex items-center gap-2 group">
                   {social} <ArrowUpRight size={10} className="group-hover:translate-x-1 transition-transform" />
                 </a>
               ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
