import { Link } from "react-router-dom";
import image from "../../../assets/post-malone.jpg";
import {
  Container,
  BoxProfile,
  Button,
} from "./SectionTopUserDetailsStyle";
Link;
const SectionTopUserDetails = () => {
  return (
    <Container>
      <div>
        <Link to={"/"}>
          <Button>Voltar</Button>
        </Link>
      </div>
      <BoxProfile>
        <img src={image} alt="Image User" />
        <h2>Luccas Marinho</h2>
        <h3>Lukao</h3>
      </BoxProfile>
    </Container>
  );
};

export default SectionTopUserDetails;
