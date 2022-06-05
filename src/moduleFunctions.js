const pageSetup = () => {
  const contentContainer = document.querySelector('#content');
  const bodyContainer = document.querySelector('#body-content');

  // Page Contents
  const setUpContainer = document.createElement('div');
  const headerTitle = document.createElement('h1');
  const locationInput = document.createElement('input');

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

  locationInput.placeholder = 'Enter a location here';
  locationInput.style.width = '200px';
  locationInput.style.height = '30px';
  locationInput.style.marginTop = '30px';
  locationInput.style.justifySelf = 'center';
  locationInput.style.gridColumn = '2 / 3';
  locationInput.style.gridRow = '2 / 3';

  setUpContainer.appendChild(headerTitle);
  setUpContainer.appendChild(locationInput);
  // Page Contents
  contentContainer.appendChild(setUpContainer);
};

export default pageSetup;
