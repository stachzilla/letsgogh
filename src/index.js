import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "components/app/App";
import App from "./pages/app";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

//What the hell is this?
reportWebVitals();
