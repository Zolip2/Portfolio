$('#buttonOne').click(function(e){
    $('#buttonOne').toggleClass('fullscreen');
    $('#buttonOne').unbind('click');
    setTimeout(function(){
        window.location.replace("11A/11.html").delay(500);
    }, 2000)
   
});

$('#buttonTwo').click(function(e){
    $('#buttonTwo').toggleClass('fullscreen');
    $('#buttonTwo').unbind('click');
    setTimeout(function(){
        window.location.replace("11B/11.html").delay(500);
    }, 2000)
   
});

$('#buttonThree').click(function(e){
    $('#buttonThree').toggleClass('fullscreen');
    $('#buttonThree').unbind('click');
    setTimeout(function(){
        window.location.replace("12A/12.html").delay(500);
    }, 2000)
   
});

$('#buttonFour').click(function(e){
    $('#buttonFour').toggleClass('fullscreen');
    $('#buttonFour').unbind('click');
    setTimeout(function(){
        window.location.replace("12B/12.html").delay(500);
    }, 2000)
   
});