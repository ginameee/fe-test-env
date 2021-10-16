import React from "react";
import { Provider } from "react-redux";
import "@/App.css";
import NotFound from "@/components/pages/NotFound";
import RouterView from "@/components/templates/RouterView";
import routes from "@/routes";
import { BrowserRouter } from "react-router-dom";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <RouterView routes={routes} NotFoundPage={NotFound} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
