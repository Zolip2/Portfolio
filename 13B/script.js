//Picture navigation
var pageStatus = 0;

var pic = -1;




$('#prog').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
    $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
    $('#prog').css('color', 'darkred');
    $('#cad').css('color', 'black');
});

$('#cad').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
    $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
    $('#cad').css('color', 'darkred');
    $('#prog').css('color', 'black');
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
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
        }
    }

    if(pic == 11 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
    }
    else if(pic == 13 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 10;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 12;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
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