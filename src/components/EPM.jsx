
import React from 'react'
import "./demo.css"
import { NavLink } from 'react-router-dom'
function EPM() {

    const buttonClicked = () => {
        console.log("Button clicked...")
    }

    const button = () => {
        console.log("Hello")
    }
    const professionalSubject = " Electrical Energy Conservation and Auditing ";

    return (
        <div>
            <div className="demo">
                <div className="title">
                    <h2><span>{professionalSubject} </span><sub>17CV662 </sub></h2>

                </div>

                <div className="courses">
                    {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

                    <div className="box2">
                        <ul>
                            <li>Course Title: Environmental Protection and Management</li>
                            <li>Course Code:  17CV662 </li>
                            <li>Course Type: Open Elective</li>
                            <li>Duration: 14 Weeks</li>
                            <li>Credit points: 03</li>
                            <li>Intended audience: : Students of all UG programs. </li>
                            <li>Prerequisites: Basic knowledge of Environmental Science and Sustainability concepts in engineering.</li>
                            <li>Faculty in charge: Prof. D.R.Kulkarni,Department of Civil Engineering,KLEIT, Hubballi</li>
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
                                            Module 1: Environmental Management Standards.<br></br>
                                            Module 2: Environmental Management Objectives.<br></br>
                                            Module 3: Environmental Management System.<br></br>
                                            Module4:Environmental Audit.<br></br>
                                            Module5: Applications of Environmental Management System.
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
                                            This course will enable students to gain knowledge in Environmental protection and Management
                                            systems.
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
                                            <b>After the completion of the course student should be able to:</b><br></br>
                                            1. Appreciate the elements of Corporate Environmental Management Systems complying to
                                            international environmental management system standards.<br></br>
                                            2. Lead the pollution prevention assessment team and implement wasteminimization options.<br></br>
                                            3. Develop, implement, maintain and audit Environmental Management Systems for
                                            organization.<br></br>

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
                                            1. Coursebook.<br></br>
                                            2. MOOCcoursesidentifiedinNPTEL/ SWAYAM:<br></br>
                                            a. Course on Environment Management (web course) by Dr.T.V.Ramachandra,IISC,
                                            Bangalore.<br></br>
                                            b. CourseonIntroduction to Environmental Science and Engineering- Fundamental and
                                            Sustainability concepts byDrBrajesh Kumar Dubey, IIT Kharagpur<br></br>
                                            <br></br>

                                            <p><b> Course Assignments</b></p>
                                            1. Obtain a form for submission of Environmental Statement from local pollution control board
                                            office and list benefits of this statement.<br></br>
                                            2. Conduct waste audit of local industry and submit a waste audit report.<br></br>
                                            3. Case studies of greening industries.
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
                                            <b>Reference Books:</b><br></br>
                                            1. ChristopherSheldonandMarkYoxon,“InstallingEnvironmentalmanagementSystems–a
                                            Step by step guide” Earthscan Publications Ltd, London, 1999.<br></br>
                                            2. ISO14001/14004:Environmentalmanagementsystems–RequirementsandGuidelines–
                                            InternationalOrganisationforStandardisation, 2004.
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

export default EPM
