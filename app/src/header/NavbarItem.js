import React from 'react';

function NavItem(props) {
    // if (props.item.name) {
    //     return (
    //         <li>{props.item.name}</li>
    //     );
    // } else {
    //     return (
    //         <li title={props.item.title}>
    //             <button className="link link-orange" type="button" onClick={() => {props.gotoPage(props.item.page)}}>
    //                 <i className={props.item.icon}></i>
    //             </button>
    //         </li>
    //     );
    // }

    if (props.page.name === "Davina devs") {
        return (
            <li title={props.page.name}>{props.page.icon}</li>
        );
    } else {
        return (
            <li title={props.page.title}>
                <button className="link link-orange" type="button" onClick={() => {props.gotoPage(props.page.page)}}>
                    <i className={props.page.icon}></i>
                </button>
            </li>
        );
    }
}

export default NavItem;