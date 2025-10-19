import { Title, Input, Container } from "./InputSearchStyle";

const InputSearch = () => {
  return (
    <Container>
      <Title>Find People</Title>
      <Input type="text" placeholder="Search people..." />
    </Container>
  );
};

export default InputSearch;
