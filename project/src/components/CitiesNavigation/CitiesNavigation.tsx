import classnames from 'classnames';
import { ACTIVE_CITY, CITIES } from '../../const';

export const CitiesNavigation = (): JSX.Element => {
  const cities: { name: string; id: number; isActive: boolean }[] = CITIES.map(
    (city, i) => ({ name: city, id: i, isActive: city === ACTIVE_CITY }));

  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities.length > 0 ?
              cities.map((city) => (
                <li className="locations__item" key={city.id}>
                  <a className={classnames('locations__item-link', 'tabs__item', { 'tabs__item--active': city.isActive })} href="#">
                    <span>{city.name}</span>
                  </a>
                </li>
              )) : <span>Нет доступных городов</span>}
          </ul>
        </section>
      </div>
    </>
  );
};
