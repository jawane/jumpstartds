window.onload = function(){

  cityInput.addEventListener('keydown', function(e){
    if (e.keyCode === 13) {
      makeRequest();
    }
  })

  button.addEventListener('click', makeRequest);

  function makeRequest() {
    var weathermain = document.getElementById('weathermain')
    var weatherdescription = document.getElementById('weatherdescription')
    var weathertemperature = document.getElementById('weathertemperature')
    var weatherhumidity = document.getElementById('weatherhumidity')
    var weatherimage = document.getElementById('image')
    var button = document.getElementById('button')
    var title = document.getElementById('title')
    var inputcontainer = document.getElementById('inputcontainer')
    var cityInput = document.getElementById('cityInput')

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=" +cityInput.value +"&APPID=81ffe2a8be9b2f5182d4dda75d4a7b23", true);
  xhr.onload = function (e){
    if(xhr.readyState === 4){
      if(xhr.status === 200){

        var data = JSON.parse(xhr.responseText);
        // weathermain.innerHTML = data.weather[0].main
        weatherdescription.innerHTML = "Description - " + data.weather[0].description
        weathertemperature.innerHTML = "Temperature - " + (data.main.temp -273.15).toFixed() +"°C"
        weatherhumidity.innerHTML = "Humidity - " + data.main.humidity +"%"

        if (data.weather[0].main === "Clear"){
          weatherimage.src="../../assets/images/clear.png"
        }
        if (data.weather[0].main === "Clouds"){
          weatherimage.src="../../assets/images/clouds.png"
        }
        if (data.weather[0].main === "Cloudy"){
          weatherimage.src="../../assets/images/cloudy.png"
        }
        if (data.weather[0].main === "Moon"){
          weatherimage.src="../../assets/images/moon.png"
        }
        if (data.weather[0].main === "Rain"){
          weatherimage.src="../../assets/images/rain.png"
        }
        if (data.weather[0].main === "Smoke"){
          weatherimage.src="../../assets/images/smoke.png"
        }
        if (data.weather[0].main === "Snowflake"){
          weatherimage.src="../../assets/images/snowflake.png"
        }
        if (data.weather[0].main === "Storm"){
          weatherimage.src="../../assets/images/storm.png"
        }

      } else {
        console.error(xhr.statusText)
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null)
}
