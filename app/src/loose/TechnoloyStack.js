import React from 'react';

function TechStack(props) {
    const stacks = [];
    props.technologies.forEach((category, index) => {
        stacks.push(
            <div key={'t'+index} className="mb-2">
                <h4 className="h6">{category.name}</h4>
                <p className="text-monospace">{props.renderItems(category.items, ', ', '1d')}</p>
            </div>
        );
    });

    return (
        <div className="tech-stack mb-3">
            <h3 className="h5 mb-2">Tech Stack</h3>

            {stacks}
        </div>
    );
}

export default TechStack;