import { CitiesCatalog } from '../../components/CitiesCatalog/CitiesCatalog';
import { Header } from '../../components/Header/Header';
import { User } from '../../const';

export function MainPage(): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header userEmail={User.Email} />
      <CitiesCatalog />
    </div>
  );
}
