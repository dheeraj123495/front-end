import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../Service/api.js";
import "./Login.css";
import { useHistory, useParams } from "react-router-dom";

const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
  auth: "",
};

const Login = () => {
  const [user, setUser] = useState(initialValues);

  const { ID, Name, Email, Password, auth } = user;

  const { id } = useParams();

  let history = useHistory();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers(id);
    console.log(response.data);
    setUser(response.data);
  };

  const onValueChange = (e) => {
    console.log(user);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const confirm = async (e) => {
    e.preventDefault();

    const userData = await getUsers(id);
    console.log(userData.data)
    console.log(user)
    if(userData.Password != user.auth){
        alert("login successful");
        setUser(id);
        history.push(`/profile/${id}`);
    } else{
        alert("Error");
    }
  };

  return (
    <div className="body">
      <div className="head">
        <h1>KLE IT</h1>
        <h2>Login</h2>

        <form action="">
          <div className="login">
            {/* <div className="USN">
              <input
                onChange={(e) => onValueChange(e)}
                name="id"
                value={id}
              />
              <label>USN</label>
            </div> */}

            <div className="Password">
              <input
                onChange={(e) => onValueChange(e)}
                name="auth"
                value={auth}
              />
              <label>Password</label>
            </div>

            <div className="buttonProfile">
              <button onClick={(e) => confirm(e)}>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
