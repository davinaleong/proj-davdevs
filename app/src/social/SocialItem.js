import React from 'react';

function SocialItem(props) {
    let link = (
        <a href={props.item.link} target="_blank" rel="noopener noreferrer">
            <i className={props.item.icon}></i>
        </a>
    );

    if (props.item.name === 'devRant') {
        link = (
            <a href={props.item.link} target="_blank" rel="noopener noreferrer">
                {props.item.icon}
            </a>
        );
    }

    return (
        <li>{link}</li>
    );
}

export default SocialItem;