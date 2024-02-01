const apiKey = "88942eb905da0ee4b6a8ea9e1852d1d0"; // Replace with your OpenWeatherMap API key

async function getWeather() {
  const city = document.getElementById("city").value;
  if (!city) {
    alert("Please enter a city.");
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      displayWeather(data);
    } else {
      alert(`Error: ${data.message}`);
    }
  } catch (error) {
    console.error("Error fetching weather data:", error);
    alert("Error fetching weather data. Please try again.");
  }
}

function displayWeather(data) {
  const weatherInfo = document.getElementById("weather-info");
  const { name, main, weather } = data;

  weatherInfo.innerHTML = `
    <div class="weather-card">
      <h2>${name}</h2>
      <p>Temperature: ${main.temp} &deg;C</p>
      <p>Weather: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    </div>
        `;
}
