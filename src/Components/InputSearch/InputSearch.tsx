import { useContext } from "react";
import { Title, Input, Container } from "./InputSearchStyle";
import { Context } from "../../context/Context";

const InputSearch = () => {
  const { valueInputName, setValueInputName } = useContext(Context);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValueInputName(e.target.value);
  }

  return (
    <Container>
      <Title>Find People</Title>
      <Input
        type="text"
        placeholder="Search people..."
        value={valueInputName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e)}
      />
    </Container>
  );
};

export default InputSearch;
