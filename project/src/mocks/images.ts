import { IMAGE_SOURCES } from '../const';
import { CityData, Image } from '../types/types';
import { getRandomFromIterable } from '../utils/utils';

export const generateImages = (citiesData: CityData[]): Image[] => (
  citiesData.map((item: CityData) => ({
    id: item.imgId,
    src: getRandomFromIterable(IMAGE_SOURCES),
  }))
);
