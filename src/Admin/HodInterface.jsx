import React, { useState, useEffect } from "react";
import { getUsers } from "../Service/api";
import { useParams } from "react-router-dom";
import firebaseDb from "../firebase";
import "./HodInterface.css";
import { initial } from "lodash";

const initialValue = {
  name: "",
  usn: "",
  username: "",
  email: "",
};

function HodInterface() {
  const { id } = useParams;
  const [users, setUsers] = useState(initialValue);
  const [hod, setHod] = useState();
  const [display, setDisplay] = useState(initialValue);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    let newUserState = [];
    const userRef = firebaseDb.database().ref("users");
    userRef.on("value", (snapshot) => {
      snapshot.forEach((data) => {
        const dataVal = data.val();
        newUserState.push({
          id: data.key,
          name: dataVal.name,
          account: dataVal.account,
        });
      });
    });
    setUsers(newUserState);
    
    // const response = await getUsers();
    // setUsers(response.data);
  };

  const displayUsers = () => {
    // if (user.Branch == "Civil") {
    return (
      <tbody>
        <tr>
          <th scope="row">{users.id}</th>
          <td>{users.Name}</td>
          <td>{users.Branch}</td>
          <td>{users.openelectives}</td>
        </tr>
      </tbody>
    );
    // }
  };

  const userList = () => {
    console.log(users);
    console.log("Hello");
  };
  return (
    <div>
      <div className="hodTitle">
        <table className="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">Usn</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Subject</th>
            </tr>
          </thead>
          <button
            onClick={() => {
              userList();
            }}
          >
            Click me
          </button>
          {/* {users.map(displayUsers)} */}
        </table>
      </div>
    </div>
  );
}

export default HodInterface;
