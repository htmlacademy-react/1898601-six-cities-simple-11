import { Image } from '../types/types';
import dayjs from 'dayjs';

export const toDashedFormat = (date: Date): string => dayjs(date).format('YYYY-MM-DD');
export const toShortFormat = (date: Date): string => dayjs(date).format('MMMM YYYY');
export const ratingToWidth = (rating: number): string => `${rating * 20}%`;

export function getRandomInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

export const getRandomFromIterable = <T>(iterable: T[]) => iterable[Math.floor(Math.random() * iterable.length)];

export const getImageSrcById = (images: Image[], imageId: number | string) => {
  const newId: string = typeof imageId === 'string' ? imageId : imageId.toString();
  return images.find(({ id }) => id === newId)?.src;
};

export const getRandomIterableSlice = <T>(iterable: T[], length: number): T[] =>
  iterable.sort(() => 0.5 - Math.random()).slice(0, length);
