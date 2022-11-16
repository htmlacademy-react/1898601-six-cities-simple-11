import { City } from '../City/City';
import { useContext } from 'react';
import { CitiesContext } from '../../index';
import { PropertyData } from '../../types/types';
import { ACTIVE_CITY } from '../../const';

export const Cities = (): JSX.Element => {
  const citiesData: PropertyData[] = useContext(CitiesContext);
  return (
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{citiesData.length} places to stay in {ACTIVE_CITY}</b>
          <form className="places__sorting" action="#" method="get">
            <span className="places__sorting-caption">Sort by</span>
            <span className="places__sorting-type" tabIndex={0}>
              Popular
              <svg className="places__sorting-arrow" width="7" height="4">
                <use xlinkHref="#icon-arrow-select"></use>
              </svg>
            </span>
            <ul className="places__options places__options--custom places__options--opened">
              <li className="places__option places__option--active" tabIndex={0}>Popular</li>
              <li className="places__option" tabIndex={0}>Price: low to high</li>
              <li className="places__option" tabIndex={0}>Price: high to low</li>
              <li className="places__option" tabIndex={0}>Top rated first</li>
            </ul>
          </form>
          <div className="cities__places-list places__list tabs__content">
            {citiesData.length > 0 &&
              citiesData.map((city) => (
                <City
                  key={city.id}
                  data={city}
                />
              ))}
          </div>
        </section>
        <div className="cities__right-section">
          <section className="cities__map map"></section>
        </div>
      </div>
    </div>
  );
};
