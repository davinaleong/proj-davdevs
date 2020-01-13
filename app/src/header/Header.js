import React from 'react';

import NavItem from './NavItem';

function Header(props) {
    const items = [];
    props.items.forEach((item, index) => {
        return items.push(
            <NavItem
                key={'n'+index}
                item={item}
                pages={props.pages}
                gotoPage={props.gotoPage} />
        );
    });

    return (
        <header>
            <nav>
                <ul>
                    {items}
                    <li title="?">
                        <button className="link link-orange" type="button" onClick={() => {props.showModal(true)}}>
                            <i className="fal fa-question"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;