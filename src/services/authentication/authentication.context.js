import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState, createContext } from "react";

import { loginRequest, registerRequest, auth } from "./authentication.service";

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }
  });

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message ? e.message.toString() : e.toString());
        setIsLoading(false);
      });
  };

  const onRegister = (email, password, repeatedPassword) => {
    setIsLoading(true);
    if (password !== repeatedPassword) {
      setError("Error: Passwords do not match");
      return;
    }

    registerRequest(email, password)
      .then((usr) => {
        setUser(usr);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message ? e.message.toString() : e.toString());
        setIsLoading(false);
      });
  };

  const onLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser(null);
        setIsLoading(false);
      })
      .catch((e) => {
        setError(e.message ? e.message.toString() : e.toString());
        setIsLoading(false);
      });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
