import React from "react";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Main from "./components/main/main.jsx"

import "./App.css";

export default () => {
  return(
      <div className="container">
        <Header/>
        <Main/>
        {/* <Footer></Footer> */}
      </div>
  )
}