// ==UserScript==
// @name         Rainbowify Unflaireds
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Rob those T5s of their supremacy
// @author       Topical Soup
// @match        https://www.destiny.gg/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=destiny.gg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var observer = new MutationObserver(function (mutations) {
        var undefinedElements = document.getElementsByClassName("undefined");
        for (var i = 0; i < undefinedElements.length; i++) {
            undefinedElements[i].classList.replace("undefined", "flair42");
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });

})();