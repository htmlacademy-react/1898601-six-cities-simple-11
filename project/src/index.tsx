import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/app';
import { CITIES_LENGTH } from './const';
import { generateCities } from './mocks/cities';
import { IMAGES } from './mocks/images';
import { REVIEWS } from './mocks/reviews';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const cities = generateCities({ length: CITIES_LENGTH });
export const CitiesContext = React.createContext(cities);
export const ImagesContext = React.createContext(IMAGES);
export const ReviewsContext = React.createContext(REVIEWS);

root.render(
  <React.StrictMode>
    <CitiesContext.Provider value={cities}>
      <ImagesContext.Provider value={IMAGES}>
        <ReviewsContext.Provider value={REVIEWS}>
          <App />
        </ReviewsContext.Provider>
      </ImagesContext.Provider>
    </CitiesContext.Provider>
  </React.StrictMode>,
);
