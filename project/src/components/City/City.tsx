import { CityData, CityMark, Image } from '../../types/types';
import { getImageSrcById } from '../../utils/utils';

type CityProps = {
  data: CityData;
  images: Image[];
};

export function City({ data, images }: CityProps): JSX.Element {
  const { title, rating, mark, price, type, imgId } = data;
  const imageSrc = getImageSrcById(images, imgId) || 'apartment-01.jpg';
  return (
    <article className="cities__card place-card">
      {mark === CityMark.Premium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={`img/${imageSrc}`} width="260" height="200" alt="Place image " />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>

        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * 20}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}
