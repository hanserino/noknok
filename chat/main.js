 
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


    function startHighLighting(item, startTime, endTime) {    
        setInterval(function() {  
            setInterval(function() {  
                item.addClass('active');
                setInterval(function() {  
                    item.addClass('next');  
                }, 2000);  
            }, endTime);
        }, startTime);
    }
    
    $(".chat-list-item").each(function(index) {  
        var item = $(this),  
        baseTime = 2000,  
        highlightTime = baseTime * index,  
        unhighlightTime = baseTime * (index + 1);  
    
        startHighLighting(item, highlightTime, unhighlightTime);  
    });

 }
 
 /**
  * Wait for document ready to fire dom dependent stuf
  */
 
 window.addEventListener('load', function () {
     init();
 });
 
 