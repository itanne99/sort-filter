import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { FilterControl } from "./Components/FilterControl/FilterControl";
import { UserTable } from "./Components/UserDatabase/UserTable";
import { ErrorToast } from "./Components/Error/ErrorToast";
import "./Static/css/bootstrap.css";
import _ from "lodash";

const baseURL = "https://api.mockaroo.com/api/a92778b0";

function App() {
  const [filterControl, setFilterControl] = useState({
    Sort: 0,
    Filter: [],
    Search: "",
  });
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    axios
      .get(baseURL, {
        params: {
          count: "25",
          key: "db10aca0" /*  */,
        },
      })
      .then((response) => {
        setUsers(response.data);
        setDepartments([...new Set(_.map(response.data, "department"))].sort());
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  useEffect(() => {
    setFilterControl({
      ...filterControl,
      Filter: departments.reduce((acc, d) => {
        acc[d] = false;
        return acc;
      }, {}),
    });
  }, [departments])

  useEffect(() => {
    console.log(filterControl);
  }, [filterControl]);

  return (
    <Container className="mt-4">
      <Stack className="align-items-start" direction={`horizontal`} gap={4}>
        <UserTable users={users} />
        <FilterControl
          departments={departments}
          filterControl={filterControl}
          setFilterControl={setFilterControl}
        />
      </Stack>
      {!error ? "" : <ErrorToast error={error} />}
    </Container>
  );
}

export default App;
