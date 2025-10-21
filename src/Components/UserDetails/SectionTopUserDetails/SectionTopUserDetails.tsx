import { Link, useParams } from "react-router-dom";
import { Container, BoxProfile, Button } from "./SectionTopUserDetailsStyle";
import { useQuery } from "@tanstack/react-query";
import getData from "../../../service/api";
import Loading from "../../Loading/Loading";

const SectionTopUserDetails = () => {
  const { name } = useParams();
  const { data, isLoading } = useQuery({
    queryKey: ["dataPeople"],
    queryFn: getData,
    placeholderData: (previousData) => previousData,
    staleTime: 5000,
  });

  const findUser = data?.results.find((e) => e.name.first === name);

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
          <div>
            <Link to={"/"}>
              <Button>Voltar</Button>
            </Link>
          </div>
          <BoxProfile>
            <img src={findUser?.picture.large} alt="Image User" />
            <h2>
              {findUser?.name.first} {findUser?.name.last}
            </h2>
            <h3>{findUser?.name.title}</h3>
          </BoxProfile>
        </Container>
      )}
    </>
  );
};

export default SectionTopUserDetails;
