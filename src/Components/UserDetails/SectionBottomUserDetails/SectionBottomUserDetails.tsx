import {
  Container,
  TabInfo,
  AreaButton,
  Button,
} from "./SectionBottomUserDetailsStyle";

const SectionBottomUserDetails = () => {
  return (
    <Container>
      <TabInfo>
        <AreaButton>
          <Button $active={true}>Info</Button>
          <Button $active={false}>Location</Button>
          <Button $active={false}>Login</Button>
        </AreaButton>
        <div>
          <ul>
            <li>
              <h3>First Nname</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>First Nname</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>First Nname</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>First Nname</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>First Nname</h3>
              <p>Luccas</p>
            </li>
          </ul>
        </div>
      </TabInfo>
    </Container>
  );
};

export default SectionBottomUserDetails;
