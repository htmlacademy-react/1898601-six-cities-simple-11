import { CitiesContext } from '../..';
import { useContext } from 'react';
import { getRandomIterableSlice } from '../../utils/utils';
import { City } from '../City/City';

export const NearPlaces = (): JSX.Element => {
  const cities = useContext(CitiesContext);
  const nearPlaces = getRandomIterableSlice(cities, 3);
  return (
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">
          {(Boolean(nearPlaces) && nearPlaces.length > 0) &&
            nearPlaces.map((place) => (
              <City
                key={place.id}
                data={place}
              />
            ))}
        </div>
      </section>
    </div>
  );
};
