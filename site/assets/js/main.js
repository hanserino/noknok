function chatScroll($chatItem, $chatList, startTime, endTime, ) {    
    setTimeout(() => { 
        setTimeout(() => { 
            $chatItem.addClass('active');
            var height = $chatList[0].scrollHeight;
            
            $chatList.scrollTop(height);

            setInterval(function() {  
                $chatItem.addClass('next');               
            }, 2800);

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


