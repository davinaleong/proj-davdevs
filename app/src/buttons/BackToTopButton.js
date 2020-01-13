import React from 'react';

function BackToTopButton(props) {
    return (
        <button className="top bg-orange" type="button" onClick={() => {window.location.href = './#top'}}>
            <i className="fal fa-chevron-up fa-lg"></i>
        </button>
    );
}

export default BackToTopButton;