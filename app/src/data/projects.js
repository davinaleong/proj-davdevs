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
            }
        ],
        "writeUp": "This project is built using `ReactJS`.\n\nI started by developing the template for the app first. The template is built in `HTML`, with `SASS` as its `CSS` pre-processor. Once the template is done, I then re-build the app in `ReactJS`.\n\nI use the templating phase to help me plan out the placement of elements as well as the app's styles.\n\nThis app is deployed on **Netlify**.\n\nFeel free to play around with the app! :-)\n\nYou can change the color theme, preferred translation and text size on the Settings page."
    }
];

export default projects;