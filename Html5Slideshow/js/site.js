
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function () {
    log.history = log.history || [];   // store logs to an array for reference
    log.history.push(arguments);
    if (this.console) {
        arguments.callee = arguments.callee.caller;
        console.log(Array.prototype.slice.call(arguments));
    }
};
// make it safe to use console.log always
(function (b) { function c() { } for (var d = "assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profileEnd,time,timeEnd,trace,warn".split(","), a; a = d.pop(); ) b[a] = b[a] || c })(window.console = window.console || {});

// Initialize the slideshow plug-in.
(function ($) {
    //You can trigger Javascript based on the slide number like this:
    $('html').bind('newSlide', function (e, id) {
        switch (id) {
            case 2:
                log('This is the second slide.'); ;
                break;
            case 3:
                log('Hello, third slide.');
                break;
            default:
                log('slide: ' + id);
                break;
        }
    });

    //One little option: hideToolbar (boolean; default = false)
    htmlSlides.init({ hideToolbar: false });
})(jQuery);