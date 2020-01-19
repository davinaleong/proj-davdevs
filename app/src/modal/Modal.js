import React from 'react';

function Modal(props) {
    const show = props.modal ? 'modal' : 'modal hidden';
    const joke = props.jokes[Math.floor(Math.random() * props.jokes.length)];

    return (
        <div className={show}>
            <div className="text-right">
                <button type="button" onClick={() => props.showModal(false)}>
                    <i className="fal fa-times fa-2x"></i>
                </button>
            </div>
            <div className="content">
                <h1 className="h4">A lame joke&hellip; <i className="fal fa-grin-beam"></i></h1>
                <div>{props.breakLines(joke, 'j')}</div>
                <p className="mt-5">
                    <small>A list of original lame jokes.<br/>Keep launching this modal to see more lame jokes. <i className="fas fa-rocket"></i></small>
                </p>
            </div>
        </div>
    );
}

export default Modal;