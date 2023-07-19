import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "react-toastify/dist/ReactToastify.css";

import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./App.scss";

import Navbar from './components/Navbar'

import App from "./App";


ReactDOM.render(
  <StrictMode>
  <Navbar/>
  </StrictMode>,
  document.getElementById("root")
);

