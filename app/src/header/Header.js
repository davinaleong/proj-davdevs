import React from 'react';

import NavItem from './NavItem';

function Header(props) {
    const items = [];
    props.items.forEach((item, index) => {
        return items.push(<NavItem key={'n'+index} item={item} />);
    });

    return (
        <header>
            <nav>
                <ul>{items}</ul>
            </nav>
        </header>
    );
}

export default Header;