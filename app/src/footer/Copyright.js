import React from 'react';

function Copyright(props) {
    return (
        <p>{props.copyright.name} &copy; {props.copyright.author}, {props.copyright.year}</p>
    );
}

export default Copyright;