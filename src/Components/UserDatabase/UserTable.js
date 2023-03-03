import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { ErrorToast } from "../Error/ErrorToast";
import { UserRow } from "./UserRow";

const baseURL = "https://api.mockaroo.com/api/a92778b0";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          count: "25",
        key: "db10aca0", /*  */
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {setError(error)});
  }, []);

  useEffect(() => {
    console.log(error);
  }, [error])

  return (
    <>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Department</th>
            <th>Birthday</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow key={`user-${user.id}`} user={user} />
          ))}
        </tbody>
      </Table>
      {!error ? "" : <ErrorToast error={error} />}
    </>
  );
};
