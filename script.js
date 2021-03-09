var cityname = 'San Antonio'
var apikey = '0a8f83f6f6204d9c8b6d8ba200098850'

var url =`https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}0a8f83f6f6204d9c8b6d8ba200098850`

fetch(url)

    .then(function (response) {
        if (!response.ok){
            throw response.json();
        }
        return response.json();
    }).then (function (response){
        var lon = response.coord.lon;
        var lat = response.coord.lat;
        console.log(lon)
        console.log(response)
        //current weather promise


    var url2 = 'https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,hourly,alerts,minuetly&appid=0a8f83f6f6204d9c8b6d8ba200098850'

    fetch(url2)
        .then(function (response) {
            if(!response.ok){
                throw response.json();
            }
            return response.json();
        })
        .then(function (response){
            console.log(response)
        })
    })

    //make a api that is called and displays the current weather
    // shows the forcast for the week and is updated
    //