import React from 'react';

import Blockquote from './../loose/Blockquote';
import TechStack from './../loose/TechStack';

function ProjectContentSection(props) {
    return (
        <section className="project-item mb-3">
            <h2 className="h3 text-blue-gray text-center mb-3">{props.project.name}</h2>

            <Blockquote text={props.project.overview} breakLines={props.breakLines} />

            <TechStack techStack={props.project.techStack} renderItems={props.renderItems} />

            <div className="mb-3"><img src={props.renderAsset('image', props.project.image)} alt={props.project.name} /></div>

            <p>{props.project.category}</p>
            <p className="mb-3"><small>{props.project.date}</small></p>
            
            <div className="text-left">{props.breakLines(props.project.writeUp)}</div>
        </section>
    );
}

export default ProjectContentSection;