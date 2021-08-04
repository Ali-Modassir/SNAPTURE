import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  userName: null,
  userEmail: null,
  institute: null,
  token: null,
  login: () => {},
  logout: () => {},
  googleLogin: () => {},
});
