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
import Navbar from "./Navbar";
// https://codemyui.com/awesome-box-shadow-effect-for-card-ui/

const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
  Branch: "",
  openelectives: "",
  openelectiveconfirm: "",
};
function CSE() {
  const history = useHistory();
  const { id } = useParams();

  const auth = localStorage.getItem("password");

  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    getAllUsers();
  }, []);

  // page.onclick = () => {
  //   if (auth != user.Password) {
  //     localStorage.removeItem("password");
  //     history.push("/login");
  //   }
  // };

  const getAllUsers = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
    console.log(auth);
    console.log(auth);
    console.log("Hehehehehe");
    authentication();
  };

  const authentication = () => {
    if (auth) {
    } else {
      // localStorage.removeItem("password");
      // history.push("/login");
    }
  };

  const cse = () => {
    history.push(`/CSE/${id}`);
  };

  const ec = () => {
    history.push(`/EC/${id}`);
  };

  const eee = () => {
    localStorage.removeItem("password");
    history.push(`/EEE/${id}`);
  };

  const me = () => {
    history.push(`/ME/${id}`);
  };

  const cv = () => {
    history.push(`/CIVIL/${id}`);
  };

  const maths = () => {
    history.push(`/MATHS/${id}`);
  };

  const physics = () => {
    history.push(`/PHYSICS/${id}`);
  };

  const ai = () => {
    history.push(`/AI/${id}`);
  };

  const pp = () => {
    history.push(`/PP/${id}`);
  };

  return (
    <div>
      <Navbar />

      <div id="sidebox">
        <div className="sidebar-container">
          <ul className="sidebar-navigation">
            <li className="header">
              <i className="fas fa-angle-double-right" aria-hidden="true"></i>{" "}
              Open-Elective
            </li>
            <div className="button">
              {/* <NavLink type="Link" exact to="./CSE"> */}
              {/* <li>
                <a>Computer Science</a>
              </li> */}
              <button
                onClick={() => {
                  cse();
                }}
              >
                CSE
              </button>
              {/* </NavLink> */}
              <button
                onClick={() => {
                  ec();
                }}
              >
                E&C
              </button>
              <button
                onClick={() => {
                  eee();
                }}
              >
                EEE
              </button>
              <button
                onClick={() => {
                  me();
                }}
              >
                ME
              </button>
              <button
                onClick={() => {
                  cv();
                }}
              >
                CV
              </button>
              <button
                onClick={() => {
                  maths();
                }}
              >
                DEPT OF MATHS
              </button>
              <button
                onClick={() => {
                  physics();
                }}
              >
                DEPT OF PHYSICS
              </button>
            </div>
          </ul>
        </div>
      </div>
      <div id="mainbox">
        <NavLink type="Link" exact to={`./AI/${id}`}>
          <div class="mybox">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Artificial Intelligence</span>
            <span class="aicode">18cs45</span>
          </div>
        </NavLink>
      </div>
      <div id="mainbox2">
        <NavLink type="Link" exact to={`./PP/${id}`}>
          <div class="mybox2">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Python Application Programming</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
        {/* <button onClick={() => {pp()}}>Apply</button> */}
      </div>
    </div>
  );
}

export default CSE;
