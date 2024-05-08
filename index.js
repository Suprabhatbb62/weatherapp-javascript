function updateWeather(city) {
    const temparature = document.getElementById("temparature");
    const humidity = document.getElementById("humidity");
    const condition = document.getElementById("condition");
    const currentcity = document.getElementById("currentcity");

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f03b498c8723648ae0cd0f81dd23da52`;

    fetch(url).then((response) => response.json()).then((data) => {
        temparature.innerHTML = `Temparature: ${data.main.temp}`;
        humidity.innerHTML = `Humidity: ${data.main.humidity}`;
        condition.innerHTML = `Condition: ${data.weather[0].main}`;
        currentcity.innerHTML = `Current City: ${data.name}`;
    })
}

function handleForm(event){
    event.preventDefault();
    const inputcity=document.getElementById("inputcity");
    const cityname=inputcity.value.trim(); //extract
    updateWeather(cityname);
}
const formdata=document.getElementById("formData");
formdata.addEventListener("submit", handleForm);
updateWeather("kolkata");