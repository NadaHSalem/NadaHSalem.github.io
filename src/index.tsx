import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "./fonts/MatSaleh.otf";
import "./index.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Code from "./routes/Code";
import Art3D from "./routes/Art3D";
import NavBar from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<App />}></Route>
          <Route path="/home" element={<App />}></Route>
          <Route path="/code" element={<Code />}></Route>
          <Route path="/art&3d" element={<Art3D />}></Route>
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
