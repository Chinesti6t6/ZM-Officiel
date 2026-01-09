import React from "react";
import { motion } from "framer-motion";
import data from "./data.json";
import { 
    Code, Database, Palette, Briefcase, 
    Code as CodeIcon, FileCode, Coffee, Type, Terminal,
    Network, Shield, Zap, Server, HardDrive,
    Monitor, Globe, Layers, Boxes, Smartphone,
    TrendingUp, Users, FileText, GitBranch, BookOpen, MessageSquare,
    GitMerge, Box, Cloud, Activity, CheckCircle
} from "lucide-react";

// Category icon mapping
const categoryIconMap: { [key: string]: React.ComponentType<any> } = {
    "Programming Languages": Code,
    "Backend Development": Database,
    "Frontend Development": Palette,
    "Project Management & Analysis": Briefcase,
    "DevOps & Tools": GitMerge,
};

// Skill icon mapping
const skillIconMap: { [key: string]: React.ComponentType<any> } = {
    Code: CodeIcon,
    FileCode,
    Coffee,
    Type,
    Terminal,
    Network,
    Database,
    Shield,
    Zap,
    Server,
    HardDrive,
    Monitor,
    Palette,
    Globe,
    Layers,
    Boxes,
    Smartphone,
    TrendingUp,
    Users,
    FileText,
    GitBranch,
    BookOpen,
    MessageSquare,
    GitMerge,
    Box,
    Cloud,
    Activity,
    CheckCircle,
};

// Animation variants for scroll-triggered fades
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut",
        },
    },
};

const Skills: React.FC = () => {
    return (
        <motion.div 
            className="relative max-w-5xl mx-auto px-3 my-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h2 
                className="text-3xl font-bold text-center mb-8 text-[var(--text)]"
                variants={itemVariants}
            >
                Skills
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.categories.map((category, index) => {
                    const CategoryIcon = categoryIconMap[category.name] || Code;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="bg-[var(--card-bg)] border border-[var(--card-border)] p-6 rounded-xl hover:border-[var(--accent)] transition-all duration-300 focus-within:outline focus-within:outline-2 focus-within:outline-[var(--accent)]"
                        >
                            <div className="flex items-center mb-4">
                                <CategoryIcon
                                    size={32}
                                    className="text-[var(--text-muted)] mr-3 hover:text-[var(--accent)] transition-colors duration-300"
                                />
                                <h3 className="text-xl font-semibold text-[var(--accent)]">{category.name}</h3>
                            </div>
                            <ul className="space-y-3">
                                {category.skills.map((skill: any, idx: number) => {
                                    const SkillIcon = skillIconMap[skill.icon] || CodeIcon;
                                    const skillName = typeof skill === 'string' ? skill : skill.name;
                                    return (
                                        <motion.li
                                            key={idx}
                                            variants={itemVariants}
                                            className="flex items-center gap-3 text-[var(--text)] text-sm group"
                                            whileHover={{ x: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <SkillIcon
                                                size={18}
                                                className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors duration-300 flex-shrink-0"
                                            />
                                            <span>{skillName}</span>
                                        </motion.li>
                                    );
                                })}
                            </ul>
                        </motion.div>
                    );
                })}
            </div>
        </motion.div>
    );
};

export default Skills;
