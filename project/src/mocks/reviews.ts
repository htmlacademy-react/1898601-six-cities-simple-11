import { PROPERTY } from '../const';
import { Review } from '../types/types';
import { getRandomFromIterable } from '../utils/utils';
import { USERS } from './users';

export const REVIEWS: Review[] = [
  {
    id: 'review1',
    authorId: getRandomFromIterable(USERS).id,
    content: `A quiet cozy and picturesque that hides behind a
    a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
    rating: getRandomFromIterable(PROPERTY.Ratings),
    date: new Date('2019-04-17T03:24:00'),
  },
];
