//Picture navigation
var pageStatus = 0;

var pic = -1;




$('#prog').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
    $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
    $("#title").html("Adatbázis becsatolása, első lekérdezés");
    $('#prog').css('color', 'darkred');
    $('#cad').css('color', 'black');
    $('#display').css('height', '450px');
});

$('#cad').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
    $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
    $("#title").html("NE555 időzítő");
    $('#cad').css('color', 'darkred');
    $('#prog').css('color', 'black');
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
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
            $("#title").html("Adatbázis becsatolása, első lekérdezés");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $("#title").html("Új adat hozzáadása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $("#title").html("Adat törlése");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $("#title").html("Tábla összes oszlop nevének lekérdezése");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $("#title").html("Hely hozzáadása grafikusan");
            $('#display').css('height', '200px');
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $("#title").html("Szenzor hozzáadása grafikusan");
            $('#display').css('height', '200px');
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $("#title").html("Szenzor típus hozzáadása grafikusan");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $("#title").html("Adat törlése grafikusan");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $("#title").html("Egész grafikus felület");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $("#title").html("Szenzor tábla adatainak kiírása listában");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $("#title").html("NE555 időzítő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $("#title").html("LED");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $("#title").html("Mikrofon");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $("#title").html("Megtervezett NYÁK lap");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $("#title").html("Teljes taps kapcsoló");
        }
    }

    if(pic == 11 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddLocationCode.png");
        $("#title").html("Adatbázis becsatolása, első lekérdezés");
    }
    else if(pic == 13 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
        $("#title").html("NE555 időzítő");
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
            $("#title").html("Adatbázis becsatolása, első lekérdezés");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/AddSensorCode.png");
            $("#title").html("Új adat hozzáadása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTableCode.png");
            $("#title").html("Adat törlése");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/DeleteTablecomboBoxCode.png");
            $("#title").html("Tábla összes oszlop nevének lekérdezése");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddLocation.png");
            $("#title").html("Hely hozzáadása grafikusan");
            $('#display').css('height', '200px');
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensor.png");
            $("#title").html("Szenzor hozzáadása grafikusan");
            $('#display').css('height', '200px');
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicAddSensorType.png");
            $("#title").html("Szenzor típus hozzáadása grafikusan");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicDeleteData.png");
            $("#title").html("Adat törlése grafikusan");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/GraphicScreen.png");
            $("#title").html("Egész grafikus felület");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
            $("#title").html("Szenzor tábla adatainak kiírása listában");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/chip.png");
            $("#title").html("NE555 időzítő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/led.png");
            $("#title").html("LED");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/microphone.png");
            $("#title").html("Mikrofon");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/top.png");
            $("#title").html("Megtervezett NYÁK lap");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
            $("#title").html("Teljes taps kapcsoló");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 10;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Programfejlesztés/listBoxCode.png");
        $("#title").html("Szenzor tábla adatainak kiírása listában");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 12;
        $('#pic').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/B/Robottechnikai CADCAM/whole_circuit.png");
        $("#title").html("Teljes taps kapcsoló");
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