//* React
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//* Components
import "./index.css";
import App from "./App.jsx";

//* Redux
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

//* Persistor
import { PersistGate } from "redux-persist/integration/react";
import { persistedStore } from "./redux/store.js";

//* Router
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate persistor={persistedStore}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
