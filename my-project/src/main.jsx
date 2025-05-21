import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./project/Index";
import Index from "./project/Index";
import App1 from "./project/Index";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
