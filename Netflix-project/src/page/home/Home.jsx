import React from "react";
import Header from "../../component/Header/Header";
import Rowlist from "../../component/Rows/rowlist/Rowlist";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Rowlist />
      <Footer />
    </div>
  );
}

export default Home;
