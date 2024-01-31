import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../../page/home/Home";
import Row from "../Rows/Row/Row";
import requests from "../../utils/requests";
import Rowlist from "../Rows/rowlist/Rowlist";
import Movielist from "../Movielist";
import Tv from "../Tv";

function Rheader() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Rowlist />} />
          <Route path="/TvShows" element={<Tv />} />

          <Route
            path="/Movie"
            element={
              <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={true}
              />
            }
          />
          <Route
            path="/Latest"
            element={
              <Row
                title="Top Rated"
                fetchUrl={requests.fetchTopRateMovies}
                isLargeRow={true}
              />
            }
          />

          <Route
            path="/Browse By Languages"
            element={
              <Row
                title="Trending Now"
                fetchUrl={requests.fetchTrending}
                isLargeRow={true}
              />
            }
          />
          <Route path="/My List" element={<Movielist />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Rheader;
