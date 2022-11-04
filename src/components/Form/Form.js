import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useUserContext } from 'hooks/useUserContext';
import { useReducer } from 'react';

export function Form() {
  // const [name, setName] = useState('');
  // const [password, setPassword] = useState('');

  const initialArg = {
    name: '',
    password: '',
  };

  const init = () => {
    return { name: 'catch', password: '1234567' };
  };

  const [state, dispatch] = useReducer(reducer, initialArg, init);

  function reducer(state, action) {
    // const action = {type: '', payload: ''}
    // state = initialArg
    const { type, payload } = action;
    switch (type) {
      case 'name':
        return { ...state, name: payload };
      case 'password':
        return { ...state, password: payload };
      case 'reset':
        return initialArg;
      default:
        return state;
    }
  }

  const onChange = e => {
    const { name, value } = e.target;
    dispatch({ type: name, payload: value });
  };

  const { setUser } = useUserContext();

  function submitForm(e) {
    e.preventDefault();
    setUser(state);
    dispatch({ type: 'reset' });
  }

  const { name, password } = state;
  return (
    <form onSubmit={submitForm}>
      <Input label="name" value={name} onChange={onChange} />
      <Input label="password" value={password} onChange={onChange} />
      <Button title="Submit" type={'submit'} />
    </form>
  );
}
