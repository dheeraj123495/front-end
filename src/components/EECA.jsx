import React, { useState, useEffect } from "react";
import brain from "./brain.jpg";
import "./New";
import { NavLink } from "react-router-dom";
import "./demo.css";
import { useParams, useHistory } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";
import Navbar from "./Navbar";
import firebaseDb from "../firebase";

const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
  Branch: "",
  openelectives: "",
  openelectiveconfirm: "",
};

function EECA() {
  const auth = localStorage.getItem("password");

  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState(initialValues);
  const [display, setDisplay ] = useState(initialValues);

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const userRef = await firebaseDb.database().ref(`users/${id}`);
    userRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      setUser(snapshot.val());
    });
  };
  const handleClick = async () => {
    setDisplay(user);
    if (user.openelectives == "") {
      alert("Please choose the subject...");
    } else {
      console.log(display);
      const todoRef = firebaseDb.database().ref(`users/${id}`);
      todoRef.update(user);
      history.push(`/profile/${id}`);
    }
  };

  const onValueChange = (e) => {
    console.log(user);
    if (user.openelectives == "") {
      setUser({ ...user, [e.target.name]: professionalSubject });
    }
  };

  const professionalSubject = "Electrical Energy Conservation and Auditing";

  return (
    <div>
      <Navbar />
      <div className="demo">
        <div className="title">
          <h2>
            <span>{professionalSubject} </span>
            <sub>18EE754 </sub>
          </h2>
        </div>

        <div className="courses">
          {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

          <div className="box2">
            <ul>
              <li>
                Course Title: Electrical Energy Conservation and Auditing{" "}
              </li>
              <li>Course Code: 18EE754 </li>
              <li>Course Type: Open Elective</li>
              <li>Duration: 14 Weeks</li>
              <li>Credit points: 03</li>
              <li>Intended audience: ECE / CSE/ ME / CV</li>
              <li>Prerequisites: Nil</li>
              <li>
                Faculty: Prof. V.M. Soppimath, Dept of EEE, KLEIT, Hubballi.
              </li>
              <br></br>
            </ul>
          </div>
          <div className="box3">
            <div className="dropCollapse">
              <div
                class="accordion accordion-flush "
                id="accordionFlushExample"
              >
                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingOne">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseOne"
                      aria-expanded="false"
                      aria-controls="flush-collapseOne"
                    >
                      Course Layout
                    </button>
                  </h2>
                  <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingOne"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      Module 1:Energy Scenario: Energy needs of growing economy,
                      long term energy scenario and Energy Conservation Act-2001
                      and its features.<br></br>
                      Module 2:Energy Efficiency in Electrical Systems: Energy
                      efficient electrical system and measures of energy
                      efficiency in lighting system.<br></br>
                      Module 3:Energy auditing: Introduction to energy auditing,
                      different types of audits, energy use profiles.<br></br>
                      Module 4:Electricity vis-??-vis Other Commodities:
                      Distinguishing features of electricity as a commodity and
                      Framework of Indian power sector.<br></br>
                      Module 5:Energy Audit Applied to Buildings: Energy Saving
                      Measures in New Buildings, General Energy Savings Tips
                      Applicable to New as well as Existing Buildings.<br></br>
                      <br></br>
                      <b>Demand side Management</b>: Scope of DSM, Evolution of
                      DSM concept, DSM planning and Implementation
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseTwo"
                      aria-expanded="false"
                      aria-controls="flush-collapseTwo"
                    >
                      Course Objectives
                    </button>
                  </h2>
                  <div
                    id="flush-collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingTwo"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      1. Understand the current energy scenario and importance
                      of energy conservation.<br></br>
                      2. Understand the methods of improving energy efficiency
                      in different electrical systems.<br></br>
                      3. Realize energy auditing.<br></br>
                      4. Explain about various pillars of electricity market
                      design.<br></br>
                      5. To explain the scope of demand side management, its
                      concept and implementation issues and strategies.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseThree"
                      aria-expanded="false"
                      aria-controls="flush-collapseThree"
                    >
                      Course Outcome
                    </button>
                  </h2>
                  <div
                    id="flush-collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingThree"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body">
                      <b>
                        After the completion of the course student should be
                        able to:
                      </b>
                      <br></br>
                      1. Analyze about energy scenario nationwide and worldwide
                      , also outline Energy Conservation Act and its features.
                      <br></br>
                      2. Discuss load management techniques and energy
                      efficiency.<br></br>
                      3. Understand the need of energy audit and energy audit
                      methodology.<br></br>
                      4. Understand various pillars of electricity market
                      design.<br></br>
                      5. Conduct energy audit of electrical systems and
                      buildings.<br></br>
                      6. Show an understanding of demand side management and
                      energy conservation.
                    </div>
                  </div>
                </div>

                <div class="accordion-item">
                  <h2 class="accordion-header" id="flush-headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#flush-collapseFour"
                      aria-expanded="false"
                      aria-controls="flush-collapseFour"
                    >
                      Pedagogy:
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body details">
                      1. Course project on Energy Auditing (Team work)<br></br>
                      2. Case studies for energy auditing of
                      building.(Individual)<br></br>
                      3. MOOC courses identified in NPTEL / SWAYAM:<br></br>
                      <br></br>
                      <b>Project problems and Case studies:</b>
                      <br></br>
                      1. Energy conservation and auditing in building/ offices.
                      <br></br>
                      <br></br>
                      <p>
                        <b>Assessment</b>
                      </p>
                      <br></br>
                      <table class="table ">
                        <thead>
                          <tr>
                            <th scope="col">Sl.No</th>
                            <th scope="col">Activity</th>
                            <th scope="col">No. of activities</th>
                            <th scope="col">Marks per activity</th>
                            <th scope="col">Total marks for activity</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>CIE</td>
                            <td>3</td>
                            <td>10</td>
                            <td>30</td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>Unit Test</td>
                            <td>3</td>
                            <td>2</td>
                            <td>6</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Course project</td>
                            <td>1</td>
                            <td>4</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="colors" className="input">
            <select
              className="selectOption"
              onChange={(e) => {
                onValueChange(e);
              }}
              name="openelectives"
              class="form-select"
              aria-label="Default select example"
            >
              <option className="option">{professionalSubject}</option>
              <option className="option" selected>
                Please choose the subject
              </option>
            </select>
            {/* <input
              onChange={(e) => onValueChange(e)}
              type="text"
              name="openelectives"
              value={user.openelectives}
            /> */}
            {/* <button onClick={(e) => handleClick(e)}>Apply</button> */}
            <button
              onClick={() => {
                handleClick();
              }}
              className="buttonClick"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EECA;
