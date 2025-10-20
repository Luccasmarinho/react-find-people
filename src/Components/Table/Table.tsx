import { Th, Td, Button, ContainerTable, Container } from "./TableStyle";
import { Link } from "react-router-dom";
import { api } from "../../service/api";
import { useQuery } from "@tanstack/react-query";
import formatDate from "../../utils/utilts";
import BasicPagination from "../BasicPagination/BasicPagination";

interface DataPeople {
  id: {
    value: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  registered: {
    age: number;
    date: string;
  };
}

interface DataPeopleResults {
  results: DataPeople[];
}

const Table = () => {
  async function getData(): Promise<DataPeopleResults> {
    const connection = await api.get<DataPeopleResults>("/?results=5");
    return connection.data;
  }

  const { data, isLoading } = useQuery({
    queryKey: ["dataPeople"],
    queryFn: getData,
    // placeholderData: (previousData) => previousData,
    // staleTime: 5000,
  });

  if (isLoading) return <p style={{ color: "white" }}>Carregando...</p>;

  return (
    <Container>
      <ContainerTable>
        <thead>
          <tr>
            <Th>ID</Th>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Title</Th>
            <Th>Date</Th>
            <Th>Age</Th>
            <Th>Actions</Th>
          </tr>
        </thead>
        <tbody>
          {data?.results.map((e) => (
            <tr key={e.id.value ?? crypto.randomUUID()}>
              <Td>{e.id.value ?? crypto.randomUUID()}</Td>
              <Td>{e.name.first}</Td>
              <Td>{e.name.last}</Td>
              <Td>{e.name.title}</Td>
              <Td>{formatDate(e.registered.date)}</Td>
              <Td>{e.registered.age}</Td>
              <Td>
                <Link to={"/profile"}>
                  <Button>View profile</Button>
                </Link>
              </Td>
            </tr>
          ))}
        </tbody>
      </ContainerTable>
      <BasicPagination />
    </Container>
  );
};

export default Table;
