/** @format */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AppRoutes from "./routes/routes";
import Providers from "./redux/Providers";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* This is the redux provider  which wraps the entire application. */}
    <Providers>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Providers>
  </StrictMode>,
);
