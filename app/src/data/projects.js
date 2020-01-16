import uuid from 'uuid/v4';

const projects = [
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Color Palettes",
        "category": "Static Website",
        "image": "color-palettes.png",
        "link": "https://davinaleong.github.io/proj-color-palette/",
        "featured": true,
        "overview": "A simple website to store Color Palettes I use frequently.",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "jQuery", "JSON"]
            }
        ],
        "writeUp": "This project is built in `HTML` and `CSS`. `jQuery` is used to render the palettes from a `JSON` file.\n\n\nThe palatte data and color values are stored in a `JSON` file for easy-editing.\n\n\nI decided upon `jQuery` as the main technology to render the color swatches as I wanted to keep the project simple clean.\n\n\nFeel free to use Color Palettes for your own reference. I designed the project such that it's easy to copy the swatch's hex value."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Proverbs Everyday",
        "category": "React App",
        "image": "proverbs-everyday.png",
        "link": "https://proverbs-everyday.netlify.com/",
        "featured": true,
        "overview": "A React app that displays the Proverbs of the day.",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "SASS", "ReactJS", "JSON", "MomentJS"]
            }, {
                "name": "Deployment",
                "items": ["Netlify"]
            }, {
                "name": "Features",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        // TODO: Feature CSS Grid and Flexbox
        "writeUp": "This project is built using `ReactJS`.\n\nI started by developing the template for the app first. The template is built in `HTML`, with `SASS` as its `CSS` pre-processor. Once the template is done, I then re-build the app in `ReactJS`. I also decided to take advantage of this opportunity to try my hand at **CSS Grid**. CSS Grid is used to layout the app's components. I used **Flexbox** to layout the cards on the Chapters page. \n\nI use the templating phase to help me plan out the placement of elements as well as the app's styles.\n\nThis app is deployed on **Netlify**.\n\nFeel free to play around with the app! :-)\n\nYou can change the color theme, preferred translation and text size on the Settings page."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Bootstrap 4 Admin Dashboard Template",
        "category": "Bootstrap 4 Admin-Dashboard Template",
        "image": "b4-admin-template.png",
        "link": "https://davinaleong.github.io/proj-b4-admin-template/",
        "featured": true,
        "overview": "A simple Bootstrap 4 template ready to use out-of-the-box!",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "Bootstrap 4"]
            }
        ],
        "writeUp": "This project is built using **Bootstrap 4**.\n\nI built this template with the mindset that it should be usable right out of the box, with minimal setup required. I often find myself in need of a simple, pure Bootstrap 4 template. I find many of the admin dashboard templates I've come across online overly engineered and complicated to setup and use.\n\nFeel free to use this template for your own admin-dashboard projects.\n\nThis project also comes packaged with packages I use quite often in my web-development projects.\n\nIncluded packages: `ParsleyJS` for *form validation*, `DataTables` - *sort, search and paginate table data*, `MomentJS` - *format date-times*, `Tempus Dominus` - *datetime picker*, `PrismJS` - *syntax highlighting*."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Comphanny Template",
        "category": "Bootstrap 4 Website Template",
        "image": "comphanny-template.png",
        "link": "https://davinaleong.github.io/proj-comphanny-template/",
        "featured": true,
        "overview": "A simple Bootstrap 4 template ready to use out-of-the-box!",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "Bootstrap 4", "SASS"]
            }
        ],
        "writeUp": ""
    }
];

export default projects;