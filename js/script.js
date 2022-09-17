const API_KEY = `4acb24ed25b578abe9ce6bc21ee5193f`;

const loadTemp = (city) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemp(data))
}



const displayTemp = (data) => {
    console.log(data);
    const temperature = document.getElementById('temperature');
    temperature.innerText = data.main.temp;
    document.getElementById('atmosphere').innerText = data.weather[0].description;
    document.getElementById('wind').innerText = data.wind.speed;
    document.getElementById('max').innerText = data.main.temp_max;
    document.getElementById('min').innerText = data.main.temp_min;
    console.log(data.wind.speed);

}



// loadTemp('dhaka');

document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemp(city);
    
})