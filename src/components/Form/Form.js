import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useUserContext } from 'hooks/useUserContext';
import { useState } from 'react';

export function Form() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useUserContext();

  function submitForm(e) {
    e.preventDefault();
    setUser({ name, password });
  }

  return (
    <form onSubmit={submitForm}>
      <Input label="name" onChange={e => setName(e.target.value)} />
      <Input label="password" onChange={e => setPassword(e.target.value)} />
          <Button title="Submit" type={'submit'} />
          
    </form>
  );
}
