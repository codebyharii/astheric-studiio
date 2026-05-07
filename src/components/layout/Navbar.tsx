import { motion } from 'motion/react';
import { Terminal, Github, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-8"
    >
      <div className="flex items-center gap-2">
        <Terminal className="w-6 h-6 text-blue-500" />
        <span className="text-xl font-bold tracking-tighter uppercase whitespace-nowrap">
          Aetheris<span className="text-blue-500">.</span>Studio
        </span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity">
        <a href="#work" className="hover:text-blue-400 transition-colors">Project_Archive</a>
        <a href="#about" className="hover:text-blue-400 transition-colors">Entity_Info</a>
        <a href="#contact" className="hover:text-blue-400 transition-colors">Establish_Link</a>
      </div>

      <div className="flex items-center gap-4">
        <div className="hidden sm:flex items-center gap-2">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Github className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Linkedin className="w-4 h-4" />
          </Button>
        </div>
        <Button className="rounded-none bg-blue-600 hover:bg-blue-700 text-white font-mono text-xs tracking-widest px-6 h-10 uppercase">
          Launch_App
        </Button>
      </div>
    </motion.nav>
  );
};
