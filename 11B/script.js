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
            }
            else{
                //$(this).height(height);
                //$(this).height(height * aspectRatio);
            }
        }

    });

});

$('#prog').click(function(){
    pageStatus = 1;
    pic = 1;
    $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
    $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
    $("#title").html("Dokumentum összeállítása sablon szerint");
    $('#prog').css('color', 'darkred');
    $('#dig').css('color', 'black');
    $('#display').css('height', '450px');
});

$('#dig').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
    $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
    $("#title").html("Logikai kapcsolás");
    $('#dig').css('color', 'darkred');
    $('#prog').css('color', 'black');
    $('#display').css('height', '450px');
});

$("#pic").click(function(){
    $("#pPopup").css("display", "flex");
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        $('#display').css('height', '450px');
        pic += 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
            $("#title").html("Dokumentum összeállítása sablon szerint");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
            $("#title").html("Sablon fájl beolvasása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $("#title").html("Dokumentum legenerálása");
            $('#display').css('height', '100px');
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
            $("#title").html("Sablon");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
            $("#title").html("Sablon generálása");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
            $("#title").html("Logikai kapcsolás");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
            $("#title").html("Logikai kapcsolás");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
            $("#title").html("Igazságtáblázat");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
            $("#title").html("Diszjunktív V-K tábla");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
            $("#title").html("Konjunktív V-K tábla");
        }
    }

    if(pic == 6){
        pic = 1;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
        $("#title").html("Dokumentum összeállítása sablon szerint");
    }
    else if(pic == 13){
        pic = 8;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
        $("#title").html("Logikai kapcsolás");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        $('#display').css('height', '450px');
        pic -= 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
            $("#title").html("Dokumentum összeállítása sablon szerint");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
            $("#title").html("Sablon fájl beolvasása");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $("#title").html("Dokumentum legenerálása");
            $('#display').css('height', '100px');
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
            $("#title").html("Sablon");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
            $("#title").html("Sablon generálása");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
            $("#title").html("Logikai kapcsolás");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
            $("#title").html("Logikai kapcsolás");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
            $("#title").html("Igazságtáblázat");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
            $("#title").html("Diszjunktív V-K tábla");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
            $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
            $("#title").html("Konjunktív V-K tábla");
        }
    }
    if(pic == 0){
        pic = 5;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
        $("#title").html("Sablon generálása");
    }
    else if(pic == 7){
        pic = 12;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
        $('#pPicture').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
        $("#title").html("Konjunktív V-K tábla");
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