import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FormRegistryProvider } from "../../react-forminate/src";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <FormRegistryProvider>
      <App />
    </FormRegistryProvider>
  </StrictMode>
);
