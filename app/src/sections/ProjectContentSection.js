import React from 'react';

function ProjectContentSection(props) {
    return (
        <section className="project-item mb-3">
            <h2 className="h3 text-blue-gray text-center mb-3">{props.project.name}</h2>

            <div className="mb-3"><img src={props.renderAsset('image', props.project.image)} alt={props.project.name} /></div>

            <p>{props.project.category}</p>
            <p><small>{props.project.date}</small></p>

            {/* TODO: Blockquote */}
            {/* TODO: Tech stack */}
            {/* TODO: Write up */}
        </section>
    );
}

export default ProjectContentSection;