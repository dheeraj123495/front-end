import React, { useState, useEffect } from "react";
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

function ARM() {
  const auth = localStorage.getItem("password");

  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState(initialValues);
  let colors = [];

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

  if (user.openelectives == "") {
    colors.push("enable");
  } else {
    colors.push("disable");
  }
  const professionalSubject = "Arm Embedded Systems";

  return (
    <div>
      <Navbar />
      <div className="demo">
        <div className="title">
          <h2>
            <span>{professionalSubject} </span>
            <sub>18EC753</sub>
          </h2>
        </div>

        <div className="courses">
          {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

          <div className="box2">
            <ul>
              <li>Course Title: {professionalSubject}: </li>
              <li>Course Code: 18CS752</li>
              <li>Course Type: Open Elective</li>
              <li>Duration: 14 Weeks</li>
              <li>Credit points: 03</li>
              <li>Intended audience: ECE / TE</li>
              <li>Prerequisites: Nil</li>
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
                      Module 1: ARM Embedded Systems and Fundamentals
                      <br></br>
                      Module 2: Introduction to the ARM Instruction set
                      <br></br>
                      Module 3: Introduction to the THUMB instruction set
                      <br></br>
                      Module 4: Efficient C Programming Exception and Interrupt
                      Handling
                      <br></br>
                      Module 5: Firmware, Embedded Operating Systems
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
                      1. Understand the importance and applications of ARM
                      Design
                      <br></br>
                      2. Know the architecture of ARM processor
                      <br></br>
                      3. Use instruction sets of ARM processor
                      <br></br>
                      4. Analyze the adaptation of C code, firmware, OS,
                      Interrupts, caches, etc. in ARM embedded systems
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
                      1. Depict the organization, architecture, bus technology,
                      memory and operation of the ARM processors<br></br>
                      2. Employ the knowledge of Instruction set of ARM
                      processors to develop basic Assembly Language Programs
                      <br></br>
                      3. Recognize the importance of the Thumb mode of operation
                      of ARM processors<br></br>
                      4. Describe the techniques involved in writing C code for
                      ARM processors and Exception and Interrupt handling in ARM
                      Processors<br></br>
                      5. Describe the importance and use of Firmware, OS and
                      cache in ARM Embedded systems
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
                      1. Course Projects (Team Work)
                      <br></br>
                      2. NPTEL Videos
                      <br></br>
                      i. Introduction ARM Processor https://youtu.be/4VRtujwa_b8
                      <br></br>
                      ii. Architecture of ARM Processor
                      https://youtu.be/CuuIBvHrvtA<br></br>
                      iii. ARM Instruction Set https://youtu.be/UdY5RkkT7bg
                      <br></br>
                      iv. Interrupt Processing https://youtu.be/8Umh-E7bi_I
                      <br></br>
                      <br></br>
                      <b> Project problems and Case studies:</b>
                      <br></br>
                      i. Design and Implementation of Automatic Turn off for
                      Pump<br></br>
                      ii. Design and Implementation of Automatic Gate control
                      <br></br>
                      iii. Projects based on Alarm systems<br></br>
                      <br></br>
                      <p>
                        <b>Assessment</b>
                      </p>
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

export default ARM;
