const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=23de405f76e68e6b19eadc81d309a3ab";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    //Temperature
    var temp = jsObject.main.temp;
    document.getElementById("temp").textContent = temp;

    //Humidity
    document.getElementById("humidity").textContent = jsObject.main.humidity;

    //Sky Visibility
    document.getElementById("current").textContent = jsObject.weather[0].main;

    //Weather Icon Imgsrc
    const imagesrc =
      "https://openweathermap.org/img/w/" + jsObject.weather[0].icon + ".png";
    const desc = jsObject.weather[0].description;
    //Weather Icon
    document.getElementById("icon").setAttribute("src", imagesrc);
    document.getElementById("icon").setAttribute("alt", desc);

    //Wind Speed
    var windSpeed = jsObject.wind.speed;
    document.getElementById("Speed").textContent = windSpeed;
    //Wind Chill
    document.getElementById("Chill").textContent = (
      35.74 +
      0.6215 * temp -
      35.75 * windSpeed ** 0.16 +
      0.4275 * temp * windSpeed ** 0.16
    ).toFixed(2);
  });
