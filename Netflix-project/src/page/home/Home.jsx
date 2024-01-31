import React from "react";
import Header from "../../component/Header/Header";
import Banner from "../../component/Banner/Banner";
import Footer from "../../component/Footer/Footer";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Outlet />

      <Footer />
    </div>
  );
}

export default Home;
