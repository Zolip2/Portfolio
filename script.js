$('#buttonOne').click(function(e){
    $('#buttonOne').toggleClass('fullscreen');
    $('#buttonOne').unbind('click');
    setTimeout(function(){
        window.location.replace("11/11.html").delay(500);
    }, 2000)
   
});

$('#buttonTwo').click(function(e){
    $('#buttonTwo').toggleClass('fullscreen');
    $('#buttonTwo').unbind('click');
    setTimeout(function(){
        window.location.replace("12/12.html").delay(500);
    }, 2000)
   
});