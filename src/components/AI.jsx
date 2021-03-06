import React, { useState, useEffect } from "react";
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

function AI() {
  const auth = localStorage.getItem("password");

  const professionalSubject = "Artificial Intelligence";

  const { id } = useParams();
  const history = useHistory();

  const [user, setUser] = useState(initialValues);
  const [display, setDisplay] = useState(initialValues);
  // const {
  //   Id,
  //   Name,
  //   Email,
  //   Password,
  //   Branch,
  //   openelectives,
  //   openelectiveconfirm,
  // } = user;

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

  return (
    <div>
      <Navbar />

      <div className="demo">
        <div className="title">
          <h2>
            {professionalSubject} <sub>18CS35</sub>
          </h2>
        </div>

        <div className="courses">
          {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

          <div className="box2">
            <ul>
              <li>Course Title: Introduction to Artificial Intelligence</li>
              <li>Course Code: 18CS753</li>
              <li>Course Type: Open Elective</li>
              <li>Duration: 14 Weeks</li>
              <li>Credit points: 03</li>
              <li>Intended audience: ECE / EEE / ME / CE</li>
              <li>Prerequisites: Nil</li>
              <li>Faculty: Dr. Yerriswamy T, Dept of CSE, KLEIT</li>
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
                      Module 1: What is artificial intelligence? Problems,
                      Problem Spaces and search
                      <br></br>
                      Module 2: Knowledge Representation Issues, Using Predicate
                      Logic, representing knowledge using Rules
                      <br></br>
                      Module 3: Symbolic Reasoning under Uncertainty,
                      Statistical reasoning
                      <br></br>
                      Module 4: Game Playing, Natural Language Processing
                      <br></br>
                      Module 5: Learning, Expert Systems.
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
                      1. Provide a fundamental understanding of Artificial
                      Intelligences and its foundation
                      <br></br>
                      2. Provide basic of Knowledge representation, reasoning,
                      game playing, natural language processing, learning and
                      expert systems.
                      <br></br>
                      3. Enable students to apply techniques in applications
                      which involve intelligent agents, expert artificial neural
                      networks and other machine learning models.
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
                      1. Demonstrate the fundamental understanding of Artificial
                      Intelligence and its foundations.
                      <br></br>
                      2. Apply the principles of AI in solutions that require
                      Knowledge representation, reasoning, game playing, natural
                      language processing, learning and expert systems.
                      <br></br>
                      3. Demonstrate awareness and a fundamental understanding
                      of various applications of AI techniques in intelligent
                      agents, expert systems, artificial neural networks and
                      other machine learning models.
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
                      1. Course project (Team work)
                      <br></br>
                      2. Case study (Individual)
                      <br></br>
                      3. MOOC courses identified in NPTEL / SWAYAM:
                      <br></br>
                      a. Appropriate course from Artificial intelligence by
                      Prof. Deepak Khemani, IIT Madras.
                      <br></br>
                      b. Course on Machine Learning by Prof. Balaraman
                      Ravindran, IIT Madras or Prof. Sudeshna Sarkar, IIT
                      Kharagpur.
                      <br></br>
                      <br></br>
                      Project problems and Case studies:
                      <br></br>
                      1. Use the machine vibration data for predicting the
                      failure of a machine.
                      <br></br>
                      2. Conduct a research literature survey on AI tools and
                      techniques for predicting the failure of a machine.
                    </div>
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
                    <br></br>
                    <b>Books:</b>
                    <br></br>
                    1: Elaine Rich, Kevin Knight, ???Artificial intelligence???,
                    Third Edition, McGraw-Hill, 1983<br></br>
                    2: Stuart Russell and Peter Norvig, ???Artifcial Intelligence:
                    A Modern Approach???, Third Edition, Prentice Hall Series in
                    Artificial Intelligence, 2010.
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

export default AI;
