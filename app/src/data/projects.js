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
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
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
                "items": ["HTML", "CSS", "SASS", "ReactJS", "JSON", "MomentJS", "Font Awesome 5"]
            }, {
                "name": "Deployment",
                "items": ["Netlify"]
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        "writeUp": "This project is built using `ReactJS`.\n\nI started by developing the template for the app first. The template is built in `HTML`, with `SASS` as its `CSS` pre-processor. Once the template is done, I then re-build the app in `ReactJS`. I also decided to take advantage of this opportunity to try my hand at **CSS Grid**. CSS Grid is used to layout the app's components. I used **Flexbox** to layout the cards on the Chapters page. \n\nI use the templating phase to help me plan out the placement of elements as well as the app's styles.\n\nThis app is deployed on **Netlify**.\n\nFeel free to play around with the app! 😊\n\nYou can change the color theme, preferred translation and text size on the Settings page."
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
                "items": ["HTML", "Bootstrap 4", "Font Awesome 5"]
            }, {
                "name": "Features",
                "items": ["ParsleyJS", "DataTables", "MomentJS", "Tempus Dominus (datetime picker)", "PrismJS"]
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
                "items": ["HTML", "CSS", "Bootstrap 4", "SASS", "Font Awesome 5"]
            }
        ],
        "writeUp": "This template is the first part of a 2-part demo I was building. I was asked to give a talk on [CraftCMS](https://craftcms.com/) at a local `PHP` meetup. Hence, the aim of this demo was to showcase CraftCMS.\n\nThis project was built in Bootrap 4. The icons are from [Font Awesome 5](https://fontawesome.com/). To maintain code readability and reusability, I used `SASS` as the `CSS` pre-processor. Note that this project doesn't come bundled with its own *`SASS` compiler*, as I was lazy to code up one 😛... If you're using [VS Code](https://code.visualstudio.com/), you can simply use the free [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) VS Code extension.\n\n[Write up](https://dev.to/davinaleong/released-my-first-bootstrap-4-template-2b00) on [DEV Community](https://dev.to/).\n\nI came up with the idea of creating a fake company. This company specializes in developing custom web and mobile applications for clients. The audience of the talk was a local `PHP` community. Hence, I came up with the company's name \"Comphanny\" which is a play on the words \"company\", \"php\", and \"ph\" being pronunced as \"f\" in \"elephant\" which is the animal typically associated with `PHP`.\n\nI initally wanted to build this template from scratch, to practise my `CSS` & web design skills, as well as explore **Flexbox** and **CSS Grid**. But due to time constraint from my day job, and still having the CraftCMS part of the project to build, I felt it was too ambitious. So I decided to go building off Bootstrap since it was what I was familiar with."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Dav / Devs",
        "category": "React App",
        "image": "dav-devs.png",
        "link": "https://davina-devs.com/",
        "featured": true,
        "overview": "Personal website",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "SASS", "Font Awesome 5", "ReactJS", "JSON", "React Markdown"]
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox", "Markdown"]
            }, {
                "name": "Mockups",
                "items": ["Affinity Designer"]
            }
        ],
        "writeUp": "This project is [this website](https://davina-devs.com/) you're looking at right now.\n\n\"**Dav / Devs**\" stands for Davina develops, to emphasise what I enjoy doing: building (or developing) applications.\n\nI specialise in building websites and web applications. *Yellow* is the main color of the `JavaScript` logo, hence my pick for it as the site's main color. The *yellow* theme is to emphasise my transition from `PHP` to `JavaScript` as my primary language of choice for web development. I've decided I'll only use `PHP` when the project calls for the need to use a `PHP`-based application like [Laravel](https://laravel.com/docs/6.x) or [CraftCMS](https://craftcms.com/).\n\nThis project had 3 phases: mockup, templating and development.\n\nI first designed the mockups in [Affinity Designer](https://affinity.serif.com/en-gb/designer/). It's akin to Adobe's Illustrator, and a good alternative if you don't need a subscription-based graphics software. Affinity Photo is their answer to Adobe's Photoshop.\n\nThe template is then developed in `HTML` and `SASS`. `SASS` is used over raw `CSS` to maintain code readability and maintainability. For repeatable-content like the project cards, I first stored a list of dummy project data into a `JSON` file. The cards are then rendered with `jQuery`, with the data pulled from the `JSON` file. **CSS Grid** is used to lay out the *navbar* and *main* content. It is also used to lay out the project cards too both on the Home page and the Projects page.\n\nOnce the template is done, I developed the app in `ReactJS`. To maintain code simplicity, I decided to keep it a purely static app; i.e. there is no database attached to it. The project's images are stored in a public folder; accessible from the app's root folder. I then used a `JSON` file to store the app's data like the site's name and author. This is so I can modify the site's content from a single file. Check out this project's [GitHub repo](https://github.com/davinaleong/proj-davdevs) to see more.\n\nI want to bring attention to the write-up portion of a project's details page. I'm using a `Markdown` renderer (`[React Markdown](https://github.com/rexxars/react-markdown)`) to render the project's writeup.\n\nBy the way, need some something to cheer you up? Click the **question mark** icon to get some laughter in your life! 😁"
    },
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
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        "writeUp": "This project is built in `HTML` and `CSS`. `jQuery` is used to render the palettes from a `JSON` file.\n\n\nThe palatte data and color values are stored in a `JSON` file for easy-editing.\n\n\nI decided upon `jQuery` as the main technology to render the color swatches as I wanted to keep the project simple clean.\n\n\nFeel free to use Color Palettes for your own reference. I designed the project such that it's easy to copy the swatch's hex value."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Pokemon Teams Template",
        "category": "HTML Template",
        "image": "pokemon-teams-template.png",
        "link": "https://davinaleong.github.io/proj-pokemon-teams-template/",
        "featured": false,
        "overview": "The template portion of a Pokemon-Teams React-app",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "SASS", "JSON", "jQuery", "Font Awesome 5"]
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        "writeUp": "..."
    }
];

export default projects;