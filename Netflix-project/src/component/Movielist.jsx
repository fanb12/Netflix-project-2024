import React from "react";
import Row from "../component/Rows/Row/Row";
import requests from "../utils/requests";

function Movielist() {
  return (
    <div>
      <Row title="Animation Movies" fetchUrl={requests.fetchAnimationMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Music Movies" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumenraries} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Adviture Movies" fetchUrl={requests.fetchAdvintureMovies} />
    </div>
  );
}

export default Movielist;
