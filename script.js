const audio = new Audio('maxwell-the-cat-theme.mp3');




$('#buttonOne').click(function(e){
    $('#buttonOne').toggleClass('fullscreen');
    $('#buttonOne').unbind('click');
    setTimeout(function(){
        window.location.replace("11A/11.html").delay(500);
    }, 500)
   
});

$('#buttonTwo').click(function(e){
    $('#buttonTwo').toggleClass('fullscreen');
    $('#buttonTwo').unbind('click');
    setTimeout(function(){
        window.location.replace("11B/11.html").delay(500);
    }, 500)
   
});

$('#buttonThree').click(function(e){
    $('#buttonThree').toggleClass('fullscreen');
    $('#buttonThree').unbind('click');
    setTimeout(function(){
        window.location.replace("12A/12.html").delay(500);
    }, 500)
   
});

$('#buttonFour').click(function(e){
    $('#buttonFour').toggleClass('fullscreen');
    $('#buttonFour').unbind('click');
    setTimeout(function(){
        window.location.replace("12B/12.html").delay(500);
    }, 500)
   
});

$('#buttonFive').click(function(e){
    $('#buttonFive').toggleClass('fullscreen');
    $('#buttonFive').unbind('click');
    setTimeout(function(){
        window.location.replace("13A/13.html").delay(500);
    }, 500)
   
});

$('#buttonSix').click(function(e){
    $('#buttonSix').toggleClass('fullscreen');
    $('#buttonSix').unbind('click');
    setTimeout(function(){
        window.location.replace("13B/13.html").delay(500);
    }, 500)
   
});

$('#logo').click(function(e){
    window.open("https://bankisuli.hu");
});



$('#4').click(function(){
    $('#buttonSeven').css('display', 'flex');
});

$('#1').click(function(){
    $('#buttonSeven').css('display', 'none');
});
$('#2').click(function(){
    $('#buttonSeven').css('display', 'none');
});
$('#3').click(function(){
    $('#buttonSeven').css('display', 'none');
});

$('#maxwell').click(function(){
    audio.play();
});