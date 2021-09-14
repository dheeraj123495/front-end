import React from "react";
import { getUsers, deleteUser } from "../Service/api";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Button,
} from "@material-ui/core";
function AllUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const response = await getUsers();
    setUsers(response.data);
  };

  const deleteUserData = async (id) => {
    await deleteUser(id);
    getAllUsers();
  }
  const displayUsers = (user) => {
    return (

      <TableRow>
        {/* <TableCell>{user._id}</TableCell> */}
        <TableCell>{user.Name}</TableCell>
        <TableCell>{user._id}</TableCell>
        <TableCell>{user.Branch}</TableCell>
        <TableCell>{user.Email}</TableCell>
        <TableCell>
          <Button variant="contained" component={Link} to={`/edit/${user._id}`}>Edit</Button>
          <Button variant="contained" onClick={ () => deleteUserData(user._id)}>Delete</Button>
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
            <TableCell>BRANCH</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>OPEN ELECTIVE</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{users.map(displayUsers)}</TableBody>
      </Table>
    </div>
  );
}

export default AllUsers;
