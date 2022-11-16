import { CitiesCatalog } from '../../components/CitiesCatalog/CitiesCatalog';
import { Header } from '../../components/Header/Header';
import { USERS } from '../../mocks/users';

export function MainPage(): JSX.Element {
  return (
    <div className='page page--gray page--main'>
      <Header userEmail={USERS[0].email} />
      <CitiesCatalog />
    </div>
  );
}
