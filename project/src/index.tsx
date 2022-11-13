import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/app';
import { CITIES_LENGTH } from './const';
import { generateCities } from './mocks/cities';
import { generateImages } from './mocks/images';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const cities = generateCities({ length: CITIES_LENGTH });
const images = generateImages(cities);
export const CitiesContext = React.createContext(cities);
export const ImagesContext = React.createContext(images);

root.render(
  <React.StrictMode>
    <CitiesContext.Provider value={cities}>
      <ImagesContext.Provider value={images}>
        <App />
      </ImagesContext.Provider>
    </CitiesContext.Provider>
  </React.StrictMode>,
);
