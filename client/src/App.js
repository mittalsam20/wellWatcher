import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserHome from "./pages/userhome/userhome";
import UserAccount from "./pages/useraccount/useraccount";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/" component={login} exact></Route> */}
            <Route path="/home" component={UserHome} exact></Route>
            <Route path="/account" component={UserAccount} exact></Route>
            {/* <Route path="/doctorHome" component={HomePage} exact></Route> */}
            {/* <Route path="/NurseHome" component={HomePage} exact></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
