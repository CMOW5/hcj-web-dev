$(document).ready(function () { 
    
    $("#carouselExampleIndicators").carousel( { interval: 2000 } );    

    $("#carousel-button").click(function(){
    
        if ($("#carousel-button").children("span").hasClass('fa-pause')) {
            $("#carouselExampleIndicators").carousel('pause');
            $("#carousel-button").children("span").removeClass('fa-pause');
            $("#carousel-button").children("span").addClass('fa-play');
        }
        else if ($("#carousel-button").children("span").hasClass('fa-play')){
            $("#carouselExampleIndicators").carousel('cycle');
            $("#carousel-button").children("span").removeClass('fa-play');
            $("#carousel-button").children("span").addClass('fa-pause');                    
        }
    });
});