import { CityData } from '../types/types';
import nextId from 'react-id-generator';
import { getRandomFromIterable, getRandomInteger } from '../utils/utils';
import { CITIES, OFFER } from '../const';

type generateCitiesProps = {
  length: number;
};

export const generateCities = ({ length }: generateCitiesProps): CityData[] => (
  Array.from({ length: length }, (elem, i) => {
    const thisId = nextId();
    return {
      id: thisId,
      title: getRandomFromIterable(OFFER.Titles),
      city: getRandomFromIterable(CITIES),
      rating: getRandomFromIterable(OFFER.Ratings),
      mark: getRandomFromIterable(OFFER.Marks),
      price: getRandomInteger(OFFER.Price.Min, OFFER.Price.Max),
      type: getRandomFromIterable(OFFER.Types),
      imgId: thisId,
    };
  })
);
