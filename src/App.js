import { Switch, Route } from "react-router-dom";
import "./App.css";
import Direct from "./pages/Direct/Direct";
import Explore from "./pages/Explore/Explore";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Signin from "./pages/Signin/Signin";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/signin" component={Signin} />
      <Route path="/home" component={Home} />
      <Route exact path="/direct" component={Direct} />
      <Route exact path="/direct/:id" component={Direct} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/:id*" component={Profile} />
    </Switch>
  );
}

export default App;
