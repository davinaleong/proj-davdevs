const jokes = [
    "A: What do you call a reptilian AI?\r\n\r\nQ: An algogator.",
    "A friend texted me that she attended her friend's wedding.\r\n\r\nBut it happened on a Sat; so was it a Wed-ding or a Sat-ding?\r\nIf she's not seated at the moment, then she should sit-ding while waiting for the couple to arrive?\r\n\r\nLater, that evening she had to stand to give her to-be married friend a stand-ding ovation.",
    "A foreigner just finished his meal at a restaurant in Singapore.\r\n\r\nAs the waiter was about to hand him the bill, he mentions, \"We only accept cash or nets.\"\r\n\r\nThe foreigner replied, \"Which kind? The butterfly one or the internet one?\"",
    "Q: What drink energizes you and costs a ton, but makes you sick?\r\n\r\nA: Coughfee",
    "Take a piece of string and tie is around a soda can.\r\n\r\nQ: What do you get?\r\n\r\nA: A can-knot.",
    "Colleague: I'm running a lil late for standup. Can wait for me?\r\n\r\nMe: Sure, don't need to sprint.",
    "I'm sure you'd like to miss a mistake, but would you miss a good steak?",
    "Q: How to make yourself knew a piece of info that was new to you?\r\n\r\nA: Put a 'k' in front of it and now you'll know, and later on knew what was initially new to you.",
    "We watched a moveie yesterday.\r\n\r\nWhen it ended, it became a stoppie.",
    "Q: What do trees and work have in common?\r\n\r\nA: They both have leaves",
    "One of the timezones in the US has the acronym PDT (Pacific Daylight Time).\r\nThere's a well-known US person whose name shares the same acronym.\r\n\r\nQ: Who is that person?\r\n\r\nA: President Donald Trump",
    "A group of friends gathered for a party. One friend came late to the party. Another friend came after that.\r\nIs this person then late or line?\r\n\r\nExplanation\r\nlate: l8\r\nlnine: l9",
    "A group of people gathered around the table for dinner.\r\n\r\nThe spread consisted of fried chicken wings, roast duck legs, pork loins, lamb racks, beef steaks and fish skewers.\r\n\r\nYou could say they had a meeting of meat-things.",
    "Hosted a gathering at my place one day.\r\n\r\nOne of the ladies who was attached arrived early. I asked her where her boyfriend was.\r\nShe replied, \"Coming soon\".\r\nI responeded, \"Is that some movie you want to watch?\"\r\n\r\nLater that day, we played a mobile game called Psyched.\r\nTwo persons tied and I said, \"You forgot your three-piece suit\"."
];

let $modal = null;

$(document).ready(function() {
    $modal = $('div.modal');
});

const modal = {
    show: () => {
        $modal.removeClass('hidden');

        const joke = jokes[Math.floor(Math.random() * jokes.length)];
        $('div.modal div.content p.funny').html(breakLines(joke));
    },
    hide: () => {
        $modal.addClass('hidden');
    }
};

function breakLines(string) {
    return string.replace(/\r\n/g, '<br>');
}