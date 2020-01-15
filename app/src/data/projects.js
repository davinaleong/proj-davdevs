import uuid from 'uuid/v4';

const projects = [
    {
        "uuid": uuid(),
        "date": "2020-03-01",
        "name": "Project Title 1",
        "category": "Project Category",
        "image": "placeholder-01.jpg",
        "link": "http://www.bing.com",
        "featured": false,
        "overview": "Lorem ipsum",
        "techStack": [
            {
                "name": "Frontend",
                "items": ["HTML", "CSS"]
            }
        ],
        "writeUp": "Hello\r\n\r\nWorld"
    }
];

export default projects;