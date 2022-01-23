
var apiKey = "7fe07d7f9fbb3d64ea28b8a1f59d2113";

var nameInputEl = document.querySelector(".form-control");
var cityList = document.querySelector(".city");
var searchBtnEl = document.querySelector(".searchBtn");
var searchCity = document.querySelector(".container1");
var cityName = "";


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
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      })
      
  };
