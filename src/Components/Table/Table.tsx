import {
  Th,
  Td,
  Button,
  ContainerTable,
  Container,
  ContainerTableWrapper,
} from "./TableStyle";
import { Link } from "react-router-dom";
import getData from "../../service/api";
import { useQuery } from "@tanstack/react-query";
import formatDate from "../../utils/utilts";
import BasicPagination from "../BasicPagination/BasicPagination";
import { useContext, useState } from "react";
import type { IPagination } from "../../interfaces/interfaces";
import Loading from "../Loading/Loading";
import { Context } from "../../context/Context";
import Empty from "../Empty/Empty";
import Error from "../Error/Error";

const Table = () => {
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 5;
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const { valueInputName } = useContext(Context);

  const { data, isLoading, error, isError, refetch } = useQuery({
    queryKey: ["dataPeople", page],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
    retry: 2,
  });

  if (isError) {
    return (
      <Error message={error.message} refetch={refetch}/>
    )
  }

  const headTable = [
    // "ID",
    "First Name",
    "Last Name",
    "Title",
    "Date",
    "Age",
    "Actions",
  ];

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
                      <Link to={`/profile/${e.name.first}`}>
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
