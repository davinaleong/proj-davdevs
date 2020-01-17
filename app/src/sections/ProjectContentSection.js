import React from 'react';
import Markdown from 'react-markdown';

import CategoryBadge from './../loose/CategoryBadge';
import Blockquote from './../loose/Blockquote';
import TechnologyStack from './../loose/TechnoloyStack';
import ToProjectDemoButton from './../buttons/ToProjectDemoButton';

function ProjectContentSection(props) {
    return (
        <section className="project-item mb-3">
            <h2 className="h3 text-blue-gray text-center mb-3">{props.project.name}</h2>

            <CategoryBadge project={props.project} getCategory={props.getCategory} />

            <p className="text-center">{props.project.category.name}</p>
            <p className="text-center mb-3"><small>{props.renderDate(props.project.date)}</small></p>

            {props.project.link ? <ToProjectDemoButton project={props.project} /> : null}

            <Blockquote text={props.project.overview} breakLines={props.breakLines} />

            <TechnologyStack technologies={props.project.technologies} renderItems={props.renderItems} />

            <div className="mb-3"><img src={props.renderAsset('image', props.project.image)} alt={props.project.name} /></div>

            {props.project.link ? <ToProjectDemoButton project={props.project} /> : null}
            
            <Markdown source={props.project.about} />
        </section>
    );
}

export default ProjectContentSection;