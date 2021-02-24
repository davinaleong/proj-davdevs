import React from 'react';

function DownloadsSection() {
    return (
        <section className="downloads text-center mb-3">
            <h3 className="text-blue-gray mb-1">Downloads</h3>
            <h5 className="text-body mb-3">Resumes</h5>
            <p>
                <a className="text-orange button mr-3" href="https://drive.google.com/file/d/16q0AGFf93asA94sCZe1Smvl9_-oM5y-C/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-pdf"></i> PDF
                </a>
                <a className="text-orange button" href="https://drive.google.com/file/d/1h-Z1bGJnqTW-oiE6DqVF05pkox6iT-CY/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-word"></i> Word
                </a>
            </p>
        </section>
    );
}

export default DownloadsSection;