import { createContext } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  userName: null,
  userEmail: null,
  token: null,
  login: () => {},
  logout: () => {},
  googleLogin: () => {},
});
