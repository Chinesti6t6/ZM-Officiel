import React from "react";
import data from "./data.json";
import { Code, Database, Palette, Briefcase, Award } from "lucide-react";

const iconMap: { [key: string]: React.ComponentType<any> } = {
    "Programming Languages": Code,
    "Backend Development": Database,
    "Frontend Development": Palette,
    "Project Management & Analysis": Briefcase,
    "Certifications & Specialties": Award,
};

const Skills: React.FC = () => {
    return (
        <div className="relative max-w-5xl mx-auto px-3 my-16">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.categories.map((category, index) => {
                    const IconComponent = iconMap[category.name] || Code;
                    return (
                        <div key={index} className="bg-primary bg-opacity-5 border border-primary p-6 rounded-xl">
                            <div className="flex items-center mb-4">
                                <IconComponent size={32} className="text-gray-400 mr-3" />
                                <h3 className="text-xl font-semibold text-primary">{category.name}</h3>
                            </div>
                            <ul className="list-disc list-inside text-slate-200 space-y-2">
                                {category.skills.map((skill, idx) => (
                                    <li key={idx} className="text-sm">{skill}</li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;