import React from "react";
import Row from "../component/Rows/Row/Row";
import requests from "../utils/requests";

function Tv() {
  return (
    <div>
      <Row title="TV Shows" fetchUrl={requests.fetchTvShow} isLargeRow={true} />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrginals}
        isLargeRow={true}
      />
    </div>
  );
}

export default Tv;
