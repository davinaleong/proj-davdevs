import React from 'react';

import NavbarItem from './NavbarItem';

function Header(props) {
    const items = [];
    props.pages.forEach((page, index) => {
        if (page.navbar) {
            return items.push(
                <NavbarItem
                    key={'n'+index}
                    page={page}
                    gotoPage={props.gotoPage} />
            );
        }
    });

    return (
        <header>
            <nav>
                <ul>
                    {items}
                    <li title="?">
                        <button className="link link-orange" type="button" onClick={() => {props.showModal(true)}}>
                            <i className="fal fa-grin-beam"></i>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;