import React, {useState, useEffect} from "react";
import "./Profile.css";
import {useParams, useHistory} from "react-router-dom"
import { getUsers } from "../Service/api";

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

    useEffect(() => {
        getAllUsers();
    },[])

    const getAllUsers = async () => {
        const response = await getUsers(id);
        console.log(response.data);
        setUser(response.data);
    }

    // document.onclick = () => {
    //     if(auth!=user.Password){
    //         handleClick();
    //     }
    // }
       

  

    const handleHomePage = () => {
        history.push(`/New/${id}`);
    }

  return (
    <div className="profile">
      <div className="mainProfile">
        <div className="name">
          <h1>Welcome, <span className="userName"> {user.Name} </span></h1>
        </div>
        <div className="details">
          <h2>Email: {user.Email}</h2>
          <h2>USN: {id}</h2>
          <h2>Branch: {user.Branch}</h2>
        </div>

        <div className="cells">
          <div className="cell heading">Subject</div>
          {/* <div className="cell heading">Subject Code</div> */}
          <div className="cell heading">Confirmation</div>
          <div className="cell">{user.openelectives}</div>
          {/* <div className="cell">18EC37</div> */}
          <div className="cell">{user.openelectiveconfirm}</div>
        </div>
        <div className="buttonProfile">
          <button  onClick={()=>handleClick()}>Log Out</button>
          <button onClick={()=>handleHomePage()}>Home Page</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;