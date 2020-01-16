import React from 'react';

function Card(props) {
    return (
        <div className="card">
            <img src={props.renderAsset('image', props.project.image)} alt={props.project.name} />
            <div className="content">
                <h3 className="h5 text-left mb-1">
                    <button className="link link-orange" type="button" onClick={() => {props.gotoProjectItem(props.project.uuid)}}>
                        {props.project.name}
                    </button>
                </h3>
                <p>{props.project.category}</p>
            </div>
        </div>
    );
}

export default Card;