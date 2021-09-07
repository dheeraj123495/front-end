import React, {useState, useEffect} from 'react'
// import logo from './klelogo.png';
// import face from './avatar1.png';
// import brain from './brain.jpg';
import {useHistory} from 'react-router-dom'
import './Prof.css';
import { getUsers } from '../Service/api';
import {useParams} from "react-router-dom"

const initialValues = {
    id: "",
    Name: "",
    Email: "",
    Password: "",
    Branch: "",
    openelectives: "",
    openelectiveconfirm: "",
};

function Profile() {

    const auth = localStorage.getItem('password')

    const history = useHistory();

    const handleClick = () => {
        localStorage.clear();
        history.push('/login');
    }

    const { id } = useParams();
    const [user, setUser] = useState(initialValues);

    useEffect(() => {
        getAllUsers();
    }, []);

    const getAllUsers = async () => {
        const response = await getUsers(id);
        console.log(response.data);
        setUser(response.data);
        authentication();
    }

    // window.onfocus = () => {
    //     if(auth!=user.Password){
    //         handleClick();
    //     }
    //  }

    document.onclick = () => {
        if(auth!=user.Password){
            handleClick();
        }
    }
       

    const authentication = () => {
        if(!auth){
            handleClick();
        }
    }
    return (
        <div>
            <div class="mybox">
                {/* <img src={face} class="brain" alt="" /> */}
                <span class="ai">Profile</span>
                <form class="form">
                    <label>
                        
                        <p>NAME: {user.Name}</p>
                    </label>
                    <label>
                        <p>USN: {user.id}</p>                    </label>
                    <table class="table table-striped table-dark">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">SUBJECT-CODE</th>
                                <th scope="col">SUBECT</th>
                                <th scope="col">Decision</th>

                            </tr>
                        </thead><br />
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <th>18CS54</th>
                                <th>{user.openelectives}</th>
                                <th>{user.openelectiveconfirm}</th>
                            </tr>
                            {/* <tr>
                                <th scope="row">2</th>
                                <td>18CS98</td>
                                <td>Artificial intelligence</td>
                            </tr> */}
                            {/* <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                            </tr> */}
                        </tbody>
                    </table>
                    {/* <br /><br /><input type="submit" value="Submit" /> */}

                    <button onClick={ () => handleClick()}>Logout</button>
                    

                </form>
            </div>
        </div>
    )
}

export default Profile