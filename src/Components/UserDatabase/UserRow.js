import React from "react";
import { Image } from "react-bootstrap";

export const UserRow = (props) => {
  return (
    <tr>
      <td><Image thumbnail src={props.user.avatar} alt={`User Avatar`} /></td>
      <td>{props.user.full_name}</td>
      <td>{props.user.username}</td>
      <td>{props.user.email}</td>
      <td>{props.user.department}</td>
      <td>{props.user.birthday}</td>
    </tr>
  );
};
