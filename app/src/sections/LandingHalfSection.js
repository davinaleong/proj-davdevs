import React from 'react';

function LandingHalfSection(props) {
    return (
        <section className="landing-half">
            <div className="landing-upper">
                <div className="landing-content text-center">
                    <h1 className="mb-2"><i className={props.page.current.icon}></i> {props.page.current.name}</h1>
                </div>
            </div>
            <div className="landing-lower"></div>
        </section>
    );
}

export default LandingHalfSection;