$('#buttonOne').click(function(e){
    $('#buttonOne').toggleClass('fullscreen');
    $('#buttonOne').unbind('click');
    setTimeout(function(){
        window.location.replace("11/11.html").delay(500);
    }, 2000)
   
});