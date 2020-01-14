import React from 'react';

function InputField(props) {
    return (
        <input name={props.name} placeholder={props.placeholder} required={props.required ? 'required' : ''} />
    );
}

export default InputField;