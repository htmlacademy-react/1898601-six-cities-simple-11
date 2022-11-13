import { CitiesCatalog } from '../../components/CitiesCatalog/CitiesCatalog';
import { Header } from '../../components/Header/Header';

export function MainPage(): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header />
      <CitiesCatalog />
    </div>
  );
}
