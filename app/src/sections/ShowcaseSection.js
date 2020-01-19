import React from 'react';

import Card from '../loose/Card';

function ShowcaseSection(props) {
    let projects = props.projects;
    if (props.featured) {
        projects = props.projects.filter(projects => projects.featured === true);
    }

    projects.sort((a, b) => {
        const A = a.name.toLowerCase();
        const B = b.name.toLowerCase();

        let comparison = 0;
        if (A > B) {
            comparison = 1;
        } else if (A < B) {
            comparison = -1;
        } else {
            comparison = 0;
        }

        return comparison;
    });

    const cards = [];
    let limit = projects.length;
    if (props.limit && props.limit < projects.length) {
        limit = props.limit;
    }

    for(let i = 0; i < limit; ++i) {
        cards.push(
            <Card
                key={'c'+i}
                project={projects[i]}
                getCategory={props.getCategory}
                renderAsset={props.renderAsset}
                gotoProjectItem={props.gotoProjectItem} />
        );
    }

    return (
        <section className={props.featured ? 'showcase featured' : 'showcase'}>
            <h2 className="hidden">What I do Christ Jesus.</h2>
            <div className="cards">{cards}</div>
        </section>
    );
}

export default ShowcaseSection;