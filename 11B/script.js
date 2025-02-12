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
    $('#prog').css('color', 'darkred');
    $('#dig').css('color', 'black');
});

$('#dig').click(function(){
    pageStatus = 2;
    pic = 8;
    $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
    $('#dig').css('color', 'darkred');
    $('#prog').css('color', 'black');
});


$('#right').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        $('#display').css('height', '450px');
        pic += 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
        }
    }
    else if(pageStatus === 2){
        pic += 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
        }
    }

    if(pic == 6){
        pic = 1;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
    }
    else if(pic == 13){
        pic = 8;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
    }
});




$('#left').click(function(){
    if(pageStatus === 1){
        console.log(pageStatus);
        $('#display').css('height', '450px');
        pic -= 1;
        if(pic == 1){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/addingContent.png");
        }
        else if(pic == 2){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/readingTemplate.png");
        }
        else if(pic == 3){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/savingDocument.png");
            $('#display').css('height', '100px');
        }
        else if(pic == 4){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/template.png");
        }
        else if(pic == 5){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
        }
    }
    else if(pageStatus === 2){
        pic -= 1;
        if(pic == 8){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/AND circuit.png");
        }
        else if(pic == 9){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/OR circuit.png");
        }
        else if(pic == 10){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/truthTable.png");
        }
        else if(pic == 11){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKdiszjunktív.png");
        }
        else if(pic == 12){
            $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
        }
    }
    if(pic == 0){
        pic = 5;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Programozás alapjai/templateGenerator.png");
    }
    else if(pic == 7){
        pic = 12;
        $('#pic').attr("src", "../Képek/11.évfolyam/B/Digitális áramkörök/VKKonjunktív.png");
    }
});
//Back button
$('#back').click(function(){
    $('#transition').animate({"height": "100vh"}, 1000);
    setTimeout(function(){
        window.location.replace('../index.html');
    }, 1000)
});