import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Beans from "./pages/Beans/Beans";
import Africa from "./pages/Beans/Africa";
import America from "./pages/Beans/America";
import Asia from "./pages/Beans/Asia";
import GeishaDetail from "./pages/Beans/GeishaDetail";
import AromaticDetail from "./pages/Beans/AromaticDetail";
import EYunnanDetail from "./pages/Beans/EYunnanDetail";
import ColombiaDetail from "./pages/Beans/ColombiaDetail";
import SumatraDetail from "./pages/Beans/SumatraDetail";
import EthiopiaDetail from "./pages/Beans/EthiopiaDetail";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App></App>}>
        <Route path="/beans" element={<Beans></Beans>}></Route>
        <Route path="beans/africa" element={<Africa></Africa>}></Route>
        <Route path="beans/america" element={<America></America>}></Route>
        <Route path="beans/asia" element={<Asia></Asia>}></Route>
        <Route
          path="beans/geisha"
          element={<GeishaDetail></GeishaDetail>}
        ></Route>
        <Route
          path="beans/aromatic"
          element={<AromaticDetail></AromaticDetail>}
        ></Route>
        <Route
          path="beans/eyunnan"
          element={<EYunnanDetail></EYunnanDetail>}
        ></Route>
        <Route
          path="beans/colombia"
          element={<ColombiaDetail></ColombiaDetail>}
        ></Route>
        <Route
          path="beans/sumatra"
          element={<SumatraDetail></SumatraDetail>}
        ></Route>
        <Route
          path="beans/ethiopia"
          element={<EthiopiaDetail></EthiopiaDetail>}
        ></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
