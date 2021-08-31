import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserHome from "./pages/userhome/userhome";
import UserAccount from "./pages/useraccount/useraccount";
import NavBar from "./components/navbar/navbar";
import DoctorHome from "./pages/doctorhome/doctorhome";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            {/* <Route path="/" component={login} exact></Route> */}
            <Route path="/" component={UserHome} exact></Route>
            <Route path="/account" component={UserAccount} exact></Route>
            {/* <Route path="/doctorHome" component={HomePage} exact></Route> */}
            {/* <Route path="/NurseHome" component={HomePage} exact></Route> */}
            <Route path="/doc" component={DoctorHome} exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
