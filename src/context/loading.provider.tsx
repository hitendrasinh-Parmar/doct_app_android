// beloved react

import React, { useContext, useState } from 'react';

export type LoadingContextProps = {
  loading?: boolean;
  setLoading?: (value: boolean) => void;
};

const LoadingContext = React.createContext<LoadingContextProps>({});

type LoadingProviderProps = {
  children?: React.ReactNode;
};

export const LoadingProvider = ({ children }: LoadingProviderProps) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
  );
};

export const useLoading = () => useContext(LoadingContext);
