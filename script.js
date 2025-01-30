$('#buttonOne').click(function(e){
    $('#buttonOne').toggleClass('fullscreen');
    setTimeout(function(){
        window.location.replace("11/11.html").delay(500);
    }, 2000)
   
});