import React from 'react'
// import logo from './klelogo.png';
// import face from './avatar1.png';
import './New.css';
// import brain from './brain.jpg';
// import mach from './mach.png';
// import network from './network.jpg';
import { NavLink } from 'react-router-dom';


// https://codemyui.com/awesome-box-shadow-effect-for-card-ui/





function New() {
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
             <div className="Welcome">
                 <h1>Welcome to KLEIT</h1>
             </div>
        </div>

    ) 
}


export default New


//media queries