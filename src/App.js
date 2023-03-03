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
    Sort: 0, // 0 - None, 1/2 - Name (Asc/Dsc), 3/4 - Username (Asc/Dsc), 5/6 - Email (Asc/Dsc), 7/8 - Department (Asc/Dsc), 9/10 - D.O.B (Asc/Dsc)
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
          count: "50",
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
    console.log(filterControl.Filter);
  
    
  }, [filterControl.Filter])
  

  return (
    <Container className="mt-4">
      <Stack className="align-items-start" direction={`horizontal`} gap={4}>
        <UserTable users={users} filterControl={filterControl} />
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
