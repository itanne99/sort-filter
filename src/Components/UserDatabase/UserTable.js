import React from "react";
import { Table } from "react-bootstrap";
import { UserRow } from "./UserRow";

export const UserTable = (props) => {

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
            <th>D.O.B.</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <UserRow key={`user-${user.id}`} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
