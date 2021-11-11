

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



 
 $( document ).ready(function() {
    console.log( "ready!" );
});

 
 