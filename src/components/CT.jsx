
import React from 'react'
import "./demo.css"
import { NavLink } from 'react-router-dom'

function CT() {

    const buttonClicked = () => {
        console.log("Button clicked...")
    }

    const button = () => {
        console.log("Hello")
    }
    const professionalSubject = "Communication Theory  ";

    return (
        <div>
            <div className="demo">
                <div className="title">
                    <h2><span>{professionalSubject} </span><sub>18CS751</sub></h2>

                </div>

                <div className="courses">
                    {/* <div className="box1"> <h3>Faculty: Dr. Yerriswammy<sub>M. tech, PHD</sub></h3></div> */}

                    <div className="box2">
                        <ul>
                            <li>Course Title: Communication Theory </li>
                            <li>Course Code: 18CS751</li>
                            <li>Course Type: Open Elective</li>
                            <li>Duration: 14 Weeks</li>
                            <li>Credit points: 03</li>
                            <li>Intended audience: ECE / EEE / ME /CV</li>
                            <li>Prerequisites:  Familiarity with a Signals and a systems</li>
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
                                            Module 1: Introduction to Electronic Communications
                                            <br></br>
                                            Module 2: Noise, Amplitude Modulation Techniques, Angle Modulation Techniques, Analog
                                            Transmission and Reception
                                            <br></br>
                                            Module 3: Sampling theorem, and Pulse Modulation Techniques
                                            <br></br>
                                            Module 4: Digital Modulation Techniques, Source and Channel Coding
                                            <br></br>
                                            Module 5: Evolution of wireless Communication Systems, Principles of Cellular Communications

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
                                            1. Describe essential elements of electronic communications.<br></br>
                                            2. Understand amplitude, frequency and phase modulations and amplitude demodulation.<br></br>
                                            3. Explain the basics of sampling and quantization.<br></br>
                                            4. Understand the various digital modulation schemes.<br></br>
                                            5. Learn the concepts of wireless communication.


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

                                            1. Describe the operation of communication systems.<br></br>
                                            2. Understand the techniques of amplitude and angle modulation.<br></br>
                                            3. Understand the concepts of sampling and quantization.<br></br>
                                            4. Understand the concepts of different digital modulation techniques.<br></br>
                                            5. Describe the principles of wireless communication systems.


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
                                            1. Course project (Teamwork)<br></br>
                                            2. Case study(Individual)<br></br>
                                            3. MOOC courses identified in NPTEL /SWAYAM, Coursera:<br></br>
                                            a. Analog Communication, by Prof. Goutam Das, Indian Institute of Technology,
                                            Kharagpur, NPTEL.<br></br>
                                            b. Selected videos on ”Digital Communication”, coordinated by IIT Bombay, NPTEL.<br></br>
                                            c. Wireless Communication for Everybody, Coursera, offered by Yonsei University.
                                            <br></br>
                                            <b>Project problems and Case studies:</b>
                                            <br></br>
                                            1. Use suitable circuits to verify (i) Sample and hold for analog to digital conversion (ii) PWM
                                            using 555 timer IC (iii) ASK, PSK and FSK digital modulation schemes.<br></br>
                                            2. Using Matlab, implement a channel coding and decoding for any one type of error control code
                                            add AWGN and test results for decoded output.<br></br>
                                            3. Conduct a research literature survey on beyond 5G and 6G requirements and techniques in the
                                            areas of modulation schemes/ channel coding /antenna systems.
                                            <br></br><br></br>


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

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>


                    <button onClick={() => { buttonClicked() }} className="btn">Apply</button>
                    <NavLink type="Link" exact to="./EC" >
                        <button onClick={() => { button() }} className="btn">Previous</button>
                    </NavLink>

                </div>

            </div>
        </div>
    )
}

export default CT
