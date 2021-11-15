function chatScroll($chatItem, $chatList, startTime, endTime, ) {    
    setTimeout(() => { 
        setTimeout(() => { 
            $chatItem.addClass('active');

            $chatList.animate({
                scrollTop: $chatList.find('.active').last().offset().top
            }, 500);

            setInterval(function() {  
                $chatItem.addClass('next');               
            }, 3000);  
        }, endTime);
    }, startTime);
}


$( document ).ready(function() {
    
    setTimeout(() => { 
        $('body').addClass('ready');
    }, 0);

    var chatListEl = $("#chat-list"), 
        headerEl = $("header"),
        animationEl = $(".animItem");

    animationEl.each(function(index) {  
        baseTime = 1800,  
        highlightTime = baseTime * index,  
        unhighlightTime = baseTime * (index + 1);

        chatScroll($(this), chatListEl, highlightTime, unhighlightTime);

    });


    chatListEl.css("height", headerEl.height());

    $(window).resize(function() {
        chatListEl.css("height", headerEl.height());
    });

});


