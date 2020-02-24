import React from 'react';

function AboutSection() {
    return (
        <section className="about text-center mb-3">
            <h2 className="hidden">My life with Christ Jesus.</h2>

            <h3 className="text-blue-gray mb-1">About</h3>

            <p>I am a 5-year full-stack web developer. I specialise in <code>PHP</code> and <code>Javascript</code>.</p>
            <p>During the course of my work I've built many content-mangament dashboards in <strong>CodeIgniter</strong> and <strong>Laravel</strong>.<br/>I am the developer behind the <code>API</code> of the <strong>Klick</strong> social app (<a href="https://play.google.com/store/apps/details?id=com.klickdating.klick" target="_blank">Android</a>, <a href="https://apps.apple.com/sg/app/klick/id1438499613" target="_blank">iOS</a>).<br/>The <code>API</code> is built in <strong>NodeJS</strong> and <strong>GraphQL</strong>, using <strong>Serverless</strong> architecture.</p>
            <p>I had to <strong>learn many technologies</strong> on my own including <strong>CodeIgniter</strong>, <strong>Ionic 2</strong>, <strong>Angular 2</strong>, <strong>Laravel</strong>, <strong>CraftCMS</strong> and<br/><strong>Docker</strong> during the course of my work at The Pixel Age and at The Shipyard Private Limited.</p>
        </section>
    );
}

export default AboutSection;