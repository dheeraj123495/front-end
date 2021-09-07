import React, { useState, useEffect } from "react";
import brain from "./brain.jpg";
import "./New";
// import logo from './klelogo.png';
// import face from './avatar1.png';
import "./New.css";
import { useHistory, useParams } from "react-router";
// import brain from './brain.jpg';
// import mach from './mach.png';
// import network from './network.jpg';
import { NavLink } from "react-router-dom";

import { getUsers } from "../Service/api";
const id = "123";
function Display() {
  return (
    <div>
      <NavLink type="Link" exact to={`./AI/${id}`}>
        
          <div class="mybox">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Artificial Intelligence</span>
            <span class="aicode">18cs45</span>
          </div>
      
      </NavLink>
      <NavLink type="Link" exact to="./PP">
          
          <div class="mybox2">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Python Application Programming</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
    </div>
  );
}

export default Display;
