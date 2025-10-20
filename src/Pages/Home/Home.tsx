import InputSearch from "../../Components/InputSearch/InputSearch";
import Table from "../../Components/Table/Table";
import { Container } from "./HomeStyle";

const Home = () => {
  return (
    <Container>
      <InputSearch />
      <Table />
    </Container>
  );
};

export default Home;
