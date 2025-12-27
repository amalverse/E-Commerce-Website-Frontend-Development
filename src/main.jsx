import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx"; //<App /> rendered in router.jsx
import { RouterProvider } from "react-router-dom";
import router from "./routers/router.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
