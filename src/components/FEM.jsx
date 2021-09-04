import React from 'react'
import "./demo.css"
import { NavLink } from 'react-router-dom'
function FEM() {

    const buttonClicked = () => {
        console.log("Button clicked...")
    }

    const button = () => {
        console.log("Hello")
    }
    const professionalSubject = " Finite Element Method ";
    return (
        <div>
            <div className="demo">
                <div className="title">
                    <h2><span>{professionalSubject} </span><sub>18CV751</sub></h2>

                </div>

                <div className="courses">
                    {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

                    <div className="box2">
                        <ul>
                            <li>Course Title::  Finite Element Method </li>
                            <li>Course Code: 18CV751</li>
                            <li>Course Type: Open Elective</li>
                            <li>Duration: 14 Weeks</li>
                            <li>Credit points: 03</li>
                            <li>Intended audience:  ME / CSE / IS /EC /EEE</li>
                            <li>Prerequisites: 1. To learn Finite Element Method (FEM), you need a solid understanding of the related
                                mathematics, including linear and tensor algebra, differential and integral calculus and Theory
                                of elasticity</li>
                             <li>Faculty: Prof P.M Topalakatti, Department of Civil Engg, KLEIT Hubball</li>
                               
                            <br></br>
                        </ul>
                    </div>
                    <div className="box3">
                        <div className="dropCollapse">
                            <div class="accordion accordion-flush " id="accordionFlushExample">
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingOne">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                            Course Layout
                                        </button>
                                    </h2>
                                    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            Module 1: Introduction, Theory of elasticity concepts, approximate methods of Structural analysis.
                                            <br></br>
                                            Module 2: Discretization, shape functions for one and two dimensional elements
                                            <br></br>
                                            Module 3: 2D formulations, nodal elements, Numerical Evaluation of Element Stiffness.

                                            <br></br>
                                            Module 4: Isoparametric elements, internal nodes and higher order elements, Numerical integration.
                                            <br></br>
                                            Module 5: Techniques to solve nonlinearities in structural systems, Structure of computer program for
                                            FEM analysis
                                        </div>
                                    </div>
                                </div>


                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                            Course Objectives
                                        </button>
                                    </h2>
                                    <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            1. Develop analytical skills.
                                            <br></br>
                                            2.  Learn principles of analysis of stress and strain
                                            <br></br>
                                            3. Develop problem solving skills.
                                            <br></br>
                                            4.  Understand the principles of FEM for one and two dimensional problems

                                        </div>
                                    </div>
                                </div>



                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingThree">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                            Course Outcome
                                        </button>
                                    </h2>
                                    <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body">
                                            After the completion of the course student should be able to:
                                            <br></br>
                                            1. The student will have the knowledge on advanced methods of analysis of structures.
                                        </div>
                                    </div>
                                </div>


                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Pedagogy
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body details">
                                            1. Course book.
                                            2. MOOC courses identified in NPTEL / SWAYAM:
                                            a. Course on Introduction to Finite Element Method by Dr.R.Krishnakumar, IIT Madras.
                                            b. Course on Basics of Finite Element Method by Dr.K.M.singh, IIT Roorkee or Prof.
                                            Nachiketa Tiwari, IIT Kanpur
                                            <br></br>
                                            Course Assignment:
                                            1. Problems based on approximate method & direct methods in FEM
                                            <br></br>
                                            2. Problems based on calculations of seripidity, Lagrange family elements & Isoparametric
                                            elements
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


                    <button onClick={() => { buttonClicked() }} className="btn">Apply</button>
                      <NavLink type="Link" exact to="./Civil" >
                    <button onClick={() => { button() }} className="btn">Previous</button>
                    </NavLink>


                </div>

            </div>
        </div>
    )
}

export default FEM
