import { Image } from '../types/types';

export type ImageMocks = {
  places: Image[];
  avatars: Image[];
}

export const IMAGES: ImageMocks = {
  places: [
    {
      id: 'image1',
      src: 'apartment-01.jpg',
    },
    {
      id: 'image2',
      src: 'apartment-02.jpg',
    },
    {
      id: 'image3',
      src: 'apartment-03.jpg',
    },
    {
      id: 'image4',
      src: 'room.jpg',
    },
    {
      id: 'image5',
      src: 'apartment-01.jpg',
    },
    {
      id: 'image6',
      src: 'apartment-02.jpg',
    },
    {
      id: 'image7',
      src: 'apartment-03.jpg',
    },
    {
      id: 'image8',
      src: 'room.jpg',
    },
  ],
  avatars: [
    {
      id: 'avatar1',
      src: 'avatar-max.jpg',
    },
  ],
};
