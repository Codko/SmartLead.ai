import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Inputprovider } from "./Context/Inputcontext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Inputprovider>
      <App />
    </Inputprovider>
  </StrictMode>
);
