//Picture navigation
var pageStatus = 0;

var pic = -1;


$('#elektro').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
    $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
    $("#title").html("Mérési táblázat");
    $('#elektro').css('color', 'darkred');
    $('#micro').css('color', 'black');
});

$('#micro').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
    $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
    $("#title").html("Töltöttség mérő");
    $('#micro').css('color', 'darkred');
    $('#elektro').css('color', 'black');
});

$("#pic").click(function(){
    $("#pPopup").css("display", "flex");
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic += 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
            $("#title").html("Mérési táblázat");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
            $("#title").html("Megadott adatok");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
            $("#title").html("Párhuzamos kapcsolás számolása");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
            $("#title").html("Soros kapcsolás számolása");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
            $("#title").html("Ábrák");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
            $("#title").html("Szamárháromszög");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
            $("#title").html("Töltöttség mérő");
        }
    }

    if(pic == 7){
        pic = 1;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
        $("#title").html("Mérési táblázat");
    }
    else if(pic == 13){
        pic = 8;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
        $("#title").html("Töltöttség mérő");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
            $("#title").html("Mérési táblázat");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
            $("#title").html("Megadott adatok");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
            $("#title").html("Párhuzamos kapcsolás számolása");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
            $("#title").html("Soros kapcsolás számolása");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
            $("#title").html("Ábrák");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
            $("#title").html("Szamárháromszög");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
            $("#title").html("Töltöttség mérő");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
            $("#title").html("Töltöttség mérő");
        }
    }
    if(pic == 0){
        pic = 6;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
        $("#title").html("Szamárháromszög");
    }
    else if(pic == 7){
        pic = 12;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
        $("#title").html("Töltöttség mérő");
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