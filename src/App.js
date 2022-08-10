import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Nav/Navigation.js";

function App() {
  window.onload = function () {
    console.log("1");
  };
  return (
    <>
      <Navigation></Navigation>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
