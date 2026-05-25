"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { DATA } from "@/constants/data";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/60 backdrop-blur-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* LOGO  */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="size-11 bg-gradient-to-r from-primary/80 to-primary border border-border/80 group-hover:border-primary/50 flex items-center justify-center rounded-lg shadow-sm transition-all duration-300">
            <span className="text-sm font-black tracking-tighter text-zinc-100 group-hover:text--primary-foreground transition-colors">
              MK
            </span>
          </div>
        </a>

        {/* ACTIONS  */}
        <div className="flex items-center gap-3">
          {/* Mon CV */}
          <a
            href="/cv.pdf"
            download="CV_Marina_Kamel.pdf"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-secondary bg-zinc-900/30 border border-border/60 hover:border-secondary/40 hover:text-secondary rounded-lg transition-all"
          >
            <Download className="size-3.5" />
            <span className="sm:inline">Mon CV</span>
          </a>

          {/* Hire Me */}
          <a
            href={`mailto:${DATA.contact.email}`}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium text-white bg-gradient-to-r from-primary/80 to-primary border border-primary/20 hover:from-primary hover:to-primary/90 rounded-lg transition-all shadow-[0_0_12px_rgba(168,85,247,0.15)] hover:shadow-[0_0_16px_rgba(168,85,247,0.3)]"
          >
            <Mail className="size-3.5" />
            Hire Me
          </a>
        </div>

      </div>
    </motion.nav>
  );
}