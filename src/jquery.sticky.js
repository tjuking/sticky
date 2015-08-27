/**
 * sticky.js 0.1
 * https://github.com/tjuking/jquery.sticky.js
 */

(function (global, factory) {
    "use strict"
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function ($) {
            return factory($, global);
        });
    } else if (typeof exports !== "undefined") {
        module.exports = factory(require("jquery"), global);
    } else {
        factory(jQuery, global);
    }
})(typeof window !== 'undefined' ? window : this, function ($, window) {
    "use strict"
    $.fn.sticky = function (top) {
        var $this = $(this);
        if ($(this).length && top) {
            $(window).on("scroll", function () {
                if ($(window).scrollTop() >= top) {
                    if ($this.css("position") != "fixed") {
                        $this.css({
                            position: "fixed",
                            top: 0
                        });
                    }
                } else {
                    if ($this.css("position") != "absolute") {
                        $this.css({
                            position: "absolute",
                            top: top
                        });
                    }
                }
            });
        }
    };
});