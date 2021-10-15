import React from "react";
import "@/App.css";
import NotFound from "@/components/pages/NotFound";
import RouterView from "@/components/templates/RouterView";
import routes from "@/routes";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <RouterView routes={routes} NotFoundPage={NotFound} />
    </BrowserRouter>
  );
}

export default App;
