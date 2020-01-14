import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';

function ProjectsPage(props) {
    const pageInfo = {
        current: props.getPageInfo(props.page.current),
        previous: props.getPageInfo(props.page.previous)
    };
    return (
        <div>
            <LandingHalfSection page={pageInfo.current} />
        </div>
    );
}

export default ProjectsPage;