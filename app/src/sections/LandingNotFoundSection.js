import React from 'react';

function LandingNotFoundSection(props) {
    return (
        <section className="landing-half">
            <div className="landing-upper">
                <div className="landing-content text-center">
                    <h1 className="mb-2"><i className="fal fa-times-square"></i> Page not found <i className="fal fa-frown"></i></h1>
                </div>
            </div>
            <div className="landing-lower"></div>
        </section>
    );
}

export default LandingNotFoundSection;