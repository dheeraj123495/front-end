import React from 'react'
import brain from './brain.jpg';
import './New'
import { NavLink } from 'react-router-dom';
function Civil() {
    return (
        <div>
            <div id="sidebox">

                <div className="sidebar-container">

                    <ul className="sidebar-navigation">
                        <li className="header"><i className="fas fa-angle-double-right" aria-hidden="true"></i> Open-Elective</li>
                        <NavLink type="Link" exact to="./CSE" >
                            <li>
                                <a href="/#">
                                    <i className="fas fa-laptop-code" aria-hidden="true"></i> <span id="mytext">  Computer Science</span>

                                </a>
                                {/* <NavLink exact to="./">CSE</NavLink> */}
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./EC" >
                            <li>
                                <a href="/#">
                                    <i className="fas fa-robot" aria-hidden="true"></i>   E&C
                                </a>
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./EE" >
                            <li>
                                <a href="/#">
                                    <i className="fas fa-plug" aria-hidden="true"></i>  EEE
                                </a>
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./Mechanical" >
                            <li>
                                <a href="/#">
                                    <i className="fas fa-cogs" aria-hidden="true"></i>  MECHANICAL
                                </a>
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./Civil" >
                            <li>
                                <a href="/#">
                                    <i className="far fa-building" aria-hidden="true"></i> CIVIL
                                </a>
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./Maths" >
                            <li>
                                <a href="/#">
                                    <i className="fas fa-square-root-alt"></i> DEPT OF MATHEMATICS
                                </a>
                            </li>
                        </NavLink>
                        <NavLink type="Link" exact to="./Physics" >
                            <li>
                                <a href="/#">
                                    <i className="far fa-lightbulb"></i> DEPT OF PHYSICS
                                </a>
                            </li>
                        </NavLink>
                    </ul>
                </div>

            </div>
            <div id="mainbox">
            <NavLink type="Link" exact to="./FEM" >
                <div class="mybox">
                    <img src={brain} class="brain" alt="" />

                    <span class="ai">Finite element method</span>
                    <span class="aicode">18cs45</span>

                    {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
                </div>
            </NavLink>
            </div>

            <div id="mainbox4">
            <NavLink type="Link" exact to="./NMA" >
                <div class="mybox2">
                    <img src={brain} class="brain" alt="" />

                    <span class="ai">Numerical methods and applications</span>
                    <span class="aicode">18cs45</span>

                    {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
                </div>
                </NavLink>
            </div>
            <div id="mainbox4">
            <NavLink type="Link" exact to="./EPM" >
                <div class="mybox3">
                    <img src={brain} class="brain" alt="" />

                    <span class="ai">Environmental protection and managment </span>
                    <span class="aicode">18cs45</span>

                    {/* <button type="button" class="btn" id="applybtn"><b>Apply</b><i class="fas fa-arrow-alt-circle-right"></i></button> */}
                </div>
                </NavLink>
            </div>
        </div>
    )
}

export default Civil