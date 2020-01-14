import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import SkillsSection from './../sections/SkillsSection';
import BackButton from './../buttons/BackButton';

function SkillsPage(props) {
    return (
        <div>
            <LandingHalfSection page={props.page} />
            <SkillsSection
                site={props.site}
                renderSkills={props.renderSkills} />
            <BackButton page={props.page} gotoPage={props.gotoPage}/>
        </div>
    );
}

export default SkillsPage;