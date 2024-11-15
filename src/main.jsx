import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "../src/ahti-css/ahti.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
       <GoogleOAuthProvider clientId="1025997146351-dqh70hv0appeod19p4jl8vr1j51f2ni9.apps.googleusercontent.com">
    <App />
    <ToastContainer position="top-center" />
    </GoogleOAuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
