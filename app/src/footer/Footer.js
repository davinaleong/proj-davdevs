import React from 'react';

import FooterItem from './FooterItem';
import Copyright from './Copyright';

function Footer(props) {
    const items = [];
    props.site.social.forEach((item, index) => {
        items.push(
            <FooterItem key={'f'+index} item={item} />
        );
    });

    return (
        <footer>
            <ul>
                <li className="footer-cell-email">
                    <button className="link link-orange" type="button" onClick={() => {props.gotoPage(props.states.CONTACT)}}>
                        <i className="fas fa-envelope mr-2"></i> {props.site.personal.email}
                    </button>
                </li>
                {items}
            </ul>
            <Copyright copyright={props.site.personal.copyright} />
        </footer>
    );
}

export default Footer;