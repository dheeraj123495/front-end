import React, { useState, useEffect } from "react";
import brain from "./brain.jpg";
import "./New";
import { NavLink } from "react-router-dom";
import "./demo.css";
import { useParams, useHistory } from "react-router-dom";
import { getUsers, editUser } from "../Service/api";
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

function PP() {
  const auth = localStorage.getItem("password");

  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState(initialValues);

  const handleClick = async () => {
    console.log(professionalSubject);
    console.log(user.openelectives);
    console.log(user);
    console.log(user);
    if (user.openelectives != "") {
      const response = await editUser(id, user);
      history.push(`/profile/${id}`);
    }
      // history.push(`/profile/${id}`);
    // } else {
    //   alert("Already applied...");
    // }
  };
  let colors = [];
  if (user.openelectives == "") {
    colors.push("enable");
  } else {
    colors.push("disable");
  }
  const onValueChange = (e) => {
    console.log(e.target.value);
    console.log(user)
    if(user.openelectives==""){
      setUser({ ...user, [e.target.name]: professionalSubject });
    }
    console.log(user);
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
  };

  const professionalSubject = "Python Application Programming";
  return (
    <div>
      <Navbar />
      <div className="demo">
        <div className="title">
          <h2>
            <span>{professionalSubject} </span>
            <sub>18CS752</sub>
          </h2>
        </div>

        <div className="courses">
          {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

          <div className="box2">
            <ul>
              <li>Course Title:: Python Application Programming </li>
              <li>Course Code: 18CS752</li>
              <li>Course Type: Open Elective</li>
              <li>Duration: 14 Weeks</li>
              <li>Credit points: 03</li>
              <li>Intended audience: ECE / EEE / ME / CE</li>
              <li>Prerequisites: Basic Programming</li>
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
                      Module 1: Why should you learn to write programs,
                      Variables, expressions and statements, Conditional
                      execution, Functions.
                      <br></br>
                      Module 2: Iteration, Strings, Files
                      <br></br>
                      Module 3: Lists, Dictionaries, Tuples, Regular Expressions
                      <br></br>
                      Module 4: Classes and objects, Classes and functions,
                      Classes and methods
                      <br></br>
                      Module 5: Networked programs, Using Web Services, Using
                      databases and SQL.
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
                      1. Learn Syntax and Semantics and create Functions in
                      Python.
                      <br></br>
                      2. Handle Strings and Files in Python.
                      <br></br>
                      3. Understand Lists, Dictionaries and Regular expressions
                      in Python.
                      <br></br>
                      4. Implement Object Oriented Programming concepts in
                      Python
                      <br></br>
                      5. Build Web Services and introduction to Network and
                      Database Programming in Python.
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
                      After the completion of the course student should be able
                      to:
                      <br></br>
                      1. Examine Python syntax and semantics and be fluent in
                      the use of Python flow control and functions.
                      <br></br>
                      2. Demonstrate proficiency in handling Strings and File
                      Systems.
                      <br></br>
                      3. Create, run and manipulate Python Programs using core
                      data structures like Lists, Dictionaries and use Regular
                      Expressions.
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
                      Pedagogy
                    </button>
                  </h2>
                  <div
                    id="flush-collapseFour"
                    class="accordion-collapse collapse"
                    aria-labelledby="flush-headingFour"
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div class="accordion-body details">
                      1. Practical Based Learning
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
                            <td>Assignment</td>
                            <td>2</td>
                            <td>2</td>
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

export default PP;
