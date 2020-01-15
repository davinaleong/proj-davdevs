import React from 'react';

function Blockquote(props) {
    return (
        <blockquote>
            <div className="text-yellow text-left">
                <i className="fal fa-quote-left fa-2x"></i>
            </div>
            <div className="quote">{props.breakLines(props.text)}</div>
            <div className="text-yellow text-right">
                <i className="fal fa-quote-right fa-2x"></i>
            </div>
        </blockquote>
    );
}

export default Blockquote;