import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import New from "./Components/New";
import DSD from "./Components/DSD";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import CSE from "./Components/CSE";
import EC from "./Components/EC";
import EE from "./Components/EE";
import AI from "./Components/AI";
import Mechanical from "./Components/Mechanical";
import Civil from "./Components/Civil";
import Maths from "./Components/Maths";
import Physics from "./Components/Physics";
import PP from "./Components/PP";
import ARM from "./Components/ARM";
import CT from "./Components/CT";
import EECA from "./Components/EECA";
import FEM from "./Components/FEM";
import NMA from "./Components/NMA";
import Phy from "./Components/Phy";
import Mat from "./Components/Mat";
import EPM from "./Components/EPM";
import Developers from "./Components/Developers";
import Notfound from "./Components/Notfound";
import HodInterface from "./Admin/AllUsers";

function App() {
  const Password = localStorage.getItem("password");
  return (
    <div>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/developers" component={Developers} />
            <Route exact path="/HOD" component={HodInterface} />
            <Route exact path="/New/:id" component={New} />
            <Route exact path="/" component={Login} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/:id" component={New} />
            <Route exact path="/EC/DSD/:id" component={DSD} />
            <Route exact path="/CSE/:id" component={CSE} />
            <Route exact path="/EC/:id" component={EC} />
            <Route exact path="/EEE/:id" component={EE} />
            <Route exact path="/CSE/AI/:id" component={AI} />
            <Route exact path="/ME/:id" component={Mechanical} />
            <Route exact path="/Civil/:id" component={Civil} />
            <Route exact path="/Maths/:id" component={Maths} />
            <Route exact path="/Physics/:id" component={Physics} />
            <Route exact path="/CSE/PP/:id" component={PP} />
            <Route exact path="/EC/ARM/:id" component={ARM} />
            <Route exact path="/EC/CT/:id" component={CT} />
            <Route exact path="/EEE/EECA/:id" component={EECA} />
            <Route exact path="/Civil/FEM/:id" component={FEM} />
            <Route exact path="/Civil/NMA/:id" component={NMA} />
            <Route exact path="/PHYSICS/Phy/:id" component={Phy} />
            <Route exact path="/MATHS/Mat/:id" component={Mat} />
            <Route exact path="/Civil/EPM/:id" component={EPM} />
            <Route component={Notfound} />
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
