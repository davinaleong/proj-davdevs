import React from 'react';
import moment from 'moment';

function Copyright(props) {
    return (
        <p>{props.copyright.name} &copy; {props.copyright.author}, {props.copyright.year}-{moment().format('YYYY')}</p>
    );
}

export default Copyright;