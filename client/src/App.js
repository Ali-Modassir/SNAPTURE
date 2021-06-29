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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfirmEmail from "./views/Authentication/views/ConfirmEmail";

const App = () => {
  return (
    <>
      <ToastContainer />
      <Router>
        <Switch>
          <Route path="/auth" exact component={Authentication} />
          <Route path="/auth/confirm/:id" component={ConfirmEmail} />
          <Route path="/auth/forgotPassword" exact component={ForgotPassword} />
          <Route
            path="/auth/reset/:resetToken"
            exact
            component={ResetPassword}
          />
          <Redirect to="/auth" />
        </Switch>
      </Router>
    </>
  );
};

export default App;
