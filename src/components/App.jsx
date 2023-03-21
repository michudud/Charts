import React from "react";
import { createRoot } from "react-dom/client";
import OverviewPage from "./OverviewPage";
import GlobalStyles from "./styles/Global";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <OverviewPage />
    </>
  );
};

const rootDiv = document.getElementById("root");
if (rootDiv) {
  createRoot(rootDiv).render(<App />);
}
