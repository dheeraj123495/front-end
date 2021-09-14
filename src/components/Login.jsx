import React from "react";
import { useState, useEffect } from "react";
import { getUsers } from "../Service/api.js";
import "./Login.css";
import { useHistory } from "react-router-dom";
const initialValues = {
  id: "",
  Name: "",
  Email: "",
  Password: "",
};
const Login = () => {
  const [user, setUser] = useState(initialValues);
  const { id, Name, Email, Password, auth } = user;
  let history = useHistory();
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user)
  };

  const confirmation = (e) => {
    e.preventDefault();
  }
  const confirm = async (e) => {
    e.preventDefault();
    console.log(id);
    const response = await getUsers(id);
    if (id == response.data.id && Password == response.data.Password) {
      alert("Login Successful...");
      localStorage.setItem("password", `${Password}`);
      history.push(`/profile/${id}`);
    } else {
      console.log("Error occured...");
      setUser(initialValues);
      alert("Login failed...");
    }
  };
  return (
    <div className="body">
      <div className="head">
        <h1>KLE Institute of Technology</h1>
        <h2>Login</h2>
        <form action="">
          <div className="login">
            <div className="USN">
              <input
                onChange={(e) => onValueChange(e)}
                name="id"
                value={id}
              />
              <label>USN</label>
            </div>
            <div className="Password">
              <input
                type="password"
                onChange={(e) => onValueChange(e)}
                name="Password"
                value={Password}
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
