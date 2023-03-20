import React from "react";
import { createRoot } from "react-dom/client";
import GlobalStyles from "./styles/Global";

const App = () => {
  return <GlobalStyles></GlobalStyles>;
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
