
var apiKey = "7fe07d7f9fbb3d64ea28b8a1f59d2113";

var nameInputEl = document.querySelector(".form-control");
var cityList = document.querySelector(".city");
var searchBtnEl = document.querySelector(".searchBtn");
var searchCity = document.querySelector(".container1");
var cityNameEl = document.querySelector(".cityName");
var cityName = "";
var today = moment().format("MMM DD, YYYY");



var formSubmitHandler = function (event) {
    event.preventDefault();
  
    cityName = nameInputEl.value;
    console.log(cityName);
    if (cityName) {
      cityWeather(cityName);
      var buttonEl = document.createElement("button");
      buttonEl.classList.add("btn", "btn-secondary");
      buttonEl.setAttribute("style", "width: 100%; margin-top:5px;");
      buttonEl.textContent = cityName;
      cityList.appendChild(buttonEl);
    }

    };
  
  searchBtnEl.addEventListener('click', formSubmitHandler);


  var cityWeather = function (name) {
    var cityUrl = "https://api.openweathermap.org/data/2.5/weather?q="+name+"&units=metric&appid="+apiKey;
  
    fetch(cityUrl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            cityOnecall(data.coord.lat, data.coord.lon);
            cityName = data.name;
            cityNameEl.textContent = cityName +" ("+ today +")";
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      .catch(function (error) {
        alert('Unable to connect');
      });
  };

  function cityOnecall (lat, lon) {
    
    var oneCallurl = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&units=metric&appid="+apiKey;

    fetch(oneCallurl)
      .then(function (response) {
        if (response.ok) {
          console.log(response);
          response.json().then(function (data) {
            console.log(data);
            displayCurrent(data);
            displayForecast (data);

          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      
  };

  function displayCurrent (data) {

    var temp0el = document.querySelector(".temp0");
    temp0el.textContent = " "+data.current.temp+"\u2103";
    var wind0El = document.querySelector(".wind0");
    wind0El.textContent = " "+data.current.wind_speed+" mph";
    var humidity0El = document.querySelector(".humidity0");
    humidity0El.textContent = " "+data.current.humidity+" %";
    var uv0El = document.querySelector(".uv0");
    uv0El.textContent = " "+data.current.uvi;

    var icons = data.current.weather[0].main;
    console.log(icons);

    if (icons = "clouds") {

      var cloudy0 = document.querySelector(".icon0");
      cloudy0.textContent = "  "+"&#xf73b;";

    }
  };

  function displayForecast (data) {

    var day01 = document.querySelector(".day01");
    day01.textContent = moment().add(1, 'd').format("DD/MM/YY");
    var day02 = document.querySelector(".day02");
    day02.textContent = moment().add(2, 'd').format("DD/MM/YY");
    var day03 = document.querySelector(".day03");
    day03.textContent = moment().add(3, 'd').format("DD/MM/YY");
    var day04 = document.querySelector(".day04");
    day04.textContent = moment().add(4, 'd').format("DD/MM/YY");
    var day05 = document.querySelector(".day05");
    day05.textContent = moment().add(5, 'd').format("DD/MM/YY");


      var forecastTemp01 = data.daily[1].temp.day;
      var temp01 = document.querySelector(".temp01");
      temp01.textContent= " "+forecastTemp01+"\u2103";
      var forecastTemp02 = data.daily[2].temp.day;
      var temp02 = document.querySelector(".temp02");
      temp02.textContent= " "+forecastTemp02+"\u2103";
      var forecastTemp03 = data.daily[3].temp.day;
      var temp03 = document.querySelector(".temp03");
      temp03.textContent= " "+forecastTemp03+"\u2103";
      var forecastTemp04 = data.daily[4].temp.day;
      var temp04 = document.querySelector(".temp04");
      temp04.textContent= " "+forecastTemp04+"\u2103";
      var forecastTemp05 = data.daily[5].temp.day;
      var temp05 = document.querySelector(".temp05");
      temp05.textContent= " "+forecastTemp05+"\u2103";

      var forecastWind01 = data.daily[1].wind_speed;
      var wind01 = document.querySelector(".wind01");
      wind01.textContent= " "+forecastWind01+" mph";
      var forecastWind02 = data.daily[2].wind_speed;
      var wind02 = document.querySelector(".wind02");
      wind02.textContent= " "+forecastWind02+" mph";
      var forecastWind03 = data.daily[3].wind_speed;
      var wind03 = document.querySelector(".wind03");
      wind03.textContent= " "+forecastWind03+" mph";
      var forecastWind04 = data.daily[4].wind_speed;
      var wind04 = document.querySelector(".wind04");
      wind04.textContent= " "+forecastWind04+" mph";
      var forecastWind05 = data.daily[5].wind_speed;
      var wind05 = document.querySelector(".wind05");
      wind05.textContent= " "+forecastWind05+" mph";

      var forecastHumidity01 = data.daily[1].humidity;
      var humidity01 = document.querySelector(".humidity01");
      humidity01.textContent= " "+forecastHumidity01+" %";
      var forecastHumidity02 = data.daily[2].humidity;
      var humidity02 = document.querySelector(".humidity02");
      humidity02.textContent= " "+forecastHumidity02+" %";
      var forecastHumidity03 = data.daily[3].humidity;
      var humidity03 = document.querySelector(".humidity03");
      humidity03.textContent= " "+forecastHumidity03+" %";
      var forecastHumidity04 = data.daily[4].humidity;
      var humidity04 = document.querySelector(".humidity04");
      humidity04.textContent= " "+forecastHumidity04+" %";
      var forecastHumidity05 = data.daily[5].humidity;
      var humidity05 = document.querySelector(".humidity05");
      humidity05.textContent= " "+forecastHumidity05+" %";

      var forecastUv01 = data.daily[1].uvi;
      var uv01 = document.querySelector(".uv01");
      uv01.textContent= " "+forecastUv01;
      var forecastUv02 = data.daily[2].uvi;
      var uv02 = document.querySelector(".uv02");
      uv02.textContent= " "+forecastUv02;
      var forecastUv03 = data.daily[3].uvi;
      var uv03 = document.querySelector(".uv03");
      uv03.textContent= " "+forecastUv03;
      var forecastUv04 = data.daily[4].uvi;
      var uv04 = document.querySelector(".uv04");
      uv04.textContent= " "+forecastUv04;
      var forecastUv05 = data.daily[5].uvi;
      var uv05 = document.querySelector(".uv05");
      uv05.textContent= " "+forecastUv05;

  };
