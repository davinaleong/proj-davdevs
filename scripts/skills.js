const skills = {
    'design': [
        ['Illustrator', 'Photoshop', 'XD'],
        ['Frontend', 'CSS', 'SASS']
    ],
    'develop': [
        ['Backend', 'PHP', 'CraftCMS', 'Laravel'],
        ['JavaScript', 'ReactJS', 'jQuery'],
        ['NodeJS', 'Express', 'Jest', 'GraphQL'],
        ['MySQL']
    ]
};

$(document).ready(function() {

    let designSkills = '';
    skills.design.forEach((category, i) => {
        let categoryText = '';

        category.forEach((skill, j) => {
            categoryText += j < category.length - 1 ? skill + ' / ' : skill;
        });

        designSkills += i < skills.design.length - 1 ? categoryText + '<br>' : categoryText;
    });
    $('p.design').html(designSkills);

    let developSkills = '';
    skills.develop.forEach((category, i) => {
        let categoryText = '';

        category.forEach((skill, j) => {
            categoryText += j < category.length - 1 ? skill + ' / ' : skill;
        });

        developSkills += i < skills.develop.length - 1 ? categoryText + '<br>' : categoryText;
    });
    $('p.develop').html(developSkills);

});