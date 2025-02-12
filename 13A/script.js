//Picture navigation
var pageStatus = 0;

var pic = -1;




$('#iot').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
    $('#iot').css('color', 'darkred');
    $('#ang').css('color', 'black');
});

$('#ang').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
    $('#ang').css('color', 'darkred');
    $('#iot').css('color', 'black');
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $('#display').css('height', '200px');
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
        }
    }

    if(pic == 9 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
    }
    else if(pic == 14 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $('#display').css('height', '200px');
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
        $('#display').css('height', '200px');
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 13;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
    }
});
//Back button
$('#back').click(function(){
    $('#transition').animate({"height": "100vh"}, 1000);
    setTimeout(function(){
        window.location.replace('../index.html');
    }, 1000)
});

$('#fR').click(function(){
    $('#fPopup').css("display", "flex")
})

$('#fPopup').click(function(){
    $('#fPopup').css("display", "none")
})