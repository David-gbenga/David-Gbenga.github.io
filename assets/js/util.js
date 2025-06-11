
/* util.js - Utility functions and helpers for Kolawole David Portfolio Website */

// Breakpoints utility (matches breakpoints.min.js assumptions)
var breakpoints = (function() {
    return {
        isMobile: function() {
            return window.innerWidth <= 736;
        }
    };
})();

// Utility for DOM manipulation
var $ = function(selector) {
    return document.querySelector(selector);
};

var $$ = function(selector) {
    return document.querySelectorAll(selector);
};

// Add class
function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else if (!hasClass(el, className))
        el.className += " " + className;
}

// Remove class
function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else if (hasClass(el, className)) {
        var reg = new RegExp('(\s|^)' + className + '(\s|$)');
        el.className = el.className.replace(reg, ' ');
    }
}

// Has class
function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return new RegExp('(\s|^)' + className + '(\s|$)').test(el.className);
}

// Onload animation trigger
window.addEventListener('load', function() {
    setTimeout(function() {
        removeClass(document.body, 'is-preload');
    }, 100);
});
