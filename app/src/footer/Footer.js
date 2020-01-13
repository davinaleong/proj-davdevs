import React from 'react';

import FooterItem from './FooterItem';

function Footer(props) {
    const items = [];
    props.site.social.forEach((item, index) => {
        items.push(
            <FooterItem key={'f'+index} item={item} />
        );
    })

    return (
        <footer>
            <ul>
                <li className="footer-cell-email">
                    <a href={'mailto:' + props.site.personal.email}>
                        <i className="fas fa-envelope mr-2"></i> {props.site.personal.email}
                    </a>
                </li>
                {items}
            </ul>
        </footer>
    );
}

export default Footer;