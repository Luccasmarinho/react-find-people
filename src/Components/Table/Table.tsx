import { Th, Td, Button, ContainerTable, Container } from "./TableStyle";

const Teste = () => {
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
          <tr>
            <Td>12121323</Td>
            <Td>odasdasdi</Td>
            <Td>oasdadsi</Td>
            <Td>oi</Td>
            <Td>oadasdi</Td>
            <Td>oisdasdasd</Td>
            <Td>
              <Button>View profile</Button>
            </Td>
          </tr>
        </tbody>
      </ContainerTable>
    </Container>
  );
};

export default Teste;
