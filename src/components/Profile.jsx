import React from 'react'
// import logo from './klelogo.png';
import face from './avatar1.png';
// import brain from './brain.jpg';
import './Prof.css';


function Profile() {
    return (
        <div>
            <div class="mybox">
                <img src={face} class="brain" alt="" />
                <span class="ai">Profile</span>
                <form class="form">
                    <label>
                        Name <t></t>
                        <input type="text" name="name" />
                    </label>
                    <br /><br />
                    <label>
                        USN <t></t> <t></t>
                        <input type="text" name="name" />
                    </label>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">SUBJECT-CODE</th>
                                <th scope="col">SUBECT</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>18CS54</td>
                                <td>Machine Learning</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>18CS98</td>
                                <td>Artificial intelligence</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                            </tr>
                        </tbody>
                    </table>
                    <br /><br /><input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    )
}

export default Profile
