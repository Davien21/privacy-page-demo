(function () {
    'use strict';
    /* ====== Helpful and Reusable functions ====== */
     
    /* ====== Specific functions ====== */
   
    // Animations
    var contentWayPoint = function () {
        var i = 0;
        $('.animate-box').waypoint(function (direction) {
            if (direction === 'down' && !$(this.element).hasClass('animated')) {
                i++;
                $(this.element).addClass('item-animate');
                setTimeout(function () {
                    $('body .animate-box.item-animate').each(function (k) {
                        var el = $(this);
                        setTimeout(function () {
                            var effect = el.data('animate-effect');
                            let className = effect +' animated';
                            el.addClass(className);
                            el.removeClass('item-animate');
                        }, k * 200, 'easeInOutExpo');
                    });
                }, 100);
            }
        }, {
            offset: '85%'
        });
    };
    
    // Document on load.
    $(function () {
        contentWayPoint();
    });
    // Sections background image from data background
    var pageSection = $(".bg-img, section");
    pageSection.each(function (indx) {
        if ($(this).attr("data-background")) {
            $(this).css("background-image", "url(" + $(this).data("background") + ")");
        }
    });
   
    /* ======= Declaratives =======*/
    $(document).ready(function(){
        $(".dropper").click(function(){
            $(this).find('.drop').toggleClass('d-none')
            $(this).find('.link').toggleClass('d-none')
        });
        
    });

   

}());