import React from 'react';

function TextareaField(props) {
    return (
        <textarea name={props.name} rows={props.rows} required={props.required ? 'required' : ''}></textarea>
    );
}

export default TextareaField;