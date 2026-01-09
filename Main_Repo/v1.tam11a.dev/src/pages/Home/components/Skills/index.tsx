import React from "react";
import data from "./data.json";

const Skills: React.FC = () => {
    return (
        <div className="relative max-w-5xl mx-auto px-3 my-16">
            <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {data.categories.map((category, index) => (
                    <div key={index} className="bg-primary bg-opacity-5 border border-primary p-4 rounded-xl">
                        <h3 className="text-xl font-semibold text-primary mb-4">{category.name}</h3>
                        <ul className="list-disc list-inside text-slate-200">
                            {category.skills.map((skill, idx) => (
                                <li key={idx} className="mb-2">{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;