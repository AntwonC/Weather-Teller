// eslint-disable-next-line import/extensions
import { getAPIKey, getGIFAPIKey } from './apiKey.js';

const pageSetup = () => {
  const contentContainer = document.querySelector('#content');
  const bodyContainer = document.querySelector('#body-content');

  // Page Contents
  const setUpContainer = document.createElement('div');
  const headerTitle = document.createElement('h1');
  const locationInput = document.createElement('input');
  const submitButton = document.createElement('button');
  const errorDiv = document.createElement('div');
  const weatherDiv = document.createElement('div');
  const weatherGIF = document.createElement('img');

  // Grid Setup
  const headerContainer = document.createElement('div');
  headerContainer.style.gridArea = 'header';

  const mainContainer = document.createElement('div');
  mainContainer.style.gridArea = 'main';

  const footerContainer = document.createElement('div');
  footerContainer.style.gridArea = 'footer';

  bodyContainer.style.margin = '0 0 0 0';
  setUpContainer.style.display = 'grid';
  setUpContainer.style.gridTemplateColumns = '25% 50% 0% 25%';
  setUpContainer.style.gridTemplateRows = '10% 30% 30% 30%';
  // eslint-disable-next-line no-multi-str
  setUpContainer.style.gridTemplateAreas = '"header header header header"\
                                         "main main main main"\
                                         "main main main main"\
                                         "footer footer footer footer';
  setUpContainer.style.backgroundColor = 'teal';
  setUpContainer.style.height = '972px';
  // Grid Setup
  headerTitle.setAttribute('id', 'app-title');
  headerTitle.style.fontSize = '60px';
  headerTitle.style.gridColumn = '2 / 3';
  headerTitle.style.gridRow = '1 / 2';
  headerTitle.style.justifySelf = 'center';
  headerTitle.textContent = 'Weather Teller';

  locationInput.setAttribute('id', 'input-location');
  locationInput.placeholder = 'Enter a location here';
  locationInput.style.width = '200px';
  locationInput.style.height = '30px';
  locationInput.style.marginTop = '100px';
  locationInput.style.justifySelf = 'center';
  locationInput.style.gridColumn = '2 / 3';
  locationInput.style.gridRow = '2 / 3';

  submitButton.setAttribute('id', 'submit');
  submitButton.textContent = 'Find the weather!';
  submitButton.style.width = '100px';
  submitButton.style.height = '40px';
  submitButton.style.gridColumn = '2 / 3';
  submitButton.style.gridRow = '2 / 3';
  submitButton.style.justifySelf = 'center';
  submitButton.style.marginTop = '160px';

  errorDiv.setAttribute('id', 'error-input');
  errorDiv.style.gridColumn = '2 / 3';
  errorDiv.style.gridRow = '2 / 3';
  errorDiv.style.justifySelf = 'center';
  errorDiv.style.height = '30px';
  errorDiv.style.marginTop = '15px';
  errorDiv.style.fontSize = '50px';
  errorDiv.style.color = 'red';
  errorDiv.style.fontWeight = 'bold';
  errorDiv.style.display = 'none';

  weatherDiv.setAttribute('id', 'weather');
  weatherDiv.style.fontSize = '50px';
  weatherDiv.style.display = 'none';
  weatherDiv.style.gridRow = '3 / 4';
  weatherDiv.style.gridColumn = '2 / 3';

  weatherGIF.setAttribute('id', 'weather-gif');
  weatherGIF.style.gridRow = '3 / 4';
  weatherGIF.style.gridColumn = '2 / 3';
  weatherGIF.style.display = 'none';
  weatherGIF.style.height = '200px';
  weatherGIF.style.marginTop = '200px';
  weatherGIF.style.justifySelf = 'center';

  setUpContainer.appendChild(headerTitle);
  setUpContainer.appendChild(errorDiv);
  setUpContainer.appendChild(locationInput);
  setUpContainer.appendChild(submitButton);
  setUpContainer.appendChild(weatherDiv);
  setUpContainer.appendChild(weatherGIF);
  // Page Contents
  contentContainer.appendChild(setUpContainer);
};

const getWeatherGIF = async (weather) => {
  const weatherGIF = document.querySelector('#weather-gif');
  const errorDiv = document.querySelector('#error-input');
  try {
    const response = await fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${getGIFAPIKey()}=${weather}`, { mode: 'cors' });
    const gifData = await response.json();

    weatherGIF.src = gifData.data.images.original.url;

    weatherGIF.style.display = 'block';
  } catch (err) {
    errorDiv.textContent = 'Could not find the gif!';
    errorDiv.style.display = 'none';
  }
};
const getWeatherData = async (location) => {
  const errorDiv = document.querySelector('#error-input');
  const weatherDiv = document.querySelector('#weather');

  try {
    if (location.textContent.length === 0) {
      throw new Error('EmptyInputError');
    }

    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.textContent}&appid=${getAPIKey()}`);

    if (weatherResponse.status === 404) {
      throw new Error('LocationNotFoundError');
    }

    const locationJSON = await weatherResponse.json();
    const feelsLikeTemp = parseInt(locationJSON.main.feels_like, 10);
    // eslint-disable-next-line no-mixed-operators
    const tempInF = (feelsLikeTemp - 273.15) * 9 / 5 + 32;
    const tempInC = (feelsLikeTemp - 273.15);

    weatherDiv.textContent = `Current weather in ${location.textContent}: ${locationJSON.weather[0].description}\n
                              Temperature: ${tempInF.toFixed()}F (${tempInC.toFixed()}C)\n
                              Wind Speed: ${locationJSON.wind.speed.toFixed()}mph`;
    weatherDiv.style.display = 'block';

    errorDiv.style.display = 'none';
    getWeatherGIF(`${locationJSON.weather[0].description} weather`);

    // console.log(locationJSON);
  } catch (err) {
    if (err.message.localeCompare('EmptyInputError') === 0) {
      errorDiv.textContent = 'Input cannot be empty!';
      errorDiv.style.display = 'block';
    } else if (err.message.localeCompare('LocationNotFoundError') === 0) {
      errorDiv.textContent = 'Your location cannot be found. Try again.';
      errorDiv.style.display = 'block';
    }
  }
};

const inputHandler = (evt, inputElement) => {
  // eslint-disable-next-line no-param-reassign
  inputElement.textContent = evt.target.value;
};

const addListeners = () => {
  const locationInput = document.querySelector('#input-location');
  const submitButton = document.querySelector('#submit');

  // eslint-disable-next-line prefer-arrow-callback
  locationInput.addEventListener('input', (evt) => {
    inputHandler(evt, locationInput);
  });

  submitButton.addEventListener('click', () => {
    getWeatherData(locationInput);
  });
};
export { pageSetup, getWeatherData, addListeners };
