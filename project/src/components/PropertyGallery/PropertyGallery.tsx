import { ImagesContext } from '../..';
import { Image } from '../../types/types';
import { useContext } from 'react';

type PropertyGalleryProps = {
  imageIds: string[];
};

export const PropertyGallery = ({ imageIds }: PropertyGalleryProps): JSX.Element => {
  const images: Image[] = useContext(ImagesContext).places;
  const currentImages: Image[] = images.filter((image) => imageIds.includes(image.id)).slice(0, 6);
  return (
    <div className="property__gallery-container container">
      <div className="property__gallery">
        {currentImages.length > 0 ?
          currentImages.map(({ id, src }) => (
            <div className="property__image-wrapper" key={id}>
              <img className="property__image" src={`img/${src}`} alt="Photo studio" />
            </div>
          )) : <span>Нет доступных фото</span>}
      </div>
    </div>
  );
};
