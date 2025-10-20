import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./style/GlobalStyle.tsx";
import RoutesApp from "./Router/RouterApp.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RoutesApp />
      <GlobalStyle />
    </QueryClientProvider>
  </StrictMode>
);
