import { Cities } from '../Cities/Cities';
import { CitiesNavigation } from '../CitiesNavigation/CitiesNavigation';

export const CitiesCatalog = (): JSX.Element => (
  <>
    <CitiesNavigation />
    <Cities />
  </>
);
