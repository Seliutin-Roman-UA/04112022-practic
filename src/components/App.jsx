import { useUserContext } from 'hooks/useUserContext';
import { Button } from './Button/Button';
import { Form } from './Form/Form';

export const App = () => {
  const { setUser, user } = useUserContext();
  function logOutUser() {
    setUser(null);
  }
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      {/* {!user ? ( */}
      <Form />

      <Button
        title={'LogOut ' + user?.name}
        type="button"
        onClick={logOutUser}
      />
    </div>
  );
};
