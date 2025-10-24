import type { TypeError } from "../../interfaces/interfaces";
import { Container } from "./ErrorStyle";

const Error = ({ message, refetch }: TypeError) => {
  return (
    <Container>
      <p>Error: {message}</p>
      <div>
        <button onClick={() => refetch()}>Try again</button>
      </div>
    </Container>
  );
};

export default Error;
