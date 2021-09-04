import React, {useState, useEffect} from "react";
import "./Profile.css";
import {useParams, useHistory} from "react-router-dom"
import { NavLink } from "react-router-dom";
// import { getUsers } from "../Service/api";
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


    const [user, setUser] = useState(initialValues)
    const {id} = useParams();

    //  useEffect(() => {
    //     getAllUsers();
    // },[])

    // const getAllUsers = async () => {
    //     const response = await getUsers(id);
    //     console.log(response.data);
    //     setUser(response.data);
    //     authentication();
    // }

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

    const handleHomePage = () => {
        history.push("/trial");
    }

  return (
    <div className="profile">
      <div className="mainProfile">
        <div className="name">
          <h1>Welcome, {user.Name}</h1>
        </div>
        <div className="details">
          <h3>Email: {user.Email}</h3>
          <h3>USN: {id}</h3>
          <h3>Branch: {user.Branch}</h3>
        </div>

        <div className="cells">
          <div className="cell heading">Subject</div>
          <div className="cell heading">Subject Code</div>
          <div className="cell heading">Confirmation</div>
          <div className="cell">{user.openelectives}</div>
          <div className="cell">18EC37</div>
          <div className="cell">{user.openelectiveconfirm}</div>
        </div>
        <div className="button">
          <button onClick={()=>handleClick()}>Log Out</button>
          <NavLink type="Link" exact to="./New" >
          <button onClick={()=>handleHomePage()}>Home Page</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Profile;
