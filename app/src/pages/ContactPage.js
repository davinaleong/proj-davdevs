import React from 'react';

import LandingHalfSection from './../sections/LandingHalfSection';
import ContactFormSection from './../sections/ContactFormSection';

function ContactPage(props) {
    const pageInfo = {
        current: props.getPageInfo(props.page.current),
        previous: props.getPageInfo(props.page.previous)
    };
    return (
        <div>
            <LandingHalfSection page={pageInfo.current} />
            <ContactFormSection />
        </div>
    );
}

export default ContactPage;