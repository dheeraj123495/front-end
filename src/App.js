import React from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import New from './components/New';
import DSD from './components/DSD';
import Navbar from './components/Navbar';
// import Sidebar from './components/Sidebar';
import CSE from './components/CSE';
import EC from './components/EC';
import EE from './components/EE';
import AI from './components/AI';
import Mechanical from './components/Mechanical';
import Civil from './components/Civil';
import Maths from './components/Maths';
import Physics from './components/Physics';
import PP from './components/PP';
import ARM from './components/ARM';
import CT from './components/CT';
import EECA from './components/EECA';
import FEM from './components/FEM';
import NMA from './components/NMA';
import Phy from './components/Phy';
import Mat from './components/Mat';
import EPM from './components/EPM';

import Profile from './components/Profile';

function App() {
  return (
    <div>
   
   {/* <Navbar/>
   <Sidebar/> */}
      {/* <Route exact path="/" component={New} /> */}
      <Router>
      <Navbar/>
      {/* <Sidebar/> */}
        <Switch>
          <Route exact path="/" component={New} />
          {/* <Route exact path="/Sidebar" component={Sidebar} /> */}
          <Route exact path="/DSD" component={DSD} />
          <Route exact path="/CSE" component={CSE} />
          <Route exact path="/EC" component={EC} />
          <Route exact path="/EE" component={EE} />
          <Route exact path="/AI" component={AI} />
          <Route exact path="/Mechanical" component={Mechanical} />
          <Route exact path="/Civil" component={Civil} />
          <Route exact path="/Maths" component={Maths} />
          <Route exact path="/Physics" component={Physics} />
          <Route exact path="/PP" component={PP} />
          <Route exact path="/ARM" component={ARM} />
          <Route exact path="/CT" component={CT} />
          <Route exact path="/EECA" component={EECA} />
          <Route exact path="/FEM" component={FEM} />
          <Route exact path="/NMA" component={NMA} />
          <Route exact path="/Phy" component={Phy} />
          <Route exact path="/Mat" component={Mat} />
          <Route exact path="/EPM" component={EPM} />
          <Route exact path="/Profile" component={Profile} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
