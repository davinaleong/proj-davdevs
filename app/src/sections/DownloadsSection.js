import React from 'react';

function DownloadsSection() {
    return (
        <section className="downloads text-center mb-3">
            <h3 className="text-blue-gray mb-1">Downloads</h3>
            <h5 className="text-body mb-3">Resumes</h5>
            <p>
                <a className="text-orange button mr-3" href="https://drive.google.com/open?id=1IUNp34SX-8jzLyvuIPLWKlBeSCe91wD4"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-pdf"></i> PDF
                </a>
                <a className="text-orange button" href="https://drive.google.com/open?id=1l627SIYdPE7j4xk2ycer0VKvQ0iqDgua"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-word"></i> Word
                </a>
            </p>
        </section>
    );
}

export default DownloadsSection;