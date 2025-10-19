import { useState } from "react";
import {
  Container,
  TabInfo,
  AreaButton,
  Button,
} from "./SectionBottomUserDetailsStyle";

const SectionBottomUserDetails = () => {
  const [nameBtn, setNameBtn] = useState("info");

  function handleClickButton(name: string) {
    setNameBtn(name);
  }
  return (
    <Container>
      <TabInfo>
        <AreaButton>
          <Button
            id="info"
            $nameBtn={nameBtn}
            onClick={() => handleClickButton("info")}
          >
            Info
          </Button>
          <Button
            id="location"
            $nameBtn={nameBtn}
            onClick={() => handleClickButton("location")}
          >
            Location
          </Button>
          <Button
            id="login"
            $nameBtn={nameBtn}
            onClick={() => handleClickButton("login")}
          >
            Login
          </Button>
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
