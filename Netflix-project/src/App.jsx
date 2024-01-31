import React from "react";
import Home from "./page/home/Home";
import Rheader from "./component/reponsiveh/Rheader";
import { BrowserRouter } from "react-router-dom";
import Banner from "./component/Banner/Banner";

function App() {
  return (
    <>
      <BrowserRouter>
        <Rheader />
      </BrowserRouter>
    </>
  );
}

export default App;
