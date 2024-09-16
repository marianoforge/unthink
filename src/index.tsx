import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { IngredientsProvider } from "./context/IngredientsContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <IngredientsProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </IngredientsProvider>
  </React.StrictMode>
);

serviceWorkerRegistration.register();
