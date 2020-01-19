import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import states from './data/states';
import site from './data/site';
import pages from './data/pages.old';
import items from './data/items';
import projects from './data/projects';
import categories from './data/categories';
import jokes from './data/jokes';

const arrayTypes = {
    "1d": "1d",
    "2d": "2d"
};

ReactDOM.render(
    <App
        states={states}
        site={site}
        pages={pages}
        items={items}
        projects={projects}
        categories={categories}
        jokes={jokes}
        arrayTypes={arrayTypes} />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
