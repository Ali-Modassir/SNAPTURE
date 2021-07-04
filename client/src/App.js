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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmEmail from "./views/Authentication/views/ConfirmEmail";
import OAuth from "./views/Authentication/views/OAuth";
//Contexts-------------------------------------------
import { AuthContext } from "./context/authContext";
//hooks----------------------------------------------
import { useAuth } from "./customHooks/authHook";

const App = () => {
  //Context
  const { token, login, logout, userId, userName, userEmail, googleLogin } =
    useAuth();

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
          logout: logout,
          login: login,
          googleLogin: googleLogin,
        }}
      >
        <Router>
          <Switch>
            <Route path="/auth" exact component={Authentication} />
            <Route path="/auth/confirm/:id" component={ConfirmEmail} />
            <Route
              path="/auth/forgotPassword"
              exact
              component={ForgotPassword}
            />
            <Route
              path="/auth/reset/:resetToken"
              exact
              component={ResetPassword}
            />
            <Route path="/auth/:token" component={OAuth} />
            <Route path="/dash" component={DashLayout} />
            <Redirect to="/auth" />
          </Switch>
        </Router>
      </AuthContext.Provider>
    </>
  );
};

export default App;
