import { useLocalStorage } from 'hooks/useLocalStorage';
import { createContext, useEffect, useState } from 'react';

export const UserContext = createContext();


export function UserContextProvider({ children }) {
const metods = useLocalStorage({key: "user"})

  const [user, setUser] = useState(() =>
    metods.get()
    );
    
  useEffect(() => {
    metods.add(user);
  }, [user, metods]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
