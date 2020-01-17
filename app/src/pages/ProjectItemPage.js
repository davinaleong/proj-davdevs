import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import ProjectContentSection from './../sections/ProjectContentSection';

function ProjectItemPage(props) {
    const pageInfo = {
        current: props.getPageInfo(props.page.current),
        previous: props.getPageInfo(props.page.previous)
    };

    return (
        <div>
            <LandingHalfSection page={pageInfo.current} />
            <ProjectContentSection
                project={props.project}
                breakLines={props.breakLines}
                getCategory={props.getCategory}
                renderDate={props.renderDate}
                renderAsset={props.renderAsset}
                renderItems={props.renderItems} />
        </div>
    );
}

export default ProjectItemPage;