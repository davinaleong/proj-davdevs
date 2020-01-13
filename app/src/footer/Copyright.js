import React from 'react';

function Copyright(props) {
    const now = new Date();
    return (
        <p>{props.site.personal.copyright} {now.getFullYear()}</p>
    );
}

export default Copyright;