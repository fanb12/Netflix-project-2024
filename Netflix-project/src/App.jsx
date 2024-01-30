import React from "react";
import Home from "./page/home/Home";
import Header from "./component/Header/Header";
import Footer from "./component/Footer/Footer";
import Banner from "./component/Banner/Banner";
import Rowlist from "./component/Rows/rowlist/Rowlist";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </>
  );
}

export default App;
