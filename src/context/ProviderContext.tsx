import { useState } from "react";
import { Context } from "./Context";
import type { ReactNode } from "react";

export interface PropsChildren {
    children: ReactNode;
}

const ProviderContext = ({ children }: PropsChildren) => {
  const [valueInputName, setValueInputName] = useState<string>("");

  const values = {
    valueInputName,
    setValueInputName
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export default ProviderContext;
