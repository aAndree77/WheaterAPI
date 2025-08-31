async function getWheater() {
  const API_KEY = "b4b41f6fb627970b336732c67e95fa82";
  const city = document.querySelector("#city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;

  try {
    let response = await fetch(url);
    let data = await response.json();

    if (data.cod === "404") {
      document.querySelector("#rez-container").style.visibility = "hidden";
      window.alert("❌ Orașul nu a fost găsit!");
      return;
    }

    const weatherImages = {
      Drizzle: "images/drizzle.png",
      Clear: "images/clear.png",
      Clouds: "images/clouds.png",
      Rain: "images/rain.png",
      Snow: "images/snow.png",
      Mist: "images/mist.png"
    };
    const rez = document.querySelector("#rez-container").style.visibility = "visible";
    document.querySelector("#city-name").textContent = `${data.name}, ${data.sys.country}`;
    document.querySelector("#temp").textContent = `${Math.round(data.main.temp)}°C`;
    document.querySelector("#humidity").textContent = `${data.main.humidity}%`;
    document.querySelector("#wind").textContent = `${data.wind.speed} m/s`;

    let weatherMain = data.weather[0].main;
    document.querySelector("#wheater-icon").src =
      weatherImages[weatherMain] || "images/clouds.png";
  } catch (error) {
    console.error("Eroare:", error);
    document.querySelector("#rez-container").style.display = "none";
    alert("⚠️ Nu s-au putut prelua datele!");
  }
}
