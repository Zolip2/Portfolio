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

$('#data').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
    $('#data').css('color', 'darkred');
    $('#hal').css('color', 'black');
});

$('#hal').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
    $('#hal').css('color', 'darkred');
    $('#data').css('color', 'black');
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
        }
        else if(pic == 14){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
        }
        else if(pic == 15){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 16){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 17){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
        }
    }

    if(pic == 13 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
    }
    else if(pic == 18 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
        }
        else if(pic == 14){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
        }
        else if(pic == 15){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 16){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $('#display').css('height', '200px');
        }
        else if(pic == 17){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 12;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 17;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
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