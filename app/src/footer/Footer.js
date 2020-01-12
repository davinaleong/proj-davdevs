import React from 'react';

function Footer(props) {
    const items = [];
    props.site.social.forEach((item, index) => {
        if (item.name === 'devRant') {
            items.push(
                <li key={'l'+index} className={'footer-cell-'+item.cell}>
                    <a href={item.link}>
                        <span className="mr-2">{item.icon}</span> {item.name}
                    </a>
                </li>
            );
        } else {
            items.push(
                <li key={'l'+index} className={'footer-cell-'+item.cell}>
                    <a href={item.link}>
                        <i className={item.icon}></i> {item.name}
                    </a>
                </li>
            );
        }
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