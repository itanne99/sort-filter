import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { UserRow } from "./UserRow";
import _ from "lodash";

const findValueInArrayOfObjects = (array, value) => {
  return _.filter(array, (obj) => {
    return _.some(obj, (propValue) => {
      return _.includes(propValue.toString(), value.toString());
    });
  });
};

const sortArrayByOption = (array, option) => {
  switch (option) {
    case "1":
      return _.sortBy(array, "full_name");
    case "2":
      return _.sortBy(array, "full_name").reverse();
    case "3":
      return _.sortBy(array, "username");
    case "4":
      return _.sortBy(array, "username").reverse();
    case "5":
      return _.sortBy(array, "email");
    case "6":
      return _.sortBy(array, "email").reverse();
    case "7":
      return _.sortBy(array, "department");
    case "8":
      return _.sortBy(array, "department").reverse();
    case "9":
      return _.sortBy(array, "birthday");
    case "10":
      return _.sortBy(array, "birthday").reverse();
    default:
      return array;
  }
};

const filterArrayByDepartment = (array, departments) => {
  const filteredDepartments = Object.entries(departments)
    .filter(([_, value]) => value)
    .map(([key, _]) => key);

  if (filteredDepartments.length === 0) {
    return array;
  }

  return array.filter((user) => {
    return filteredDepartments.some(
      (department) => user.department === department
    );
  });
};

export const UserTable = (props) => {
  const [users, setUsers] = useState(props.users);

  useEffect(() => {
    let filteredUsers = props.users;

    if (props.filterControl.Search) {
      filteredUsers = findValueInArrayOfObjects(
        filteredUsers,
        props.filterControl.Search
      );
    }

    if (props.filterControl.Sort) {
      filteredUsers = sortArrayByOption(
        filteredUsers,
        props.filterControl.Sort
      );
    }

    if (props.filterControl.Filter) {
      filteredUsers = filterArrayByDepartment(
        filteredUsers,
        props.filterControl.Filter
      );
    }

    console.log(filteredUsers);
    setUsers(filteredUsers);
  }, [props.filterControl]);

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
          {users.map((user) => (
            <UserRow key={`user-${user.id}`} user={user} />
          ))}
        </tbody>
      </Table>
    </>
  );
};
