//Libraries
import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
//Components and Style sheet
import App from "./App.jsx";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <div
        id="container"
        className=" max-h-fit dark text-foreground bg-background"
      >
        <App />
      </div>
    </NextUIProvider>
  </React.StrictMode>
);
