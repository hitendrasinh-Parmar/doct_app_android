import React, { Dispatch, SetStateAction, useContext, useState } from 'react';

export type UserContextProps = {
  user?: null | object;
  setUser?: (value: null | object) => void;
};

const UserContext = React.createContext<UserContextProps>({});

type ProviderProps = {
  children?: React.ReactNode;
};

export const UserProvider = ({ children }: ProviderProps) => {
  const [user, setUser] = useState<null | object>(null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export const useUserState = () => useContext(UserContext);
