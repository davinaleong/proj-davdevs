import React from 'react';

function SkillsSection(props) {
    return (
        <section className="skills text-center mb-3">
            <h2 className="hidden">What Christ Jesus has equipped me with.</h2>

            <h3 className="text-blue-gray mb-1">Design</h3>
            <div className="design mb-3">
                {props.renderItems(props.site.skills.design.full, ' / ', '2d', 's')}
            </div>

            <h3 className="text-blue-gray mb-1">Develop</h3>
            <div className="design mb-3">
                {props.renderItems(props.site.skills.develop.full, ' / ', '2d', 'v')}
            </div>
        </section>
    );
}

export default SkillsSection;