import { StrictMode } from "react";
// Essential root
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Get root div and render content to it
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
