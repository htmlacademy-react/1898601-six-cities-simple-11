import { USERS } from '../../mocks/users';
import { Image, Review, User } from '../../types/types';
import { useContext } from 'react';
import { ImagesContext } from '../..';
import { ratingToWidth, toDashedFormat, toShortFormat } from '../../utils/utils';

type PropertyReviewProps = {
  review: Review;
};

export const PropertyReview = ({ review }: PropertyReviewProps): JSX.Element => {
  const avatars: Image[] = useContext(ImagesContext).avatars;
  const reviewAuthor: User | undefined = USERS.find((user) => user.id === review.authorId);
  const authorAvatar: Image | undefined = avatars.find((avatar) => avatar.id === reviewAuthor?.avatarId);
  const reviewDashedDate = toDashedFormat(review.date);
  const shortedDate = toShortFormat(review.date);
  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={`img/${authorAvatar?.src || ''}`} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {reviewAuthor?.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: ratingToWidth(review.rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {review.content}
        </p>
        <time className="reviews__time" dateTime={reviewDashedDate}>{shortedDate}</time>
      </div>
    </li>
  );
};
