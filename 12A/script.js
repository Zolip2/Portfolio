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
    $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
    $("#title").html("Gyárak tábla");
    $('#data').css('color', 'darkred');
    $('#hal').css('color', 'black');
    $('#display').css('height', '450px');
});

$('#hal').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
    $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
    $("#title").html("Pécsi hálózat");
    $('#hal').css('color', 'darkred');
    $('#data').css('color', 'black');
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
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
            $("#title").html("Gyárak tábla");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
            $("#title").html("Táblák létrehozása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
            $("#title").html("Táblák létrehozása");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
            $("#title").html("Mérések tábla");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
            $("#title").html("Relációs ábra");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
            $("#title").html("Riasztások tábla");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $("#title").html("Adatbázis létrehozása");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
            $("#title").html("Érzékelők tábla");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
            $("#title").html("Érzékelők típusa tábla");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
            $("#title").html("Pécsi hálózat");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
            $("#title").html("");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $("#title").html("");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
            $("#title").html("");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
            $("#title").html("");
        }
        else if(pic == 14){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
            $("#title").html("");
        }
        else if(pic == 15){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 16){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 17){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
            $("#title").html("");
        }
    }

    if(pic == 13 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
        $("#title").html("Gyárak tábla");
    }
    else if(pic == 18 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
        $("#title").html("Pécsi hálózat");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/HelyekTábla.png");
            $("#title").html("Gyárak tábla");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép1.png");
            $("#title").html("Táblák létrehozása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép2.png");
            $("#title").html("Táblák létrehozása");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép3.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép4.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/kép5.png");
            $("#title").html("Táblák feltöltése");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/MérésekTábla.png");
            $("#title").html("Mérések tábla");
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Relációs tábla.png");
            $("#title").html("Relációs ábra");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/RiasztásokTábla.png");
            $("#title").html("Riasztások tábla");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/Screenshot 2025-01-17 232323.png");
            $("#title").html("Adatbázis létrehozása");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzorokTábla.png");
            $("#title").html("Érzékelők tábla");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
            $("#title").html("Érzékelők típusa tábla");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANIPNetwork.png");
            $("#title").html("Pécsi hálózat");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/LANWANIP.png");
            $("#title").html("");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/PCIPCode.png");
            $("#title").html("");
            $('#display').css('height', '100px');
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/RouterIPCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/SwitchIPCode.png");
            $("#title").html("");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WANIPNetwork.png");
            $("#title").html("");
        }
        else if(pic == 14){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WholeNetwork.png");
            $("#title").html("");
        }
        else if(pic == 15){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessIPCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 16){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessPasswordCode.png");
            $("#title").html("");
            $('#display').css('height', '200px');
        }
        else if(pic == 17){
            $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
            $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
            $("#title").html("");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 12;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Adatbáziskezelés alapjai/SzenzortipusTábla.png");
        $("#title").html("Érzékelők típusa tábla");
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 17;
        $('#pic').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
        $('#pPicture').attr("src", "../Képek/12.évfolyam/A/Hálózatkezelés/WirelessSSIDCode.png");
        $("#title").html("");
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