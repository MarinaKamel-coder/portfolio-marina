"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Sparkles, LayoutGrid, Code2, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SkillsGrid from "./skills-grid";
import { DATA, CURRENT_ACTIVITIES, EXPERIENCES, FORMATIONS, PROJECTS, DETAILED_SKILLS } from "@/constants/data";

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

export default function PortfolioTabs() {
  const [activeTab, setActiveTab] = useState("about");

  const SKILLS_GRID_DATA = [
    {
      title: "FRONTEND & MOBILE",
      colorClass: "text-primary",
      barBg: "bg-primary",
      skills: DETAILED_SKILLS["Développement Frontend & Mobile"].map(s => ({
        name: s.nom,
        level: getLevelPercentage(s.niveau),
      })),
    },
    {
      title: "BACKEND & API",
      colorClass: "text-zinc-400",
      barBg: "bg-zinc-500",
      skills: DETAILED_SKILLS["Développement Backend & API"].map(s => ({
        name: s.nom,
        level: getLevelPercentage(s.niveau),
      })),
    },
    {
      title: "DATABASES & DESKTOP",
      colorClass: "text-primary/80",
      barBg: "bg-primary/80",
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
      colorClass: "text-secondary",
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
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-12">
      {/* Navigation */}
      <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 bg-card/40 border border-border/60 p-1.5 rounded-xl backdrop-blur-md gap-1 h-auto overflow-hidden">
        <TabsTrigger value="about" className="gap-2 text-xs md:text-sm py-2.5 cursor-pointer">
          <LayoutGrid className="size-3.5" /> À propos
        </TabsTrigger>
        <TabsTrigger value="experience" className="gap-2 text-xs md:text-sm py-2.5 cursor-pointer">
          <Briefcase className="size-3.5" /> Expérience
        </TabsTrigger>
        <TabsTrigger value="projects" className="gap-2 text-xs md:text-sm py-2.5 cursor-pointer">
          <Code2 className="size-3.5" /> Projets
        </TabsTrigger>
        <TabsTrigger value="skills" className="gap-2 text-xs md:text-sm py-2.5 cursor-pointer">
          <Sparkles className="size-3.5" /> Compétences
        </TabsTrigger>
        <TabsTrigger value="education" className="gap-2 text-xs md:text-sm py-2.5 cursor-pointer">
          <GraduationCap className="size-3.5" /> Formation
        </TabsTrigger>
      </TabsList>

      {/* À PROPOS */}
      <TabsContent value="about" className="space-y-12 focus:outline-none">
        <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <Card className="p-8 bg-card/30 border-border/60 relative overflow-hidden group hover:border-primary/20 transition-all rounded-2xl">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/5 blur-[60px] rounded-full pointer-events-none" />
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-zinc-100">{DATA.about.title}</h2>
              <h3 className="text-lg text-primary font-medium tracking-wide">{DATA.about.subtitle}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base font-light">{DATA.about.description}</p>
              <div className="pt-6 border-t border-border/40 mt-6">
                <p className="text-xs font-bold uppercase tracking-wider text-primary">Objectif professionnel</p>
                <p className="text-muted-foreground/90 mt-2 text-sm leading-relaxed font-light">{DATA.about.objective}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        <div className="space-y-6">
          <h3 className="text-xl font-bold tracking-tight flex items-center gap-2 text-zinc-100"><Sparkles className="size-4 text-primary" />Actuellement</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {CURRENT_ACTIVITIES.map((activity, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }}>
                <Card className="p-6 bg-card/30 border-border/60 h-full hover:border-secondary/30 hover:bg-card/50 transition-all duration-300 rounded-2xl">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xl bg-zinc-900 p-2 rounded-xl border border-border/50">{activity.icon}</span>
                      <h4 className="font-semibold text-zinc-200 text-sm">{activity.title}</h4>
                    </div>
                    <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground font-light">
                      {activity.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary mt-1 flex-shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </TabsContent>

      {/* EXPÉRIENCE */}
      <TabsContent value="experience" className="relative space-y-8 border-l-2 border-border/40 pl-6 ml-2 focus:outline-none">
        {EXPERIENCES.map((exp, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="relative group">
            <span className="absolute -left-[31px] top-2 size-3.5 rounded-full bg-background border-2 border-primary group-hover:border-secondary transition-all duration-300 shadow-[0_0_8px_rgba(168,85,247,0.2)]" />
            <Card className="p-6 bg-card/30 border-border/60 hover:border-primary/20 hover:bg-card/50 transition-all rounded-2xl">
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-secondary text-sm font-medium mt-0.5">{exp.company}</p>
                  </div>
                  <Badge variant="outline" className={exp.type === "internship" ? "bg-primary/5 text-primary border-primary/20" : "bg-zinc-900 text-zinc-400 border-border"}>
                    {exp.type === "internship" ? "Stage" : "Emploi"}
                  </Badge>
                </div>
                <div className="flex flex-wrap gap-4 text-xs font-mono text-muted-foreground/80">
                  <span>{exp.period}</span><span>•</span><span>{exp.location}</span>
                </div>
                <ul className="space-y-2.5 pt-2">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      <span className="text-primary/70 mt-1 flex-shrink-0">▸</span><span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </TabsContent>

      {/* PROJETS */}
      <TabsContent value="projects" className="grid gap-6 sm:grid-cols-2 focus:outline-none">
        {PROJECTS.map((project, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: idx * 0.05 }}>
            <Card className="p-6 bg-card/30 border-border/60 h-full hover:border-primary/30 hover:bg-card/50 transition-all duration-300 flex flex-col justify-between group rounded-2xl shadow-md hover:shadow-primary/5">
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="space-y-1.5">
                    <h3 className="text-lg font-bold tracking-tight text-zinc-100 group-hover:text-primary transition-colors">{project.title}</h3>
                    <Badge variant="outline" className="border-secondary/20 bg-secondary/5 text-secondary text-[10px] font-mono py-0">{project.badge}</Badge>
                  </div>
                  {project.lien && (
                    <a href={project.lien} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white p-1.5 bg-zinc-900 rounded-lg border border-border/60 hover:border-primary/40 transition-all">
                      <ExternalLink className="size-3.5" />
                    </a>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-6 mt-auto">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 text-[10px] md:text-xs font-mono bg-zinc-900/60 text-zinc-400 rounded-md border border-border/40">{tech}</span>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </TabsContent>

      {/* COMPÉTENCES )*/}

      <TabsContent value="skills" className="focus:outline-none">
        <SkillsGrid /> 
      </TabsContent>

      {/* FORMATION */}
      <TabsContent value="education" className="relative space-y-6 border-l-2 border-border/40 pl-6 ml-2 focus:outline-none">
        {FORMATIONS.map((formation, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: -15 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: idx * 0.08 }} className="relative group">
            <span className="absolute -left-[31px] top-2 size-3.5 rounded-full bg-background border-2 border-secondary group-hover:border-primary transition-all duration-300" />
            <Card className="p-6 bg-card/30 border-border/60 hover:border-secondary/20 hover:bg-card/50 transition-all rounded-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-zinc-100">{formation.titre}</h3>
                  <p className="text-primary text-sm font-medium mt-0.5">{formation.ecole}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground bg-zinc-900/50 px-2.5 py-1 rounded-md border border-border/40 whitespace-nowrap self-start sm:self-center">
                  {formation.date}
                </span>
              </div>
            </Card>
          </motion.div>
        ))}
      </TabsContent>
    </Tabs>
  );
}