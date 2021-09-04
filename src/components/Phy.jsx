
import React from 'react'
import "./demo.css"
import { NavLink } from 'react-router-dom'
function Physics() {

    const buttonClicked = () => {
        console.log("Button clicked...")
    }

    const button = () => {
        console.log("Hello")
    }
    const professionalSubject = " Advanced Physics For Engineers ";

    return (
        <div>
            <div className="demo">
                <div className="title">
                    <h2><span>{professionalSubject} </span><sub>18PHY751</sub></h2>

                </div>

                <div className="courses">
                    {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

                    <div className="box2">
                        <ul>
                            <li>Course Title: Advanced Physics For Engineers </li>
                            <li>Course Code: 18CS751</li>
                            <li>Course Type: Open Elective</li>
                            <li>Duration: 14 Weeks</li>
                            <li>Credit points: 03</li>
                            <li>Intended audience: ECE / EEE / ME / CV</li>
                            <li>Prerequisites: Nil</li>
                            <li>Faculty: Dr. S.N. Mathad, And Dr. Anita. R.N , Dept.of Physics, KLEIT</li>
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
                                            Module 1: Raman Spectroscopy
                                            Module 2: Quantum Mechanics
                                            Module 3: Quantum Computing
                                            Module 4: Environmental and Nuclear Hazards
                                            Module 5: Special Theory of Relativity

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
                                            1. Learn Quantum mechanics, Raman spectroscopy and its theoretical background with
                                            applications
                                            2. Explore the fundamentals of Quantum computation
                                            3. Recognize Nuclear and environmental hazards with their implications
                                            4. Understand Special theory of relativity and its relevance in latest applications


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
                                            <b>After the completion of the course student should be able to:</b>
                                            1. Apply the concept of Raman spectroscopy to various fields including medicine.
                                            2. Utilize the principles of quantum mechanics in tunnelling problems.
                                            3. Understand the developments in modern computing.
                                            4. CO 4: Identify the basic environmental and nuclear hazards.
                                            5. Distinguish between relativistic and non-relativistic motion and its relevance to terrestrial




                                        </div>
                                    </div>
                                </div>


                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="flush-headingTwo">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                                            Pedagogy:
                                        </button>
                                    </h2>
                                    <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                                        <div class="accordion-body details">

                                            <br></br>
                                            1:Chalk and talk method
                                            2:Course project (Team work)
                                            3:MOOC courses identified in NPTEL / SWAYAM:



                                            <p><b>Assessment</b></p>
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
                                            <b>Books</b>
                                            1:Concepts of Modern physics, Arthur Beiser, McGraw-Hill
                                            Publishing,2006
                                            2:Fundamentals of Molecular Spectroscopy ,Colin N. Banwell and Elaine
                                            M. McGraw-Hill
                                            Publishing,2006
                                            3:Quantum computation and quantum information, M.A. Nielsen and I.L.
                                            Chuang, Cambridge University Press, 2012
                                            4:Chemistry and Physics of Air pollution and climate change,John. H.
                                            Seinfield,Wiley,2011

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <button onClick={() => { buttonClicked() }} className="btn">Apply</button>
                    <NavLink type="Link" exact to="./Physics" >
                    <button onClick={() => { button() }} className="btn">Previous</button>
                    </NavLink>


                </div>

            </div>
        </div>
    )
}

export default Physics
