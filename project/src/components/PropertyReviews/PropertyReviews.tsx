import { Review } from '../../types/types';
import { PropertyForm } from '../PropertyForm/PropertyForm';
import { PropertyReview } from '../PropertyReview/PropertyReview';
import { useContext } from 'react';
import { ReviewsContext } from '../..';

export const PropertyReviews = (): JSX.Element => {
  const reviews: Review[] = useContext(ReviewsContext);
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {(Boolean(reviews) && reviews.length > 0) &&
          reviews.map((review) => (
            <PropertyReview key={review.id} review={review} />
          ))}
      </ul>
      <PropertyForm />
    </section>
  );
};
