# jquery.sticky.js

说明：设置元素跟随页面滚动，效果可参见CSS中的sticky属性

依赖：jQuery

使用示例：
    
    //设置sticky，元素距离页面顶部100像素
    $(".demo").sticky({ top: 100 });
    
    //元素距离页面顶部50像素，元素距离底部最小值为100像素，到达最小值时设置bottom值为10像素
    $(".demo").sticky({
        top: 50,
        minBottom: 100,
        bottom: 10
    });
    