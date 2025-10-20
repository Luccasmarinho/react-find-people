import InputSearch from "../../Components/InputSearch/InputSearch";
import Table from "../../Components/Table/Table";
import { Container } from "./HomeStyle";

const Home = () => {
  return (
    <Container
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <InputSearch />
      <Table />
    </Container>
  );
};

export default Home;
