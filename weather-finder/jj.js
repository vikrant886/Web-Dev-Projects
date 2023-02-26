const input = document.getElementById("in");
const button = document.getElementById("butt");
const container = document.querySelector(".container");
const error = document.getElementById("error");
const weatherBox = document.querySelector('.weather-box');
const result = document.querySelector(".result");
input.addEventListener('click', () => {
    input.value = "";
    container.style.height = '100px';
})
button.addEventListener('click', () => {
    get_data();
})
input.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        get_data();
    }
});
input.addEventListener('blur', function() {
    input.value = 'enter the location';
});

function get_data() {
    const key = '48e3cd1f1a4adec4dff1336663a2882e';
    const city = document.getElementById('in').value;
    console.log(city);
    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
        .then(response => response.json())
        .then(json => {
            if (json.cod === '404') {
                container.style.height = '400px';
                result.style.display = 'none';
                weatherBox.style.display = 'none';
                error.style.display = 'block';
                error.classList.add('fadeIn');
                // error.style.opacity = '1';
                return;
            }

            error.style.display = 'none';
            error.classList.remove('fadeIn');

            const image = document.querySelector('.weather-box img');
            const temperature = document.querySelector('.weather-box .temperature');
            const description = document.querySelector('.weather-box .description');
            const humidity = document.querySelector('.result .hu span');
            const wind = document.querySelector('.result .wind span');

            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;

                case 'Rain':
                    image.src = 'images/rain.png';
                    break;

                case 'Snow':
                    image.src = 'images/snow.png';
                    break;

                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;

                case 'Haze':
                    image.src = 'images/mist.png';
                    break;

                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
            description.innerHTML = `${json.weather[0].description}`;
            humidity.innerHTML = `${json.main.humidity}%`;
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

            weatherBox.style.display = '';
            result.style.display = '';
            weatherBox.classList.add('fadeIn');
            result.classList.add('fadeIn');
            container.style.height = '400px';


        });

}