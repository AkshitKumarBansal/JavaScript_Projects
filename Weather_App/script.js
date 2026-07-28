const apiKey = "db98c9c79d357e915a2cd757a9bf3fe8"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector("#city-name");
const temp = document.querySelector("#temperature");
const detail = document.querySelector("#description");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const searchInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search-btn");
const errorText = document.querySelector("#error-text");

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        checkWeather(searchInput.value);
    }
});

searchBtn.addEventListener("click", () => {
  checkWeather(searchInput.value);
});

async function checkWeather(city) {
  if (city.trim() === "") return;

  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  
  if (response.status === 404) {
    errorText.style.display = "block";
  } else {
    try {
      const data = await response.json();      
      errorText.style.display = "none"; 
      
      cityName.textContent = data.name;
      temp.textContent = data.main.temp;
      detail.textContent = data.weather[0].description;
      humidity.textContent = data.main.humidity;
      wind.textContent = data.wind.speed;
    } catch(err) {
      console.log("Error" + err);
    }
  }
}