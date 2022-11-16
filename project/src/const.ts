import { PropertyMark } from './types/types';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];
export const ACTIVE_CITY = 'Paris';
export const CITIES_LENGTH = 5;
export const REVIEW_IDS = ['S2sdf22sdf'];
export const PROPERTY = {
  Titles: [
    'Canal View Prinsengracht', 'Beautiful & luxurious apartment at great location',
    'Wood and stone place', 'Nice, cozy, warm big bed apartment'
  ],
  Ratings: [2, 2.5, 3, 3.5, 4, 4.5, 5],
  Marks: [PropertyMark.Premium, PropertyMark.Standard],
  Price: {
    Min: 80,
    Max: 200,
  },
  Types: ['Apartment', 'Private room'],
  Options: [
    'Wi-Fi',
    'Washing machine',
    'Towels',
    'Heating',
    'Coffee machine',
    'Baby seat',
    'Kitchen',
    'Dishwasher',
    'Cabel TV',
    'Fridge',
  ],
};
