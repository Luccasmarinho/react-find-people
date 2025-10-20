import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalStyle from "./style/GlobalStyle.tsx";
import RoutesApp from "./Router/RouterApp.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProviderContext from "./context/ProviderContext.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProviderContext>
      <QueryClientProvider client={queryClient}>
        <RoutesApp />
        <GlobalStyle />
      </QueryClientProvider>
    </ProviderContext>
  </StrictMode>
);
