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

function Maths() {
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

  const professionalSubject = "Advanced Mathematical Methods";

  return (
    <div>
      <Navbar />

      <div className="demo">
        <div className="title">
          <h2>
            <span>{professionalSubject} </span>
            <sub>18MAT753</sub>
          </h2>
        </div>

        <div className="courses">
          {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

          <div className="box2">
            <ul>
              <li>Course Title: Advanced Mathematical Methods</li>
              <li>Course Code: 17CV662 </li>
              <li>Course Type: Open Elective</li>
              <li>Duration: 14 Weeks</li>
              <li>Credit points: 03</li>
              <li>Intended audience: : Open to all Programs of engineering </li>
              <li>Prerequisites: Nil</li>
              <li>Faculty: Dr.V.S.Madalli, KLEIT</li>
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
                      Module 1: Numerical Methods-1<br></br>
                      Module 2: Numerical Methods-2<br></br>
                      Module 3: Complex Analysis<br></br>
                      Module 4: Descriptive Statistic<br></br>
                      Module 5: Stochastic Process and Queuing theory
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
                      1. Learn Eigen values of real symmetric matrices and Roots
                      of polynomial equations by various methods.<br></br>
                      2. Numerical solution for PDE’s<br></br>
                      3. Learning Analytic function and their various properties
                      and applications.<br></br>
                      4. Sampling and testing the statistical hypothesis
                      <br></br>
                      5. Classification of stochastic process
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
                      1. Demonstrate the applications of numerical methods to
                      find the roots of polynomial equations and eigen values of
                      real symmetric matrices.<br></br>
                      2. Apply various numerical methods for solving linear
                      partial differential equations arising in engineering
                      field.<br></br>
                      3. Develop expansion of functions of complex variables in
                      terms of Laurent’s series, explain ideas related to the
                      calculus of residues and contour 4. Understand the facts
                      related hypothesis testing and analyze the analysis of
                      variance for larger samples.<br></br>
                      5. Apply the knowledge of stochastic process, queuing
                      theory, in solving problems arising in various physical
                      and engineering phenomena
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
                      • Chalk and talk method<br></br>• MOOC courses identified
                      in NPTEL / SWAYAM:
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
                            <td>2</td>
                            <td>2</td>
                            <td>4</td>
                          </tr>
                        </tbody>
                      </table>
                      <b> Books:</b>
                      <br></br>
                      1: Mathematical Methods for Physics and Engineering K.F.
                      Riley, M.P.Hobson and S.J.Bence , Cambridge University
                      Press, 3 rd Edition, 2017.<br></br>
                      2:Advanced Engineering Mathematics E. Kreyszig , John
                      Wiley and Sons, 10thEd.,(Reprint), 2017.<br></br>
                      3:Probability, Statistics and Random Process T.Veerarajan
                      Tata Mc-Graw Hill Co. 3 rd Edition, 2016
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

export default Maths;
