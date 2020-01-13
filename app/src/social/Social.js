import React from 'react';

import SocialItem from './SocialItem';

function Social(props) {
    const items = [];
    props.social.forEach((item, index) => {
        items.push(
            <SocialItem key={'s'+index} item={item} />
        );
    });

    return (
        <nav className="social">
            <ul>{items}</ul>
        </nav>
    );
}

export default Social;