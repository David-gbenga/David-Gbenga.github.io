
// main.js - Adds interactive behavior to the portfolio website

(function($) {

    var $window = $(window),
        $body = $('body');

    // Breakpoints
    breakpoints({
        xlarge: [ '1281px',  '1680px' ],
        large:  [ '981px',   '1280px' ],
        medium: [ '737px',   '980px'  ],
        small:  [ '481px',   '736px'  ],
        xsmall: [ null,      '480px'  ]
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Smooth scroll for anchor links
    $('.scrolly').scrolly();

    // Navigation toggle
    var $nav = $('#nav');
    if ($nav.length > 0) {
        // Shrink effect
        var $header = $('#header');
        if ($header.length > 0) {
            $window.on('scroll', function() {
                if ($window.scrollTop() > 100) {
                    $header.addClass('alt');
                } else {
                    $header.removeClass('alt');
                }
            });
        }
    }

})(jQuery);
