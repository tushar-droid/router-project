import { StrictMode } from "react";
import { Provider } from "./components/ui/provider";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./components/Router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routes}>
      <Provider>
        <App />
      </Provider>
    </RouterProvider>
  </StrictMode>
);
