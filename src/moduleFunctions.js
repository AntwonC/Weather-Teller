// eslint-disable-next-line import/extensions
import getAPIKey from './apiKey.js';

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

  setUpContainer.appendChild(headerTitle);
  setUpContainer.appendChild(errorDiv);
  setUpContainer.appendChild(locationInput);
  setUpContainer.appendChild(submitButton);
  setUpContainer.appendChild(weatherDiv);
  // Page Contents
  contentContainer.appendChild(setUpContainer);
};

const getWeatherData = async (location) => {
  const errorDiv = document.querySelector('#error-input');
  const weatherDiv = document.querySelector('#weather');

  try {
    if (location.textContent.length === 0) {
      console.log('In location');
      throw new Error('EmptyInputError');
    }

    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.textContent}&appid=${getAPIKey()}`);

    console.log(weatherResponse.status);
    if (weatherResponse.status === 404) {
      throw new Error('LocationNotFoundError');
    }

    const locationJSON = await weatherResponse.json();

    weatherDiv.textContent = locationJSON.weather[0].description;

    console.log(locationJSON.weather[0].description);

    // console.log(locationJSON);
  } catch (err) {
    console.log(err.message);

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
