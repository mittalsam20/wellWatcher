import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserAccount from "./pages/useraccount/useraccount";
import DoctorHome from "./pages/doctorhome/doctorhome";
import NurseHome from "./pages/nursehome/nursehome";
import LoginPage from "./pages/loginpage/logsign";
import UserHome from "./pages/userhome/userhome";
import NavBar from "./components/navbar/navbar";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <NavBar />
          <Switch>
            <Route path="/" component={LoginPage} exact></Route>
            <Route path="/home" component={UserHome} exact></Route>
            <Route path="/account" component={UserAccount} exact></Route>
            {/* <Route path="/doctorHome" component={HomePage} exact></Route> */}
            {/* <Route path="/NurseHome" component={HomePage} exact></Route> */}
            <Route path="/nurse" component={NurseHome} exact></Route>
            <Route path="/doc" component={DoctorHome} exact></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
