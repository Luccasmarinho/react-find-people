import { useState } from "react";
import { Context } from "./Context";
import type { PropsChildren } from "../interfaces/interfaces";

const ProviderContext = ({ children }: PropsChildren) => {
  const [valueInputName, setValueInputName] = useState<string>("");

  const values = {
    valueInputName,
    setValueInputName
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ProviderContext;
