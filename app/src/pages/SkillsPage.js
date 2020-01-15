import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import SkillsSection from './../sections/SkillsSection';

function SkillsPage(props) {
    const pageInfo = {
        current: props.getPageInfo(props.page.current),
        previous: props.getPageInfo(props.page.previous)
    };
    return (
        <div>
            <LandingHalfSection page={pageInfo.current} />
            <SkillsSection
                site={props.site}
                renderItems={props.renderItems} />
        </div>
    );
}

export default SkillsPage;