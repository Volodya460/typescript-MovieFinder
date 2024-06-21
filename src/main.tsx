import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "modern-normalize";

import GlobalStyle from "./stylesheet/GlobalStyle";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
  </React.StrictMode>
);
