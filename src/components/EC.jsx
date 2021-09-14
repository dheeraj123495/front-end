import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { getUsers } from "../Service/api";
import brain from "./brain.jpg";
import "./New";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";
const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
  Branch: "",
  openelectives: "",
  openelectiveconfirm: "",
};

function EC() {
  const history = useHistory();
  const { id } = useParams();

  const auth = localStorage.getItem("password");

  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
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
      <div id="mainbox">
        <NavLink type="Link" exact to={`./CT/${id}`}>
          <div class="mybox">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Communication Theory</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
      </div>
      <div id="mainbox4">
        <NavLink type="Link" exact to={`./ARM/${id}`}>
          <div class="mybox2">
            <img src={brain} class="brain" alt="" />

            <span class="ai">ARM Embedded System</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
      </div>
      <div id="mainbox4">
        <NavLink type="Link" exact to={`./DSD/${id}`}>
          <div class="mybox3">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Digital System design using VHDL</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default EC;
