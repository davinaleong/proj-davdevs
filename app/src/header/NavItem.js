import React from 'react';

function NavItem(props) {
    if (props.item.name) {
        return (
            <li>{props.item.name}</li>
        );
    } else {
        return (
            <li title={props.item.title}>
                <button className="link link-orange" type="button">
                    <i className={props.item.icon}></i></button>
            </li>
        );
    }
}

export default NavItem;