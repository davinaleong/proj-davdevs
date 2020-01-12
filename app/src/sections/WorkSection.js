import React from 'react';

function WorkSection(props) {
    return (
        <section className="work">
            <h2 className="hidden">What Christ Jesus has equipped me with.</h2>
            <div className="work-cell-design">
                <h3 className="h3 text-monospace text-blue-gray mt-5 mb-3">Design</h3>
                <div className="text-yellow mb-3"><i className="fal fa-drafting-compass fa-9x"></i></div>
                <p className="mb-3">UX / Frontend</p>
                <p>
                    <button className="link link-orange" type="button">View more</button>
                </p>
            </div>
            <div className="work-cell-develop">
                <h3 className="h3 text-monospace text-blue-gray mt-5 mb-3">Develop</h3>
                <div className="text-yellow mb-3"><i className="fal fa-laptop-code fa-9x"></i></div>
                <p className="mb-3">PHP / JavaScript / Backend</p>
                <p>
                    <button className="link link-orange" type="button">View more</button>
                </p>
            </div>
        </section>
    );
}

export default WorkSection;