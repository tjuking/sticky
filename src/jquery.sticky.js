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

    /**
     * @param {number} top - 元素距离顶部的原始高度
     */
    $.fn.sticky = function (top) {
        var $this = $(this);
        top = parseInt(top);
        //元素存在并且距离顶部距离不为0
        if ($this.length && top > 0) {
            //初始时需要先设置一遍
            setSticky($this, top);
            //可以考虑debounce处理 ToDo
            $(window).on("scroll", function () {
                setSticky($this, top);
            });
        }
    };

    function setSticky($ele, top) {
        //滚动到元素位置时
        if ($(window).scrollTop() >= top) {
            if ($ele.css("position") !== "fixed") {
                $ele.css({
                    position: "fixed",
                    top: 0
                });
            }
        } else {
            if ($ele.css("position") !== "absolute") {
                $ele.css({
                    position: "absolute",
                    top: top
                });
            }
        }
    }
});