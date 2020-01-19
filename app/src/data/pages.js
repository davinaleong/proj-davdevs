import states from './states';

const pages = [
    {
        "state": states.INDEX,
        "name": "Davina devs",
        "icon": "D/D",
        "navbar": true
    }, {
        "state": states.INDEX,
        "name": "Home",
        "icon": "fal fa-home",
        "page": states.INDEX,
        "navbar": true
    }, {
        "state": states.PROJECTS,
        "name": "Projects",
        "icon": "fal fa-laptop-code",
        "page": states.PROJECTS,
        "navbar": true
    }, {
        "state": states.PROJECT_ITEM,
        "name": "Projects",
        "icon": "fal fa-laptop-code",
        "page": states.PROJECT_ITEM,
        "navbar": false
    }, {
        "state": states.SKILLS,
        "name": "Skills",
        "icon": "fal fa-code",
        "page": states.SKILLS,
        "navbar": true
    }, {
        "state": states.CONTACT,
        "name": "Contact",
        "icon": "fal fa-mobile",
        "page": states.CONTACT,
        "navbar": true
    }
];

export default pages;