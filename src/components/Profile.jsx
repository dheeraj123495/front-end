import React, { useState, useEffect } from "react";
import "./Profile.css";
import { useParams, useHistory } from "react-router-dom";
import firebaseDb from "../firebase";
const initialValues = {
  Name: "",
  Email: "",
  Password: "",
  Branch: "",
  openelectives: "",
  openelectiveconfirm: "",
};

function Profile() {
  const history = useHistory();

  const [users, setUser] = useState(initialValues);
  // const [display, setDisplay] = useState(initialValues);
  const { id } = useParams();

  useEffect(() => {
    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const userRef = firebaseDb.database().ref(`users/${id}`);
    userRef.on("value", (snapshot) => {
      if (snapshot.val()) {
        console.log(snapshot.val());
        setUser(snapshot.val());
      } else {
        alert("Please enter a valid ID...");
      }
    });
  };

  const handleClick = () => {
    history.push("/login");
  };

  const handleHomePage = () => {
    history.push(`/New/${id}`);
  };

  return (
    <div>
      
      <div className="profile">
        <div className="mainProfile">
          <div className="name">
            <h1>
              Welcome, <span className="userName"> {users.Name} </span>
            </h1>
          </div>
          <div className="details">
            <h2>Email: {users.Email}</h2>
            <h2>USN: {users.id}</h2>
            <h2>Branch: {users.Branch}</h2>
          </div>

          <div className="cells">
            <div className="cell heading">Subject</div>
            {/* <div className="cell heading">Subject Code</div> */}
            <div className="cell heading">Confirmation</div>
            <div className="cell">{users.openelectives}</div>
            {/* <div className="cell">18EC37</div> */}
            <div className="cell">{users.openelectiveconfirm}</div>
          </div>
          <div className="buttonProfile">
            <button onClick={() => handleClick()}>Log Out</button>
            <button onClick={() => handleHomePage()}>Home Page</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
