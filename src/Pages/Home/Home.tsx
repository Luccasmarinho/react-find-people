import BasicPagination from "../../Components/BasicPagination/BasicPagination";
import InputSearch from "../../Components/InputSearch/InputSearch";
import Teste from "../../Components/Table/Table";
import { Container } from "./HomeStyle";

const Home = () => {
  return (
    <Container>
      <InputSearch />
      <Teste />
      <BasicPagination />
    </Container>
  );
};

export default Home;
