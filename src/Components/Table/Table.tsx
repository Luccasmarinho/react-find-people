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
import Loading from "../../Loading/Loading";

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

  const { data, isLoading } = useQuery({
    queryKey: ["dataPeople"],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });

  const headTable = [
    "ID",
    "First Name",
    "Last Name",
    "Title",
    "Date",
    "Age",
    "Actions",
  ];

  async function getData(): Promise<DataPeopleResults> {
    const connection = await api.get<DataPeopleResults>("/?results=25");
    return connection.data;
  }

  let totalPages = 0;
  if (data?.results) {
    totalPages = Math.ceil(data?.results.length / itemsPerPage);
  }

  const handlePageChange: IPagination["onChange"] = (_, newPage) => {
    setPage(newPage);
  };

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Container
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
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
                    <tr key={crypto.randomUUID()}>
                      <Td>{crypto.randomUUID().slice(0, 8)}</Td>
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
      )}
    </>
  );
};

export default Table;
