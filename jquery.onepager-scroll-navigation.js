/**
 * created by @jaynoe
 * https://github.com/jaynoe
 *
 * Plugin: jquery-onepager-navigation
 * https://github.com/jaynoe/onepager-scroll-navigation
 */

;(function($){

    $.fn.onepagerScrollNavigation = function(options){

        // default options
        options = $.extend({
            duration: 1000,
            activeClass : "active",
            containerClass: ".container",
            offsetTop: 0
        }, options);

        var $navigation = $(this);
        var $link = $navigation.find("a");
        var offset = options.offsetTop;

        // add active class to first link
        $navigation.find("li:first-child a").addClass(options.activeClass);

        // trigger click function
        $link.click(function(e) {
            // prevent "normal" behavior
            e.preventDefault();
            // get current hash
            var hash = $(this).prop("hash");
            $('html, body').animate({
                scrollTop: $(hash).offset().top-offset
            }, options.duration);
        });
        
        // new offset if fixed header
		var linkOffset;
		if(offset > 0) { linkOffset = offset+10; } 
		else { linkOffset = offset; }

        $(window).scroll(function() {
            var pos = $(window).scrollTop()+linkOffset;
            $(options.containerClass).each(function() {
                var section = $(this).offset().top;
                var id = $(this).attr("id");
                if(pos >= section) {
                    $navigation.find("a[data-area]").removeClass(options.activeClass);
                    $navigation.find("a[data-area='"+id+"']").addClass(options.activeClass);
                }
            });
        });

    };

})(jQuery);
