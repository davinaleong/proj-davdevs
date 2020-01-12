import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.renderAsset('image', props.project.image)} />
            <div className="content">
                <h3 className="h5 mb-1">
                    <button className="link link-orange" type="button">
                        {props.project.name}
                    </button>
                </h3>
                <p>{props.project.category}</p>
            </div>
        </div>
    );
}

export default Card;