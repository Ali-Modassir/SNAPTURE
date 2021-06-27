import Authentication from "./views/Authentication/views/Authentication";
//Router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./views/Authentication/views/ForgotPassword";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Authentication} />
        <Route path="/auth/forgotPassword" exact component={ForgotPassword} />
      </Switch>
    </Router>
  );
};

export default App;
