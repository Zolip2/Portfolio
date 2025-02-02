//Picture navigation
var pageStatus = 0;

var pic = -1;


$('#elektro').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
    $('#elektro').css('color', 'darkred');
    $('#micro').css('color', 'black');
});

$('#micro').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
    $('#micro').css('color', 'darkred');
    $('#elektro').css('color', 'black');
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic += 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
        }
    }

    if(pic == 7){
        pic = 1;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
    }
    else if(pic == 13){
        pic = 8;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061254.jpg");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061283.jpg");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061311.jpg");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061337.jpg");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/1736854061365.jpg");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194437_1.jpg");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194456.jpg");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194528_1.jpg");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194740.jpg");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
        }
    }
    if(pic == 0){
        pic = 6;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Elektrotechnika/SzamárHáromszög.png");
    }
    else if(pic == 7){
        pic = 12;
        $('#pic').attr("src", "../Képek/11.évfolyam/A/Mikrovezérlő programozás/IMG_20250107_194816.jpg");
    }
});
//Back button
$('#back').click(function(){
    $('#transition').animate({"height": "100vh"}, 1000);
    setTimeout(function(){
        window.location.replace('../index.html');
    }, 2000)
});