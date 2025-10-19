import { useState } from "react";
import {
  Container,
  TabInfo,
  AreaButton,
  Button,
  Fields,
  BorderHighlight,
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
            {nameBtn === "info" && <BorderHighlight layoutId="border" />}
          </Button>
          <Button
            id="location"
            $nameBtn={nameBtn}
            onClick={() => handleClickButton("location")}
          >
            Location
            {nameBtn === "location" && <BorderHighlight layoutId="border" />}
          </Button>
          <Button
            id="login"
            $nameBtn={nameBtn}
            onClick={() => handleClickButton("login")}
          >
            Login
            {nameBtn === "login" && <BorderHighlight layoutId="border" />}
          </Button>
        </AreaButton>
        <Fields>
          <ul>
            <li>
              <h3>First Name</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>Last Name</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>Title</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>Data</h3>
              <p>Luccas</p>
            </li>
            <li>
              <h3>Age</h3>
              <p>Luccas</p>
            </li>
          </ul>
        </Fields>
      </TabInfo>
    </Container>
  );
};

export default SectionBottomUserDetails;
