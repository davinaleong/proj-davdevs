import React from 'react';

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
                states={props.states}
                renderAsset={props.renderAsset}
                renderSkills={props.renderSkills}
                gotoPage={props.gotoPage} />
            <ShowcaseSection
                projects={props.projects}
                featured={true}
                limit={4}
                renderAsset={props.renderAsset}
                gotoProjectItem={props.gotoProjectItem} />
        </div>
    );
}

export default IndexPage;