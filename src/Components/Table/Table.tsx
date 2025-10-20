import {
  Th,
  Td,
  Button,
  ContainerTable,
  Container,
  ContainerTableWrapper,
} from "./TableStyle";
import { Link } from "react-router-dom";
import { api } from "../../service/api";
import { useQuery } from "@tanstack/react-query";
import formatDate from "../../utils/utilts";
import BasicPagination from "../BasicPagination/BasicPagination";
import { useState } from "react";
import type { IPagination } from "../BasicPagination/BasicPagination";

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
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const headTable = [
    // "ID",
    "First Name",
    "Last Name",
    "Title",
    "Date",
    "Age",
    "Actions",
  ];

  async function getData(): Promise<DataPeopleResults> {
    const connection = await api.get<DataPeopleResults>("/?results=225");
    return connection.data;
  }

  const { data } = useQuery({
    queryKey: ["dataPeople"],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });

  // if (isLoading) return <p style={{ color: "white" }}>Carregando...</p>;

  let totalPages = 0;
  if (data?.results) {
    totalPages = Math.ceil(data?.results.length / itemsPerPage);
  }

  const handlePageChange: IPagination["onChange"] = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <Container>
      <ContainerTableWrapper>
        <ContainerTable>
          <thead>
            <tr>
              {headTable.map((e) => (
                <Th key={crypto.randomUUID()}>{e}</Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.results
              .map((e) => (
                <tr key={e.id.value ?? crypto.randomUUID()}>
                  {/* <Td>{e.id.value ?? crypto.randomUUID()}</Td> */}
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
              ))
              .slice(startIndex, endIndex)}
          </tbody>
        </ContainerTable>
      </ContainerTableWrapper>
      <BasicPagination
        totalPages={totalPages}
        page={page}
        onChange={handlePageChange}
      />
    </Container>
  );
};

export default Table;
