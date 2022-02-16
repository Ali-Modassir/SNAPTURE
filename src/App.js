import Authentication from "./views/Authentication/views/Authentication";
//Router
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import ForgotPassword from "./views/Authentication/views/ForgotPassword";
import ResetPassword from "./views/Authentication/views/ResetPassword";
import DashLayout from "./views/Dashboard/DashLayout";
import Onboarding from "./views/Authentication/views/Onboarding";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmEmail from "./views/Authentication/views/ConfirmEmail";
import OAuth from "./views/Authentication/views/OAuth";
//Contexts-------------------------------------------
import { AuthContext } from "./context/authContext";
import { NewsContext } from "./context/newsContext";
//hooks----------------------------------------------
import { useAuth } from "./customHooks/authHook";
import { useNewsHook } from "./customHooks/newsHook";

const App = () => {
  //Context
  const {
    token,
    login,
    logout,
    userId,
    userName,
    userEmail,
    googleLogin,
    institute,
  } = useAuth();
  const { newsData } = useNewsHook();

  let route = null;

  if (!token) {
    route = (
      <Switch>
        <Route path="/auth" exact component={Authentication} />
        <Route path="/auth/confirm/:id" component={ConfirmEmail} />
        <Route path="/auth/forgotPassword" exact component={ForgotPassword} />
        <Route path="/auth/reset/:resetToken" exact component={ResetPassword} />
        <Route path="/auth/:token" component={OAuth} />
        <Redirect to="/auth" />
      </Switch>
    );
  } else if (!userName) {
    route = (
      <Switch>
        <Route path="/onboarding" component={Onboarding} />
        <Redirect to="/onboarding" />
      </Switch>
    );
  } else
    route = (
      <Switch>
        <Route path="/dash" component={DashLayout} />
        <Redirect to="/dash" />
      </Switch>
    );

  return (
    <>
      <ToastContainer />
      <AuthContext.Provider
        value={{
          isLoggedIn: !!token,
          token: token,
          userName: userName,
          userEmail: userEmail,
          userId: userId,
          institute: institute,
          logout: logout,
          login: login,
          googleLogin: googleLogin,
        }}
      >
        <NewsContext.Provider
          value={{
            newsData,
          }}
        >
          <Router>{route}</Router>
        </NewsContext.Provider>
      </AuthContext.Provider>
    </>
  );
};

export default App;
