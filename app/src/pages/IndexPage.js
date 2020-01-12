import React from 'react';
import { render } from 'react-dom';

import LandingSection from './../sections/LandingSection';
import WorkSection from './../sections/WorkSection';
import ShowcaseSection from './../sections/ShowcaseSection';

function IndexPage(props) {
    return (
        <div>
            <LandingSection
                site={props.site}
                renderAsset={props.renderAsset} />
            <WorkSection
                site={props.site}
                renderAsset={props.renderAsset} />
            <ShowcaseSection />
        </div>
    );
}

export default IndexPage;