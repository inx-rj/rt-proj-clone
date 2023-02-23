import "./assets/css/tailwind.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store";
import { HelmetProvider } from "react-helmet-async";
import { MantineProvider } from "@mantine/core";
import { ModalsProvider } from "@mantine/modals";
import { BrowserRouter } from "react-router-dom";

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <HelmetProvider>
            <MantineProvider>
              <ModalsProvider>
                <App />
              </ModalsProvider>
            </MantineProvider>
          </HelmetProvider>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);