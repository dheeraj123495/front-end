import React from "react";
import { getUsers, deleteUser } from "../Service/api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './AllUsers.css'
import firebaseDb from "../firebase";

import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";

function AllUsers() {
  const [users, setUsers] = useState();

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {

    const userRef = firebaseDb.database().ref("Users");

    userRef.on('value', (snapshot) => {
      const user = snapshot.val();
      const userList = [];

      // console.log(user);
      // const displayFormat = JSON.stringify(todos);
      // console.log(displayFormat)
      // setUsers(todos);
      // console.log(users);
      
      for (let id in user){
        userList.push({ id, ...user[id]});
      }
      setUsers(userList);
      console.log(users);
    });


    // const response = await getUsers();
    // setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    const userRef = firebaseDb.database().ref(`Contacts/${id}`);
    console.log(userRef.path);
    userRef.remove();
    // await deleteUser(id);
    // getAllUsers();
  }

  const displayUsers = (user) => {
    return (
      <TableRow>
        {/* <TableCell>{user._id}</TableCell> */}
        <TableCell>{user.name}</TableCell>
        <TableCell>{user.usn}</TableCell>
        <TableCell>{user.username}</TableCell>
        <TableCell>{user.email}</TableCell>
        <TableCell>
          <Button variant="contained" component={Link} to={`edit/${user.id}`}>Edit</Button>
          <Button variant="contained" onClick={ () => deleteUserData(user.id)}>Delete</Button>
        </TableCell>
      </TableRow>
    );
  };

  return (
    <div className="allUser">
      <Table>
        <TableHead>
          <TableRow>
          {/* <TableCell>ID</TableCell> */}
            <TableCell>NAME</TableCell>
            <TableCell>USN</TableCell>
            <TableCell>USER NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        {/* <div>
          {users.name}
        </div> */}

        <TableBody>{ users ? users.map(displayUsers) : "No users to display..."}</TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
