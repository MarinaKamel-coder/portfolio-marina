"use client";

import { motion } from "framer-motion";
import { DETAILED_SKILLS } from "@/constants/data";

const getLevelPercentage = (level?: string): number => {
  if (!level) return 85; 
  switch (level) {
    case "Avancé":
      return 92;
    case "Intermédiaire":
      return 80;
    case "Débutant":
      return 65;
    default:
      return 85;
  }
};

export default function SkillsGrid() {
  const SKILLS_DATA = [
    {
      title: "FRONTEND & MOBILE",
      colorClass: "text-white", 
      barBg: "bg-primary",
      skills: DETAILED_SKILLS["Développement Frontend & Mobile"].map(s => ({
        name: s.nom,
        level: getLevelPercentage(s.niveau),
      })),
    },
    {
      title: "BACKEND & API",
      colorClass: "text-white", 
      barBg: "bg-red-800",
      skills: DETAILED_SKILLS["Développement Backend & API"].map(s => ({
        name: s.nom,
        level: getLevelPercentage(s.niveau),
      })),
    },
    {
      title: "DATABASES & DESKTOP",
      colorClass: "text-white", 
      barBg: "bg-cyan-600/80",
      skills: [
        ...DETAILED_SKILLS["Bases de données"].map(db => ({ name: db, level: 88 })),
        ...DETAILED_SKILLS["Applications de Bureau"].map(d => ({
          name: d.nom,
          level: getLevelPercentage(d.niveau),
        })),
      ],
    },
    {
      title: "TOOLS & WORKFLOW",
      colorClass: "text-white", 
      barBg: "bg-secondary",
      skills: [
        ...DETAILED_SKILLS["Outils & DevOps"].map(o => ({
          name: o.nom,
          level: getLevelPercentage(o.niveau),
        })),
        ...DETAILED_SKILLS["Gestion & Agilité"].slice(0, 3).map(g => ({ name: g, level: 90 })), 
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
      {SKILLS_DATA.map((category, catIdx) => (
        <div
          key={catIdx}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/20 backdrop-blur-md p-6 flex flex-col justify-between shadow-md hover:border-cyan-500/20 transition-colors"
        >
          <div>
            {/* EN-TÊTE DE LA CATÉGORIE */}
            <div className="flex items-center gap-2 mb-6">
              <span className={`size-1.5 rounded-full ${category.barBg}`} />
              <h3 className={`text-xs font-black tracking-widest ${category.colorClass}`}>
                {category.title}
              </h3>
            </div>

            {/* LISTE DES COMPÉTENCES */}
            <div className="space-y-4">
              {category.skills.map((skill, skillIdx) => (
                <div key={skillIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs font-medium">
                    <span className="text-zinc-300 font-light">{skill.name}</span>
                    <span className="text-zinc-500 font-mono text-[10px]">{skill.level}%</span>
                  </div>
                  
                  {/* CONTENEUR DE LA BARRE */}
                  <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-900/50">
                    {/* BARRE ANIMÉE */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut", delay: skillIdx * 0.03 }}
                      className={`h-full ${category.barBg} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}