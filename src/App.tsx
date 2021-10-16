import React from "react";
import { Provider } from "react-redux";
import "@/App.css";
import NotFound from "@/components/pages/NotFound";
import RouterView from "@/components/templates/RouterView";
import routes from "@/routes";
import { BrowserRouter } from "react-router-dom";
import store from "./store";
import MainTemplate from "./components/templates/Main";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainTemplate
          header={<div>Header</div>}
          nav={<div>Nav</div>}
          content={<RouterView routes={routes} NotFoundPage={NotFound} />}
        />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
