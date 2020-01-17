$(document).ready(function() {

    const featuredProjects = projects.filter(project => project.featured);
    featuredProjects.sort((a, b) => {
        const projectA = a.name.toLowerCase();
        const projectB = b.name.toLowerCase();

        let comparison = 0;
        if (projectA > projectB) {
            comparison = 1;
        } else if (projectA < projectB) {
            comparison = -1;
        } else {
            comparison = 0;
        }

        return comparison;
    });

    for(let i = 0; i < 4; ++i) {
        const project = featuredProjects[i];
        $('section.showcase div.cards').append(
            '<div class="card">' +
            '\t<div class="icon"><i class="fab fa-html5 fa-3x" style="color: #E54C21"></i></div>' +
            '\t<img src="./assets/images/' + project.image + '">' +
            '\t<div class="content">' +
            '\t\t<h3 class="h5 mb-1"><a href="' + project.link + '">' + project.name + '</a></h3>' +
            '\t\t<p>' + project.category + '</p>' +
            '\t</div>' +
            '</div>'
        );
    }
    
});