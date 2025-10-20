import { createContext } from "react";

interface ContextTypes {
  valueInputName: string;
  setValueInputName: React.Dispatch<React.SetStateAction<string>>
}

export const Context = createContext<ContextTypes>({} as ContextTypes);
