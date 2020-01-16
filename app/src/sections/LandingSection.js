import React from 'react';

function LandingSection(props) {
    return (
        <section className="landing">
            <div className="landing-upper">
                <div className="landing-content text-center">
                    <img className="logo mb-3" src={props.renderAsset('icon', 'logo-black.svg')} />
                    <h1 className="mb-2">{props.site.title}</h1>
                    <p className="text-black mb-2">{props.site.occupation}</p>
                    <p className="text-black text-italic"><small>{props.site.tagline}</small></p>
                </div>
            </div>
            <div className="landing-middle">
                <div className="landing-cell-left">
                    <img src={props.renderAsset('site', 'index-01.svg')}           width="160px"/>
                </div>
                <div className="landing-cell-right">
                    <img src={props.renderAsset('site', 'index-02.svg')}
                        width="160px"/>
                </div>
            </div>
            <div className="landing-lower"></div>
        </section>
    );
}

export default LandingSection;