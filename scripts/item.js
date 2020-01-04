$(document).ready(function() {
    const item = projects[0];

    $('h2.name').text(item.name);
    $('p.category').text(item.category);
    $('p.date small').text(moment(item.date).format('DD MMM YYYY'));

    $('p.image').html('<img class="shadow" src="./assets/images/' + item.image + '">');

    $('p.writeUp').html(breakLines(item.writeUp));
});

function breakLines(string) {
    return string.replace(/\r\n/g, '<br>');
}