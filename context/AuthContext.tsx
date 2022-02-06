import React, { useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";

type User = {
  name: string;
  email: string;
};
export interface AuthContextInterface {
  user: User | null;
  token: string;
  isLogged: boolean;
}

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLogged: false,
};

export const AuthContext = React.createContext<{
  state: AuthContextInterface;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const AuthContextProvide = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const isServer = typeof window === "undefined";
  useEffect(() => {
    if (!isServer) {
      const users = localStorage.getItem("users") || "{}";
      const user = JSON.parse(users);
      if (user.token) {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      }
    }
  }, [isServer]);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
