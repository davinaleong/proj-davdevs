import uuid from 'uuid/v4';

const projects = [
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Color Palettes",
        "category": "Static Website",
        "image": "color-palettes.png",
        "link": "https://davinaleong.github.io/proj-color-palette/",
        "featured": false,
        "overview": "A simple website to store Color Palettes I use frequently.",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "jQuery", "JSON"]
            }
        ],
        "writeUp": "This project is built in HTML and CSS. jQuery is used to render the palettes from a JSON file.\r\nThe palatte data and color values are stored in a JSON file for easy-editing.\r\nI decided upon jQuery as the main technology to render the color swatches as I wanted to keep the project simple clean.\r\nFeel free to use Color Palettes for your own reference. I designed the project such that it's easy to copy the swatch's hex value."
    }
];

export default projects;