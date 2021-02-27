import uuid from 'uuid/v4';

const projects = [
    {
        "uuid": uuid(),
        "date": "2021-02-27",
        "name": "Bible API",
        "category": {
            "name": "Laravel",
            "type": "Laravel"
        },
        "image": "bible-api.png",
        "link": "http://45.33.120.254/",
        "featured": true,
        "overview": "An API for developers",
        "technologies": [
            {
                "name": "Frontend / Backend",
                "items": ["Laravel"]
            },
            {
                "name": "Deployment",
                "items": ["Linode", "Laravel Forge"]
            }
        ],
        "about": "I wanted to build an API project to sharpen my skills. I also wanted to learn how to deploy an API. This project has 2 parts: the CMS and API. The CMS for users to update the database, and the API to request the data stored in the database. I decided to use the Bible as a theme for this project as I have an understanding of the Bible structure.\n\nThis is an ongoing project. I have yet to setup the domain and HTTPS. This project is built in Laravel and is deployed on [Linode](https://www.linode.com/) using [Laravel Forge](https://forge.laravel.com/)."
    },
    {
        "uuid": uuid(),
        "date": "2021-02-27",
        "name": "Customer Dashboard Template",
        "category": {
            "name": "Laravel",
            "type": "Laravel"
        },
        "image": "customer-dashboard.png",
        "link": "https://customer-dashboard-template.s3-ap-southeast-1.amazonaws.com/dashboard.html",
        "featured": true,
        "overview": "A dashboard template for company's clients.",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["Bootstrap", "Admin LTE"]
            },
            {
                "name": "Deployment",
                "items": ["AWS S3"]
            }
        ],
        "about": "I was tasked to develop a dashboard for clients at [LIV3LY](https://liv3ly.com/).\n\nI decided to do an HTML template first before building the actual dashboard so that stakeholders can have an idea on how the dashboard will look like. This template is built on the [Admin LTE template](https://adminlte.io/themes/AdminLTE/index2.html).\n\nThe actual dashboard will be developed in [Laravel 8](https://laravel.com/).\n\nThis template is deployed on the company's AWS S3 server."
    },
    {
        "uuid": uuid(),
        "date": "2020-08-02",
        "name": "Todo",
        "category": {
            "name": "Laravel",
            "type": "Laravel"
        },
        "image": "todo-laravel.png",
        "link": "https://davinaleong.github.io/proj-color-palette/",
        "featured": false,
        "overview": "A simple Laravel Todo app.",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["Bootstrap", "SB Admin 2"]
            }, {
                "name": "Backend",
                "items": ["Laravel", "MySQL"]
            }, {
                "name": "Deployment",
                "items": ["Heroku"]
            }, {
                "name": "Highlights",
                "items": ["Heroku", "Laravel"]
            }
        ],
        "about": "This is a simple [Laravel](https://laravel.com/) todo app. It's deployed on [Heroku](https://www.heroku.com/). The main reason for me building this app is to try my hand at deployment. I wanted to learn how to deploy a LAMP stack application for as low-cost as possible. Heroku was my solution as it's free."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Color Palettes",
        "category": {
            "name": "Static Website",
            "type": "HTML"
        },
        "image": "color-palettes.png",
        "link": "https://davinaleong.github.io/proj-color-palette/",
        "featured": false,
        "overview": "A simple website to store Color Palettes I use frequently.",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "jQuery", "JSON"]
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        "about": "This project is built in `HTML` and `CSS`. `jQuery` is used to render the palettes from a `JSON` file.\n\n\nThe palatte data and color values are stored in a `JSON` file for easy-editing.\n\n\nI decided upon `jQuery` as the main technology to render the color swatches as I wanted to keep the project simple clean.\n\n\nFeel free to use Color Palettes for your own reference. I designed the project such that it's easy to copy the swatch's hex value."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Proverbs Everyday",
        "category": {
            "name": "React App",
            "type": "React"
        },
        "image": "proverbs-everyday.png",
        "link": "https://proverbs-everyday.netlify.com/",
        "featured": true,
        "overview": "A React app that displays the Proverbs of the day.",
        "technologies": [
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
        "about": "This project is built using `ReactJS`.\n\nI started by developing the template for the app first. The template is built in `HTML`, with `SASS` as its `CSS` pre-processor. Once the template is done, I then re-build the app in `ReactJS`. I also decided to take advantage of this opportunity to try my hand at **CSS Grid**. CSS Grid is used to layout the app's components. I used **Flexbox** to layout the cards on the Chapters page. \n\nI use the templating phase to help me plan out the placement of elements as well as the app's styles.\n\nThis app is deployed on **Netlify**.\n\nFeel free to play around with the app! 😊\n\nYou can change the color theme, preferred translation and text size on the Settings page."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-15",
        "name": "Bootstrap 4 Admin Dashboard Template",
        "category": {
            "name": "Bootstrap 4 Admin-Dashboard Template",
            "type": "Bootstrap"
        },
        "image": "b4-admin-template.png",
        "link": "https://davinaleong.github.io/proj-b4-admin-template/",
        "featured": false,
        "overview": "A simple Bootstrap 4 template ready to use out-of-the-box!",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["HTML", "Bootstrap 4", "Font Awesome 5"]
            }, {
                "name": "Features",
                "items": ["ParsleyJS", "DataTables", "MomentJS", "Tempus Dominus (datetime picker)", "PrismJS"]
            }
        ],
        "about": "This project is built using **Bootstrap 4**.\n\nI built this template with the mindset that it should be usable right out of the box, with minimal setup required. I often find myself in need of a simple, pure Bootstrap 4 template. I find many of the admin dashboard templates I've come across online overly engineered and complicated to setup and use.\n\nFeel free to use this template for your own admin-dashboard projects.\n\nThis project also comes packaged with packages I use quite often in my web-development projects.\n\nIncluded packages: `ParsleyJS` for *form validation*, `DataTables` - *sort, search and paginate table data*, `MomentJS` - *format date-times*, `Tempus Dominus` - *datetime picker*, `PrismJS` - *syntax highlighting*."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Comphanny Template",
        "category": {
            "name": "Bootstrap 4 Website Template",
            "type": "Bootstrap"
        },
        "image": "comphanny-template.png",
        "link": "https://davinaleong.github.io/proj-comphanny-template/",
        "featured": false,
        "overview": "A simple Bootstrap 4 template ready to use out-of-the-box!",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "Bootstrap 4", "SASS", "Font Awesome 5"]
            }
        ],
        "about": "This template is the first part of a 2-part demo I was building. I was asked to give a talk on [CraftCMS](https://craftcms.com/) at a local `PHP` meetup. Hence, the aim of this demo was to showcase CraftCMS.\n\nThis project was built in Bootrap 4. The icons are from [Font Awesome 5](https://fontawesome.com/). To maintain code readability and reusability, I used `SASS` as the `CSS` pre-processor. Note that this project doesn't come bundled with its own *`SASS` compiler*, as I was lazy to code up one 😛... If you're using [VS Code](https://code.visualstudio.com/), you can simply use the free [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) VS Code extension.\n\n[Write up](https://dev.to/davinaleong/released-my-first-bootstrap-4-template-2b00) on [DEV Community](https://dev.to/).\n\nI came up with the idea of creating a fake company. This company specializes in developing custom web and mobile applications for clients. The audience of the talk was a local `PHP` community. Hence, I came up with the company's name \"Comphanny\" which is a play on the words \"company\", \"php\", and \"ph\" being pronunced as \"f\" in \"elephant\" which is the animal typically associated with `PHP`.\n\nI initally wanted to build this template from scratch, to practise my `CSS` & web design skills, as well as explore **Flexbox** and **CSS Grid**. But due to time constraint from my day job, and still having the CraftCMS part of the project to build, I felt it was too ambitious. So I decided to go building off Bootstrap since it was what I was familiar with."
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Dav / Devs",
        "category": {
            "name": "React App",
            "type": "React"
        },
        "image": "dav-devs.png",
        "link": "https://davina-devs.com/",
        "featured": true,
        "overview": "Personal website",
        "technologies": [
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
        "about": "This project is [this website](https://davina-devs.com/) you're looking at right now.\n\n\"**Dav / Devs**\" stands for Davina develops, to emphasise what I enjoy doing: building (or developing) applications.\n\nI specialise in building websites and web applications. *Yellow* is the main color of the `JavaScript` logo, hence my pick for it as the site's main color. The *yellow* theme is to emphasise my transition from `PHP` to `JavaScript` as my primary language of choice for web development. I've decided I'll only use `PHP` when the project calls for the need to use a `PHP`-based application like [Laravel](https://laravel.com/docs/6.x) or [CraftCMS](https://craftcms.com/).\n\nThis project had 3 phases: mockup, templating and development.\n\nI first designed the mockups in [Affinity Designer](https://affinity.serif.com/en-gb/designer/). It's akin to Adobe's Illustrator, and a good alternative if you don't need a subscription-based graphics software. Affinity Photo is their answer to Adobe's Photoshop.\n\nThe template is then developed in `HTML` and `SASS`. `SASS` is used over raw `CSS` to maintain code readability and maintainability. For repeatable-content like the project cards, I first stored a list of dummy project data into a `JSON` file. The cards are then rendered with `jQuery`, with the data pulled from the `JSON` file. **CSS Grid** is used to lay out the *navbar* and *main* content. It is also used to lay out the project cards too both on the Home page and the Projects page.\n\nOnce the template is done, I developed the app in `ReactJS`. To maintain code simplicity, I decided to keep it a purely static app; i.e. there is no database attached to it. The project's images are stored in a public folder; accessible from the app's root folder. I then used a `JSON` file to store the app's data like the site's name and author. This is so I can modify the site's content from a single file. Check out this project's [GitHub repo](https://github.com/davinaleong/proj-davdevs) to see more.\n\nI want to bring attention to the write-up portion of a project's details page. I'm using a `Markdown` renderer ([React Markdown](https://github.com/rexxars/react-markdown)) to render the project's about section.\n\nBy the way, need some something to cheer you up? Click the **question mark** icon to get some laughter in your life! 😁"
    },
    {
        "uuid": uuid(),
        "date": "2020-01-16",
        "name": "Pokemon Teams Template",
        "category": {
            "name": "HTML Template",
            "type": "HTML"
        },
        "image": "pokemon-teams-template.png",
        "link": "https://davinaleong.github.io/proj-pokemon-teams-template/",
        "featured": false,
        "overview": "The template portion of a Pokemon-Teams React-app",
        "technologies": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS", "SASS", "JSON", "jQuery", "Font Awesome 5"]
            }, {
                "name": "Highlights",
                "items": ["CSS Grid", "Flexbox"]
            }
        ],
        "about": "This project is the first part of a 2-part project I'm in the midst of building. The second part is to build this project in `ReactJS`.\n\nI first sketched up the mockups of the app pages in [Affinity Designer](https://affinity.serif.com/en-gb/designer/).\n\nI then built the template in `HTML` and `SASS`, using the [Live Sass Compiler](https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass) [VS Code](https://code.visualstudio.com/) extension to compile the `SASS` scripts.\n\nThis template features **CSS Grid** and **Flexbox**. **CSS Grid** is used to lay out the main components like the sidebar and main sections, and **Flexbox** is used to lay out the Team-cards.\n\n`jQuery` is used to render the Team-cards and the Team-list on the sidebar. Dummy team data is stored in a `JSON` file and is pulled in and displayed by the Team-cards."
    }
];

export default projects;