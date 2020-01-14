import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import SkillsSection from './../sections/SkillsSection';
import BackButton from './../buttons/BackButton';

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
                renderSkills={props.renderSkills} />
            <BackButton page={props.page} gotoPage={props.gotoPage}/>
        </div>
    );
}

export default SkillsPage;