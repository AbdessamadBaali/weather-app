
 let weather = {
    "apikey": "2102c0fe58b4244fb08ae4019aef5603",

    fetchWeather: function (city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid=" 
        + this.apikey
        ).then( (response) => response.json() )
        .then( (data) => this.displayWeather(data) );
    },
    // method for display information city of weather 
    displayWeather : function(data) {
        const  {name} = data;
        const  {icon, description} = data.weather[0];
        const  {temp, humidity} = data.main;
        const  {speed} = data.wind;

        // inner inforamtion in screen
        document.querySelector(".city").textContent = 'weather in ' + name
        document.querySelector(".icon").src = 'https://openweathermap.org/img/wn/'+  icon + ".png"
        document.querySelector(".temp").textContent = temp + "°C"
        document.querySelector(".description").textContent =  description
        document.querySelector(".humidity").textContent = 'humidity: ' + humidity+"%"
        document.querySelector(".wind").textContent = 'wind speed: ' + speed + " km/h"

        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/user/erondu/1600x900/?" + name + "')"
    },

    // serach city
    serach : function () {
        this.fetchWeather(inputSearch.value)
    }
};

let btnEl = document.querySelector("#btn")
let inputSearch = document.querySelector(".search-bar")
btnEl.addEventListener("click", () => weather.serach());

btnEl.addEventListener("keyup", (e) => e.key == "Enter" ? weather.serach() : console.log("not a enter"));
inputSearch.addEventListener("keyup", (e) => e.key == "Enter" ? weather.serach() : console.log("not a enter"));

weather.fetchWeather("azrou")

 