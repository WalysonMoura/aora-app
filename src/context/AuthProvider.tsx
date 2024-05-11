import { getCurrentUser } from "@/lib/appwrite";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export type AuhtContextDataProps = {
  isLogged: boolean;
  setIsLogged: any;
  user: any; // Define your user type here
  setUser: any;
  loading: boolean;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuhtContext = createContext<AuhtContextDataProps>(
  {} as AuhtContextDataProps
);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setIsLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((user) => {
        if (user) {
          setIsLogged(true);
          setUser(user);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <AuhtContext.Provider
      value={{ isLogged, setIsLogged, user, setUser, loading }}
    >
      {children}
    </AuhtContext.Provider>
  );
};
