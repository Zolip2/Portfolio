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
    $("#title").html("Létradiagram");
    $('#plc').css('color', 'darkred');
    $('#szim').css('color', 'black');
    $('#display').css('height', '450px');
});

$('#szim').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
    $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
    $("#title").html("NE555 időzítő");
    $('#szim').css('color', 'darkred');
    $('#plc').css('color', 'black');
    $('#display').css('height', '450px');
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
            $("#title").html("Létradiagram");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $("#title").html("Lift megérkezett az földszintre");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $("#title").html("A lift a földszinten van");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $("#title").html("A lift megérkezett az első emeletre");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $("#title").html("A lift ajtaja bezárult az első emeleten");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $("#title").html("GVL fájl változókkal");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $("#title").html("NE555 időzítő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $("#title").html("NE555 áramköre");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $("#title").html("Taps kapcsoló a szimulátorban");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $("#title").html("Egy alapkapcsolás a szimulátorban");
        }
    }

    if(pic == 10 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code1.png");
        $("#title").html("Létradiagram");
    }
    else if(pic == 12 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
        $("#title").html("NE555 időzítő");
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
            $("#title").html("Létradiagram");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code2.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code3.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/code4.png");
            $("#title").html("Létradiagram");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneArrived.png");
            $("#title").html("Lift megérkezett az földszintre");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorOneNoCall.png");
            $("#title").html("A lift a földszinten van");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoArrived.png");
            $("#title").html("A lift megérkezett az első emeletre");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/elevatorFloorTwoDoorClosed.png");
            $("#title").html("A lift ajtaja bezárult az első emeleten");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
            $("#title").html("GVL fájl változókkal");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555.jpg");
            $("#title").html("NE555 időzítő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/555cucc.png");
            $("#title").html("NE555 áramköre");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/circuit.png");
            $("#title").html("Taps kapcsoló a szimulátorban");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
            $("#title").html("Egy alapkapcsolás a szimulátorban");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 9;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/PLC programozás/gvl.png");
        $("#title").html("GVL fájl változókkal");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 11;
        $('#pic').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/B/Számítógépes szimuláció/Falstad.png");
        $("#title").html("Egy alapkapcsolás a szimulátorban");
    }
});
//Back button
$('#back').click(function(){
    $("#title").css("display", "none");
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