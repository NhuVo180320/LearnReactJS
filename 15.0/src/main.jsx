import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

//trong che do srtickmode react se render 2 trong moi truong development de phat hien loi tiem an trong cac effect hoac lifecycle methods nhung trong production chi render 1 lan
createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>
  <App />
);
