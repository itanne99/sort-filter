import { useState } from "react";
import { Container, Stack } from "react-bootstrap";
import { FilterControl } from "./Components/FilterControl/FilterControl";
import { UserTable } from "./Components/UserDatabase/UserTable";
import "./Static/css/bootstrap.css";

function App() {
  const [sortBy, setSortBy] = useState(0); // 0 - None, 1/2 - Name (Asc/Dsc), 3/4 - Username (Asc/Dsc), 5/6 - Email (Asc/Dsc), 7/8 - Department (Asc/Dsc), 9/10 - D.O.B (Asc/Dsc)
  const [departments, setDepartments] = useState([]);

  return (
    <Container className="mt-4">
      <Stack className="align-items-start" direction={`horizontal`} gap={4}>
        <UserTable />
        <FilterControl />
      </Stack>
    </Container>
  );
}

export default App;
