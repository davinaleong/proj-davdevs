import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import SkillsSection from './../sections/SkillsSection';

function SkillsPage(props) {
    return (
        <div>
            <LandingHalfSection page={props.page} />
            <SkillsSection
                site={props.site}
                renderSkills={props.renderSkills} />
        </div>
    );
}

export default SkillsPage;