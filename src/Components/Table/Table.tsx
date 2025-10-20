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
import { useContext, useState } from "react";
import type { IPagination } from "../BasicPagination/BasicPagination";
import Loading from "../../Loading/Loading";
import { Context } from "../../context/Context";
import Empty from "../Empty/Empty";

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
  const { valueInputName } = useContext(Context);

  const { data, isLoading } = useQuery({
    queryKey: ["dataPeople", page],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });

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
    const connection = await api.get<DataPeopleResults>(
      "/?results=25&seed=meu-tipo"
    );
    return connection.data;
  }

  let totalPages = 0;
  if (data?.results) {
    totalPages = Math.ceil(data?.results.length / itemsPerPage);
  }

  const handlePageChange: IPagination["onChange"] = (_, newPage) => {
    setPage(newPage);
  };

  const filteredData = data?.results
    .slice(startIndex, endIndex)
    .filter((e) =>
      e.name.first.toLowerCase().includes(valueInputName.toLowerCase())
    );

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : filteredData && filteredData.length > 0 ? (
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
                {filteredData?.map((e) => (
                  <tr key={crypto.randomUUID()}>
                    {/* <Td>{e.id.value || crypto.randomUUID().slice(0, 8)}</Td> */}
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
          </ContainerTableWrapper>
          <BasicPagination
            totalPages={totalPages}
            page={page}
            onChange={handlePageChange}
          />
        </Container>
      ) : (
        <Empty />
      )}
    </>
  );
};

export default Table;
