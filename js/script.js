/* global $ */



$('button').click(function(){
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?zip=94040,us",
        method:"GET",
        success:function(response){
            console.log("ok")
        }
    })

});
