import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.renderAsset('image', '')} />
            <div className="content">
                <h3 className="h5 mb-1">
                    <button className="link link-orange" type="button">
                        Project Name
                    </button>
                </h3>
                <p>Project Category</p>
            </div>
        </div>
    );
}

export default Card;