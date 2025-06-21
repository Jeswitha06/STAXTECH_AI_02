const apiKey = 'your_api_key_here'; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById('cityInput').value;
  const result = document.getElementById('weatherResult');

  if (!city) {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === "404") {
        result.innerHTML = "City not found!";
      } else {
        result.innerHTML = `
          <h3>${data.name}, ${data.sys.country}</h3>
          <p>Temperature: ${data.main.temp} °C</p>
          <p>Weather: ${data.weather[0].description}</p>
        `;
      }
    })
    .catch(() => {
      result.innerHTML = "Error fetching weather data.";
    });
}
