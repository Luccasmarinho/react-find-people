import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./style/GlobalStyle.tsx";
import RoutesApp from "./Router/RouterApp.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RoutesApp />
      <GlobalStyle />
  </StrictMode>
);
