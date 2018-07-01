$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// typed.js
var typed = new Typed('#typing', {
  strings: ["thinking", "music", "fall and winter", "typography", "puppies", "learning", "korean bbq", "adventure", "milk tea", "problem solving", "doodling", "japan", "art", "coffee"],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true
});
