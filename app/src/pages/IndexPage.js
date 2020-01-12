import React from 'react';
import { render } from 'react-dom';

import LandingSection from './../sections/LandingSection';

function IndexPage(props) {
    return (
        <div>
            <LandingSection
                site={props.site}
                renderAsset={props.renderAsset} />
        </div>
    );
}

export default IndexPage;