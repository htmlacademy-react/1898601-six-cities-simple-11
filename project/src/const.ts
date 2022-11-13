import { CityMark } from './types/types';
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const ACTIVE_CITY = 'Paris';
export const IMAGE_SOURCES = ['apartment-01.jpg', 'apartment-02.jpg', 'apartment-03.jpg', 'room.jpg'];
export const CITIES_LENGTH = 5;
export const User = {
  Email: 'av.fomichev01@yandex.ru',
};
export const OFFER = {
  Titles: [
    'Canal View Prinsengracht', 'Beautiful & luxurious apartment at great location',
    'Wood and stone place', 'Nice, cozy, warm big bed apartment'
  ],
  Ratings: [2, 2.5, 3, 3.5, 4, 4.5, 5],
  Marks: [CityMark.Premium, CityMark.Standard],
  Price: {
    Min: 80,
    Max: 200,
  },
  Types: ['Apartment', 'Private room'],
};
