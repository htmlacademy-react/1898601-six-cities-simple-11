import { Header } from '../../components/Header/Header';
import { Property } from '../../components/Property/Property';
import { USERS } from '../../mocks/users';
import { useContext } from 'react';
import { CitiesContext } from '../..';
import { getRandomFromIterable } from '../../utils/utils';
import { NearPlaces } from '../../components/NearPlaces/NearPlaces';

export const PropertyPage = (): JSX.Element => {
  const cities = useContext(CitiesContext);
  return (
    <div className="page">
      <Header userEmail={USERS[0].email} />
      <main className="page__main page__main--property">
        <Property property={getRandomFromIterable(cities)} />
        <NearPlaces />
      </main>
    </div>
  );
};
