async function getWheater() {
  const API_KEY = "b4b41f6fb627970b336732c67e95fa82";
  const city = document.querySelector("#city").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ro`;

  let response = await fetch(url);
  let data = await response.json();
  try {

    if (data.cod === "404") {
      document.querySelector("#rez").innerHTML = `<p>❌ Orașul nu a fost găsit.</p>`;
      return;
    }
    document.querySelector("#rez").innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>🌡️ Temperatură: ${data.main.temp}°C</p>
      <p>☁️ Vreme: ${data.weather[0].description}</p>
      <p>💧 Umiditate: ${data.main.humidity}%</p>
      <p>💨 Vânt: ${data.wind.speed} m/s</p>
    `;
  } catch {
  }
}


