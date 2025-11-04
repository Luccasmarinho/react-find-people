import imageNotFound from "../../assets/undraw_page-not-found_6wni.svg";
import { Container } from "./NotFoundStyle";

const NotFound = () => {
  return (
    <Container>
      <img src={imageNotFound} alt="Image not found" />
      <p>The requested was not found on this server.</p>
    </Container>
  );
};

export default NotFound;
