import React from 'react';

import Card from './../card/Card';

function ShowcaseSection(props) {
    let projects = props.projects;
    if (props.featured) {
        projects = props.projects.filter(projects => projects.featured);
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
    const limit = props.limit ? props.limit : projects.length;

    for(let i = 0; i < limit; ++i) {
        cards.push(
            <Card
                key={'p'+i}
                project={projects[i]}
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