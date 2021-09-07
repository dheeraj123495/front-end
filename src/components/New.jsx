import React, { useState, useEffect } from "react";
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
// https://codemyui.com/awesome-box-shadow-effect-for-card-ui/

function New() {
  const history = useHistory();
  const { id } = useParams();

  const auth = localStorage.getItem("password");

  const [user, setUser] = useState(initialValues);

  const handleClick = () => {
    localStorage.removeItem('password');
    history.push("/login");
  };

  // document.onclick = () => {
  //   console.log(auth)
  //   console.log(user.Password)
  //   if (auth != user.Password) {
  //     handleClick();
  //   }
  // };

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const auth = localStorage.getItem("password");
    const response = await getUsers(id);
    console.log(response.data);
    console.log(response.data);
    console.log(id);
    setUser(response.data);
    // authentication();
  };

  const authentication = () => {

    if (!auth) {
      handleClick();
    }
  };

  const cse = () => {
    history.push(`/CSE/${id}`);
  };

  const ec = () => {
    history.push(`/EC/${id}`);
  };

  const eee = () => {
    history.push(`/EEE/${id}`);
  };

  const me = () => {
    history.push(`/ME/${id}`);
  };

  const cv = () => {
    history.push(`/Civil/${id}`);
  };

  const maths = () => {
    history.push(`/Maths/${id}`);
  };

  const physics = () => {
    history.push(`/Physics/${id}`);
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
      <div className="Welcome">
        <h1>Welcome to KLEIT</h1>
      </div>
    </div>
  );
}

export default New;

//media queries
