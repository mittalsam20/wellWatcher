import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Switch>
            {/* <Route path="/" component={login} exact></Route> */}
            <Route path="/home" component={LogSign} exact></Route>
            <Route path="/account" component={AccountPage} exact></Route>
            {/* <Route path="/doctorHome" component={HomePage} exact></Route> */}
            {/* <Route path="/NurseHome" component={HomePage} exact></Route> */}
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
