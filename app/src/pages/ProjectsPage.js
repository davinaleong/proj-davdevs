import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import ShowcaseSection from './../sections/ShowcaseSection';

function ProjectsPage(props) {
    const pageInfo = {
        current: props.getPageInfo(props.page.current),
        previous: props.getPageInfo(props.page.previous)
    };
    return (
        <div>
            <LandingHalfSection page={pageInfo.current} />
            <ShowcaseSection
                projects={props.projects}
                getCategory={props.getCategory}
                renderAsset={props.renderAsset}
                gotoProjectItem={props.gotoProjectItem} />
        </div>
    );
}

export default ProjectsPage;