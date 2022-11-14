import { PropertyData } from '../types/types';
import nextId from 'react-id-generator';
import { getRandomFromIterable, getRandomInteger, getRandomIterableSlice } from '../utils/utils';
import { CITIES, PROPERTY } from '../const';
import { IMAGES } from './images';
import { REVIEWS } from './reviews';

const IMAGES_IDS = IMAGES.places.map((item) => item.id);
const REVIEWS_IDS = REVIEWS.map((item) => item.id);

type generateCitiesProps = {
  length: number;
};

export const generateCities = ({ length }: generateCitiesProps): PropertyData[] => (
  Array.from({ length: length }, (elem, i) => {
    const thisId = nextId();
    return {
      id: thisId,
      title: getRandomFromIterable(PROPERTY.Titles),
      city: getRandomFromIterable(CITIES),
      rating: getRandomFromIterable(PROPERTY.Ratings),
      mark: getRandomFromIterable(PROPERTY.Marks),
      price: getRandomInteger(PROPERTY.Price.Min, PROPERTY.Price.Max),
      type: getRandomFromIterable(PROPERTY.Types),
      imageIds: getRandomIterableSlice(IMAGES_IDS, IMAGES_IDS.length),
      reviewIds: getRandomIterableSlice(REVIEWS_IDS, REVIEWS_IDS.length),
      options: getRandomIterableSlice(PROPERTY.Options, getRandomInteger(6, 11)),
    };
  })
);
