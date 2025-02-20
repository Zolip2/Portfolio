//Picture navigation
var pageStatus = 0;

var pic = -1;




$('#iot').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
    $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
    $("#title").html("Webszerver irányító gombokkal");
    $('#iot').css('color', 'darkred');
    $('#ang').css('color', 'black');
    $('#display').css('height', '450px');
});

$('#ang').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
    $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
    $("#title").html("Angol önéletrajz");
    $('#ang').css('color', 'darkred');
    $('#iot').css('color', 'black');
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
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
            $("#title").html("Webszerver irányító gombokkal");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
            $("#title").html("Autó előre haladása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
            $("#title").html("Weblap HTML kódja");
            $("#pPicture").css("width", "100%");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
            $("#title").html("Az autó");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
            $("#title").html("Az autó");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
            $("#title").html("Gombok érzékelése");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $("#title").html("Bluetooth elindítása");
            $('#display').css('height', '200px');
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $("#title").html("WiFi adatok bekérése");
            $('#display').css('height', '200px');
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
            $("#title").html("Angol önéletrajz");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
            $("#title").html("Angol önéletrajz");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
            $("#title").html("Magyar önéletrajz");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
            $("#title").html("Magyar önéletrajz");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
            $("#title").html("Angol motivációs levél");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
            $("#title").html("Magyar motivációs levél");
        }
    }

    if(pic == 9 && pageStatus == 1){
        pic = 1;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
        $("#title").html("Webszerver irányító gombokkal");
    }
    else if(pic == 14 && pageStatus == 2){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
        $("#title").html("Angol önéletrajz");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 1){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/buttons.png");
            $("#title").html("Webszerver irányító gombokkal");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/function.png");
            $("#title").html("Autó előre haladása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/html.png");
            $("#title").html("Weblap HTML kódja");
            $("#pPicture").css("width", "100%");
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180006.jpg");
            $("#title").html("Az autó");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/IMG_20250112_180014.jpg");
            $("#title").html("Az autó");
        }
        else if(pic == 6){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/serverBegin.png");
            $("#title").html("Gombok érzékelése");
        }
        else if(pic == 7){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/setup.png");
            $("#title").html("Bluetooth elindítása");
            $('#display').css('height', '200px');
        }
        else if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
            $("#title").html("WiFi adatok bekérése");
            $('#display').css('height', '200px');
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        $('#display').css('height', '450px');
        if(pic == 8){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/1.png");
            $("#title").html("Angol önéletrajz");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/2.png");
            $("#title").html("Angol önéletrajz");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/3.png");
            $("#title").html("Magyar önéletrajz");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/4.png");
            $("#title").html("Magyar önéletrajz");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/5.png");
            $("#title").html("Angol motivációs levél");
        }
        else if(pic == 13){
            $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
            $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
            $("#title").html("Magyar motivációs levél");
        }
    }
    if(pic == 0 && pageStatus == 1){
        pic = 8;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/A/IoT/SSDPW.png");
        $("#title").html("WiFi adatok bekérése");
        $('#display').css('height', '200px');
    }
    else if(pic == 7 && pageStatus == 2){
        pic = 13;
        $('#pic').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
        $('#pPicture').attr("src", "../Képek/13.évfolyam/A/Munkavállalói idegen nyelv/6.png");
        $("#title").html("Magyar motivációs levél");
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

$('#pPopup').click(function(){
    $('#pPopup').css("display", "none")
})