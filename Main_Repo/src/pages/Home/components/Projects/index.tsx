import React from "react";
import data from "./data.json";
import Card, { ProjectCardType } from "./components/Card";

const Projects: React.FC = () => {
    return (
        <div className="relative">
            {data?.projects?.map((project: ProjectCardType, index: number) => {
                return (
                    <Card
                        key={index}
                        project={project}
                        rtl={!(index % 2)}
                    />
                );
            })}
        </div>
    );
};

export default Projects;