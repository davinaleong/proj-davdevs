import React from 'react';

function Card(props) {
    const category = props.getCategory(props.project.category.type);

    return (
        <div className="card">
            <div className="icon" title={category.name}><i className={category.icon + ' fa-2x'} style={{color: category.color}}></i></div>
            <img src={props.renderAsset('image', props.project.image)} alt={props.project.name} />
            <div className="content">
                <h3 className="h5 text-left mb-1">
                    <button className="link link-orange" type="button" onClick={() => {props.gotoProjectItem(props.project.uuid)}}>
                        {props.project.name}
                    </button>
                </h3>
                <p>{props.project.category.name}</p>
            </div>
        </div>
    );
}

export default Card;