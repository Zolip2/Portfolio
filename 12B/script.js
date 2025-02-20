//Picture navigation
var pageStatus = 0;

var pic = -1;


$('document').ready(function(){
    var maxHeight = 1000;
    var maxWidth = 1100;

    $('#pic').on('load', function(){
        var height = $(this).height();
        var width = $(this).width();

        if(height > maxHeight || width >maxWidth){
            var aspectRatio = width / height;

            if(width >height){
                //$(this).width(maxWidth);
                //$(this).heoght(maxWidth / aspectRatio);
                //$('#display').css('height', '100px');
            }
            else{
                //$(this).height(height);
                //$(this).height(height * aspectRatio);
                //$('#display').css('height', '100px');
            }
        }

    });

});

$('#plc').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
    $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
    $('#plc').css('color', 'darkred');
    $('#szim').css('color', 'black');
});

$('#szim').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
    $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
    $('#szim').css('color', 'darkred');
    $('#plc').css('color', 'black');
});

$("#pic").click(function(){
    $("#pPopup").css("display", "flex");
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
        }
    }

    if(pic == 10 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
    }
    else if(pic == 12 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 9;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 11;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
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

$('#sR').click(function(){
    $('#sPopup').css("display", "flex")
})

$('#sPopup').click(function(){
    $('#sPopup').css("display", "none")
})

$('#pPopup').click(function(){
    $('#pPopup').css("display", "none")
})