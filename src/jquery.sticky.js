/**
 * sticky.js 0.2
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
     * {object} options - top:元素距离顶部的高度; cssBottom:元素到达minBottom时设置的bottom样式值; minBottom:运行元素距离底部的最小值
     */
    $.fn.sticky = function (options) {
        options = $.extend({
            top: 0,
            cssBottom: 0,
            minBottom: 0
        }, options);
        var $this = $(this);
        var top = parseInt(options.top);
        var cssTop = 0;
        var cssBottom = parseInt(options.cssBottom);
        var minBottom = parseInt(options.minBottom);
        var height = $this.height();

        //元素存在并且距离顶部距离不为0
        if ($this.length && top > 0) {
            cssTop = $this.css("top");
            //初始时需要先设置一遍
            setSticky();
            //考虑debounce处理 ToDo
            $(window).on("scroll", function () {
                setSticky();
            });
        }

        //内部调用方法
        function setSticky() {
            var scrollTop = $(window).scrollTop();
            //滚动到元素位置时
            if (scrollTop >= top) {
                if (minBottom > 0 && $("body").height() - scrollTop <= minBottom + height) {
                    $this.css({
                        position: "absolute",
                        top: "auto",
                        bottom: cssBottom
                    });
                } else if ($this.css("position") !== "fixed") {
                    $this.css({
                        position: "fixed",
                        top: 0,
                        bottom: "auto"
                    });
                }
            } else {
                if ($this.css("position") !== "absolute") {
                    $this.css({
                        position: "absolute",
                        top: cssTop,
                        bottom: "auto"
                    });
                }
            }
        }
    };
});