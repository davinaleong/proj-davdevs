import React from 'react';

function DownloadsSection() {
    return (
        <section className="downloads text-center mb-3">
            <h3 className="text-blue-gray mb-1">Downloads</h3>
            <h5 className="text-body mb-3">Resumes</h5>
            <p>
                <a className="text-orange button mr-3" href="https://drive.google.com/file/d/1vTfiAjJ8TBN8twhr3tfKvPm9_QxuurZs/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-pdf"></i> PDF
                </a>
                <a className="text-orange button" href="https://drive.google.com/file/d/1Wnw6dBXV1bl1BN4zLoTosX9XDOQjVCef/view?usp=sharing"
                    target="_blank" rel="noopener noreferrer">
                    <i className="fal fa-file-word"></i> Word
                </a>
            </p>
        </section>
    );
}

export default DownloadsSection;