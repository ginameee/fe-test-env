import React from "react";
import "./App.css";
import NotFound from "./components/pages/NotFound";
import RouterView from "./components/templates/RouterView";
import routes from "./routes";

function App() {
  console.log(process.env.NODE_ENV);

  return <RouterView routes={routes} NotFoundPage={NotFound} />;
}

export default App;
