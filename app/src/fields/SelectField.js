import React from 'react';

function SelectField(props) {
    const options = [];
    props.options.forEach((option, index) => {
        options.push(
            <option key={'o'+index} value={option.value}>{option.name}</option>
        );
    });

    return (
        <select name={props.name} placeholder={props.placeholder} required={props.required ? 'required' : ''}>
            <option value="">-- {props.group} --</option>
            {options}
        </select>
    );
}

export default SelectField;