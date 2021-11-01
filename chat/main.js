 
 let isTouchDevice = function () {
     return (
         !!(typeof window !== 'undefined' &&
             ('ontouchstart' in window ||
                 (window.DocumentTouch &&
                     typeof document !== 'undefined' &&
                     document instanceof window.DocumentTouch))) ||
         !!(typeof navigator !== 'undefined' &&
             (navigator.maxTouchPoints || navigator.msMaxTouchPoints))
     );
 };
 
 
 function init() {
     /**
     * DOM elements
     */     
 
    document.body.setAttribute("data-touch", isTouchDevice());
    document.body.setAttribute("data-loaded", true);

    function scrollAnimation($el){
        $el.scroll();

        $el.animate({
            scrollTop: 1000
        }, 2000);
    }


    function startHighLighting(item, startTime, endTime) {    
        setInterval(function() {  
            setInterval(function() {  
                item.addClass('active');
                
                setInterval(function() {  
                    item.addClass('next');
                }, 3000);  
            }, endTime);
        }, startTime);
    }
    
    $(".animItem").each(function(index) {  
        var item = $(this),  
        baseTime = 2000,  
        highlightTime = baseTime * index,  
        unhighlightTime = baseTime * (index + 1);  
    
        startHighLighting(item, highlightTime, unhighlightTime);

        if(index > 5){
            //scrollAnimation($('.chat-list'));
        }

    });

 }
 
 /**
  * Wait for document ready to fire dom dependent stuf
  */
 
 window.addEventListener('load', function () {
     init();
 });
 
 