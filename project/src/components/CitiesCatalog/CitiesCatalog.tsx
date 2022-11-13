import { Cities } from '../Cities/Cities';
import { CitiesNavigation } from '../CitiesNavigation/CitiesNavigation';

export function CitiesCatalog(): JSX.Element {
  return (
    <>
      <CitiesNavigation />
      <Cities />
    </>
  );
}
