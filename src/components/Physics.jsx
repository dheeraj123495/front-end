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

function Physics() {
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
    authentication();
  };

  const authentication = () => {
    if (!auth) {
      localStorage.removeItem("password");
      history.push("/login");
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
    history.push(`/Mechanical/${id}`);
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
        <NavLink type="Link" exact to={`./Phy/${id}`}>
          <div class="mybox">
            <img src={brain} class="brain" alt="" />

            <span class="ai">Advanced Physics for engineers</span>
            <span class="aicode">18cs45</span>

            {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Physics;
