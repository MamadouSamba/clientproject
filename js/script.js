/* global $ */



$('button').click(function(){
    var UserInput=$("input").val();
    var searchInput="http://api.openweathermap.org/data/2.5/weather?q=" + UserInput + "&APPID=3bb00f30e525b91a1deb9cbd20254379"
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q=" + UserInput + "&APPID=3bb00f30e525b91a1deb9cbd20254379",
        method:"GET",
        success:function(response){
            console.log(response.weather[0])
        }
    })

});
