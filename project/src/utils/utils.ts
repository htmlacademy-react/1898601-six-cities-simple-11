import { Image } from '../types/types';

export function getRandomInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomFromIterable = <T>(iterable: T[]) => iterable[Math.floor(Math.random() * iterable.length)];

export const getImageSrcById = (images: Image[], imgId: number | string) => {
  const newId: string = typeof imgId === 'string' ? imgId : imgId.toString();
  return images.find(({ id }) => id === newId)?.src;
};
