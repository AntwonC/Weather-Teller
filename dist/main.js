/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/apiKey.js":
/*!***********************!*\
  !*** ./src/apiKey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAPIKey\": () => (/* binding */ getAPIKey),\n/* harmony export */   \"getGIFAPIKey\": () => (/* binding */ getGIFAPIKey)\n/* harmony export */ });\nconst getAPIKey = () => 'a0815c034612ab693b623d5a0c6586b3';\nconst getGIFAPIKey = () => '7eUru3QcnhZ1ErGs0FPbLlFUwLzTEhIV&s';\n\n\n\n//# sourceURL=webpack:///./src/apiKey.js?");

/***/ }),

/***/ "./src/moduleFunctions.js":
/*!********************************!*\
  !*** ./src/moduleFunctions.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners),\n/* harmony export */   \"getWeatherData\": () => (/* binding */ getWeatherData),\n/* harmony export */   \"pageSetup\": () => (/* binding */ pageSetup)\n/* harmony export */ });\n/* harmony import */ var _apiKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiKey.js */ \"./src/apiKey.js\");\n// eslint-disable-next-line import/extensions\n\n\nconst pageSetup = () => {\n  const contentContainer = document.querySelector('#content');\n  const bodyContainer = document.querySelector('#body-content');\n\n  // Page Contents\n  const setUpContainer = document.createElement('div');\n  const headerTitle = document.createElement('h1');\n  const locationInput = document.createElement('input');\n  const submitButton = document.createElement('button');\n  const errorDiv = document.createElement('div');\n  const weatherDiv = document.createElement('div');\n  const weatherGIF = document.createElement('img');\n\n  // Grid Setup\n  const headerContainer = document.createElement('div');\n  headerContainer.style.gridArea = 'header';\n\n  const mainContainer = document.createElement('div');\n  mainContainer.style.gridArea = 'main';\n\n  const footerContainer = document.createElement('div');\n  footerContainer.style.gridArea = 'footer';\n\n  bodyContainer.style.margin = '0 0 0 0';\n  setUpContainer.style.display = 'grid';\n  setUpContainer.style.gridTemplateColumns = '25% 50% 0% 25%';\n  setUpContainer.style.gridTemplateRows = '10% 30% 30% 30%';\n  // eslint-disable-next-line no-multi-str\n  setUpContainer.style.gridTemplateAreas = '\"header header header header\"\\\n                                         \"main main main main\"\\\n                                         \"main main main main\"\\\n                                         \"footer footer footer footer';\n  setUpContainer.style.backgroundColor = 'teal';\n  setUpContainer.style.height = '972px';\n  // Grid Setup\n  headerTitle.setAttribute('id', 'app-title');\n  headerTitle.style.fontSize = '60px';\n  headerTitle.style.gridColumn = '2 / 3';\n  headerTitle.style.gridRow = '1 / 2';\n  headerTitle.style.justifySelf = 'center';\n  headerTitle.textContent = 'Weather Teller';\n\n  locationInput.setAttribute('id', 'input-location');\n  locationInput.placeholder = 'Enter a location here';\n  locationInput.style.width = '200px';\n  locationInput.style.height = '30px';\n  locationInput.style.marginTop = '100px';\n  locationInput.style.justifySelf = 'center';\n  locationInput.style.gridColumn = '2 / 3';\n  locationInput.style.gridRow = '2 / 3';\n\n  submitButton.setAttribute('id', 'submit');\n  submitButton.textContent = 'Find the weather!';\n  submitButton.style.width = '100px';\n  submitButton.style.height = '40px';\n  submitButton.style.gridColumn = '2 / 3';\n  submitButton.style.gridRow = '2 / 3';\n  submitButton.style.justifySelf = 'center';\n  submitButton.style.marginTop = '160px';\n\n  errorDiv.setAttribute('id', 'error-input');\n  errorDiv.style.gridColumn = '2 / 3';\n  errorDiv.style.gridRow = '2 / 3';\n  errorDiv.style.justifySelf = 'center';\n  errorDiv.style.height = '30px';\n  errorDiv.style.marginTop = '15px';\n  errorDiv.style.fontSize = '50px';\n  errorDiv.style.color = 'red';\n  errorDiv.style.fontWeight = 'bold';\n  errorDiv.style.display = 'none';\n\n  weatherDiv.setAttribute('id', 'weather');\n  weatherDiv.style.fontSize = '50px';\n  weatherDiv.style.display = 'none';\n  weatherDiv.style.gridRow = '3 / 4';\n  weatherDiv.style.gridColumn = '2 / 3';\n\n  weatherGIF.setAttribute('id', 'weather-gif');\n  weatherGIF.style.gridRow = '3 / 4';\n  weatherGIF.style.gridColumn = '2 / 3';\n  weatherGIF.style.display = 'none';\n  weatherGIF.style.height = '200px';\n  weatherGIF.style.marginTop = '200px';\n  weatherGIF.style.justifySelf = 'center';\n\n  setUpContainer.appendChild(headerTitle);\n  setUpContainer.appendChild(errorDiv);\n  setUpContainer.appendChild(locationInput);\n  setUpContainer.appendChild(submitButton);\n  setUpContainer.appendChild(weatherDiv);\n  setUpContainer.appendChild(weatherGIF);\n  // Page Contents\n  contentContainer.appendChild(setUpContainer);\n};\n\nconst getWeatherGIF = async (weather) => {\n  const weatherGIF = document.querySelector('#weather-gif');\n  const errorDiv = document.querySelector('#error-input');\n  try {\n    const response = await fetch(`http://api.giphy.com/v1/gifs/translate?api_key=${(0,_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.getGIFAPIKey)()}=${weather}`, { mode: 'cors' });\n    const gifData = await response.json();\n\n    weatherGIF.src = gifData.data.images.original.url;\n\n    weatherGIF.style.display = 'block';\n  } catch (err) {\n    errorDiv.textContent = 'Could not find the gif!';\n    errorDiv.style.display = 'none';\n  }\n};\nconst getWeatherData = async (location) => {\n  const errorDiv = document.querySelector('#error-input');\n  const weatherDiv = document.querySelector('#weather');\n\n  try {\n    if (location.textContent.length === 0) {\n      throw new Error('EmptyInputError');\n    }\n\n    const weatherResponse = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location.textContent}&appid=${(0,_apiKey_js__WEBPACK_IMPORTED_MODULE_0__.getAPIKey)()}`);\n\n    if (weatherResponse.status === 404) {\n      throw new Error('LocationNotFoundError');\n    }\n\n    const locationJSON = await weatherResponse.json();\n    const feelsLikeTemp = parseInt(locationJSON.main.feels_like, 10);\n    // eslint-disable-next-line no-mixed-operators\n    const tempInF = (feelsLikeTemp - 273.15) * 9 / 5 + 32;\n    const tempInC = (feelsLikeTemp - 273.15);\n\n    weatherDiv.textContent = `Current weather in ${location.textContent}: ${locationJSON.weather[0].description}\\n\n                              Temperature: ${tempInF.toFixed()}F (${tempInC.toFixed()}C)\\n\n                              Wind Speed: ${locationJSON.wind.speed.toFixed()}mph`;\n    weatherDiv.style.display = 'block';\n\n    errorDiv.style.display = 'none';\n    getWeatherGIF(`${locationJSON.weather[0].description} weather`);\n\n    // console.log(locationJSON);\n  } catch (err) {\n    if (err.message.localeCompare('EmptyInputError') === 0) {\n      errorDiv.textContent = 'Input cannot be empty!';\n      errorDiv.style.display = 'block';\n    } else if (err.message.localeCompare('LocationNotFoundError') === 0) {\n      errorDiv.textContent = 'Your location cannot be found. Try again.';\n      errorDiv.style.display = 'block';\n    }\n  }\n};\n\nconst inputHandler = (evt, inputElement) => {\n  // eslint-disable-next-line no-param-reassign\n  inputElement.textContent = evt.target.value;\n};\n\nconst addListeners = () => {\n  const locationInput = document.querySelector('#input-location');\n  const submitButton = document.querySelector('#submit');\n\n  // eslint-disable-next-line prefer-arrow-callback\n  locationInput.addEventListener('input', (evt) => {\n    inputHandler(evt, locationInput);\n  });\n\n  submitButton.addEventListener('click', () => {\n    getWeatherData(locationInput);\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/moduleFunctions.js?");

/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moduleFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleFunctions.js */ \"./src/moduleFunctions.js\");\n// eslint-disable-next-line import/extensions\n\n\n(0,_moduleFunctions_js__WEBPACK_IMPORTED_MODULE_0__.pageSetup)();\n(0,_moduleFunctions_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)();\n\nconsole.log('You set this up properly!');\n\n\n//# sourceURL=webpack:///./src/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/script.js");
/******/ 	
/******/ })()
;