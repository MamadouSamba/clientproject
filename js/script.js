/* global $ */



$('button').click(function(){
    var UserInput=$("input").val();
    var searchInput="http://api.openweathermap.org/data/2.5/weather?q=" + UserInput + "&APPID=3bb00f30e525b91a1deb9cbd20254379"
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q=" + UserInput + "&APPID=3bb00f30e525b91a1deb9cbd20254379",
        method:"GET",
        success:function(response){
            var weather=response.weather[0].description;
            console.log(weather);
            var precipitate=$("input").val();
            $("#solar").html(precipitate);
            $(".storm").html(weather);
            if (weather.includes("sun") || weather.includes("clear")) {
                $("body").css("background-image", "url('https://media.apnarm.net.au/media/images/2017/08/11/b88916986z1_20170811171219_000guro78c72-0-1nzfq5wlk7v5k9idqo2_ct677x380.jpg ')");
            } else {
                $("body").css("background-image", "url('https://www.cbc.ca/doczone/content/images/episodes/waethergonewiild_1280.jpg')");
            }
            if (weather.includes("snow")){
                $("body").css("background-image", "url('https://media.graytvinc.com/images/810*453/Snow431.JPG')");
            } else {
                $("body").css("background-image", "url('https://marketplace.canva.com/MAB-lSDUHIk/1/thumbnail_large/canva-blue-clear-sky-abstract-with-copyspace-MAB-lSDUHIk.jpg')");
            }
            
            

            
        }
    })
});
