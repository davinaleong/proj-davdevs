$(document).ready(function() {

    projects.sort((a, b) => {
        const projectA = a.date.toLowerCase();
        const projectB = b.date.toLowerCase();

        let comparison = 0;
        if (projectA > projectB) {
            comparison = -1;
        } else if (projectA < projectB) {
            comparison = 1;
        } else {
            comparison = 0;
        }

        return comparison;
    });

    projects.forEach(project => {
        $('section.showcase div.cards').append(
            '<div class="card">' +
            '\t<img src="./assets/images/' + project.image + '">' +
            '\t<div class="content">' +
            '\t\t<h3 class="h5 mb-1"><a href="' + project.link + '">' + project.name + '</a></h3>' +
            '\t\t<p>' + project.category + '</p>' +
            '\t</div>' +
            '</div>'
        );
    });
    
});