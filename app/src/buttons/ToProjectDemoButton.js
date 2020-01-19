import React from 'react';

function ToProjectDemoButton(props) {
    return (
        <div className="text-center mb-3">
            <a href={props.project.link} target="_blank" rel="noopener noreferrer">View Demo <i className="fal fa-external-link-alt"></i></a>
        </div>
    );
}

export default ToProjectDemoButton;