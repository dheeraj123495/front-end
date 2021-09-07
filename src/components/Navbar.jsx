import React, { useState, useEffect } from "react";
import logo from "./klelogo.png";
import face from "./avatar1.png";
import "./New.css";
import { getUsers } from "../Service/api";
import { useHistory, useParams } from "react-router";
// import brain from './brain.jpg';
// import mach from './mach.png';
// import network from './network.jpg';
import { NavLink } from "react-router-dom";

const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
  Branch: "",
  openelectives: "",
  openelectiveconfirm: "",
};

function Navbar() {
  const { id } = useParams();

  const history = useHistory();

  const [user, setUser] = useState(initialValues);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
  };

  const handleClickButton = () => {
    history.push(`/profile/${id}`);
  }

  return (
    <div>
      <div classNameName="navbox" id="navbox">
        <div>
          <nav className="navbar navbar-expand-xl navbar-dark bg-dark">
            <div id="headingkle">
              <a href={`/New/${id}`} className="navbar-brand">
                <img src={logo} alt="Avatar" />
                <h3>KLE</h3>
                <h6>Institute of Technology</h6>
              </a>
            </div>

            <div className="userpart">
              <div className="nav-item dropdown">
                <div className="dropdown">
                  <button
                  onClick={() => {handleClickButton()}}
                    className="btn"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img src={face} alt="Avatar" />
                    <i className="fas fa-arrow-circle-down" id="drpbtn"></i>
                  </button>
                  {/* <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <NavLink type="Link" exact to="./">
                      <li>
                        <a className="dropdown-item" href="/#">
                          <i className="fas fa-address-card"></i> Profile
                        </a>
                      </li>
                    </NavLink>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <i className="fas fa-code"></i> Developer Info
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/#">
                        <i className="fas fa-sign-out-alt"></i>Logout
                      </a>
                    </li>
                  </ul> */}
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
