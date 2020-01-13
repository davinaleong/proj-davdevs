import React from 'react';

function FooterItem(props) {
    let link = (
        <a href={props.item.link} target="_blank">
            <i className={props.item.icon+' mr-2'}></i> {props.item.name}
        </a>
    );
    
    if (props.item.name === 'devRant') {
        link = (
            <a href={props.item.link} target="_blank">
                <span className="mr-2">{props.item.icon}</span> {props.item.name}
            </a>
        );
    }

    return (
        <li>{link}</li>
    );
}

export default FooterItem;