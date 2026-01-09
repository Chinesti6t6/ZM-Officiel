import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Icon } from '@iconify/react';

interface ProjectCardType {
    title: string;
    coreConcept: string;
    detailedPoints: string[];
    lucideIcon: string;
    showcase: {
        image: string;
        url: string;
    };
}

const Card: React.FC<{ project: ProjectCardType; rtl?: boolean }> = ({
    project,
    rtl = true,
}) => {
    const [expanded, setExpanded] = React.useState(false);

    const Showcase = () => {
        if (!project.showcase.image) return null;
        return (
            <div className="border border-primary p-2 bg-primary bg-opacity-5 rounded-xl">
                <img
                    src={project.showcase.image}
                    alt={project.title}
                    className="w-[95vw] md:max-w-sm max-h-[270px] object-cover object-top rounded mb-2"
                />
            </div>
        );
    };

    const Details = () => (
        <div className="flex-1 flex flex-col items-center md:items-start justify-start space-y-4">
            <div className="flex items-center gap-4 mb-4">
                <Icon icon={`lucide:${project.lucideIcon.toLowerCase()}`} className="text-primary text-4xl" />
                <h3 className="font-extrabold tracking-wider underline-offset-4 text-3xl text-primary leading-tight">
                    {project.title}
                </h3>
            </div>
            {project.coreConcept && (
                <h4 className="font-semibold text-slate-300 text-lg mb-4 italic">
                    {project.coreConcept}
                </h4>
            )}
            {isConfidential ? (
                <div className="text-justify text-base mt-4 mb-6 leading-relaxed space-y-4">
                    {project.detailedPoints.map((point, idx) => (
                        <p key={idx}>{point}</p>
                    ))}
                </div>
            ) : (
                <p className="text-justify text-base mt-4 mb-6 leading-relaxed">
                    {project.detailedPoints[0]}
                </p>
            )}
            {!isConfidential && (
                <AnimatePresence>
                    {expanded && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden space-y-4"
                        >
                            <div className="mb-6">
                                <h4 className="font-semibold text-primary mb-4 text-lg">Detailed Points:</h4>
                                <ul className="list-disc list-inside text-base text-slate-200 space-y-2 leading-relaxed">
                                    {project.detailedPoints.slice(1).map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            )}
            {!isConfidential && (
                <button
                    onClick={() => setExpanded(!expanded)}
                    className="px-6 py-3 bg-primary bg-opacity-10 text-primary rounded-full font-semibold tracking-widest hover:bg-opacity-20 transition-all duration-300 text-lg"
                >
                    {expanded ? 'Show Less' : 'Learn More'}
                </button>
            )}
        </div>
    );

    const isConfidential = project.title.includes("CONFIDENTIAL");

    return (
        <>
            {rtl ? (
                <>
                    <div className="inline-flex md:hidden">
                        <Showcase />
                    </div>
                    <div className={`relative flex flex-col md:flex-row items-start justify-evenly max-w-6xl mx-auto px-6 gap-10 my-20 ${isConfidential ? 'backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-8 shadow-2xl' : ''}`}>
                        <Details />
                        <div className="hidden md:inline-flex">
                            <Showcase />
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <Showcase />
                    <Details />
                </>
            )}
        </>
    );
};

export interface ProjectCardType {
    title: string;
    coreConcept: string;
    detailedPoints: string[];
    lucideIcon: string;
    showcase: {
        image: string;
        url: string;
    };
}

export default Card;