import React from 'react';

function BackButton(props) {
    return (
        <div className="text-center">
            <button className="text-orange" type="button" onClick={() => {props.gotoPage(props.page.previous)}}>
                <i className="fal fa-chevron-left"> Back</i>
            </button>
        </div>
    );
}

export default BackButton;