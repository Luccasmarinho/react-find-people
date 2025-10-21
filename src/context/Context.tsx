import { createContext } from "react";
import type {ContextTypes} from "../interfaces/interfaces"

export const Context = createContext<ContextTypes>({} as ContextTypes);
