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
                <h1 className="h4">A lame joke... <i className="fal fa-grin-beam"></i></h1>
                <div>{props.breakLines(joke)}</div>
                <p className="mt-5">
                    <small>A list of original lame jokes.<br/>Keep launching the modal to see more lame jokes.</small>
                </p>
            </div>
        </div>
    );
}

export default Modal;