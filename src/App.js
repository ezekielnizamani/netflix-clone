import React from "react";
import "./App.css";
import Row from "./components/Row";
import requsets from "./requests";
import Banner from "./components/Banner.js";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORGIGNALS"
        fetchUrl={requsets.fetchNetflixOrginials}
        isLargeRow
      />
      <Row title="Tranding Now" fetchUrl={requsets.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requsets.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requsets.fetchActionMovies} />
      <Row title="Comedy Movies Movies" fetchUrl={requsets.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requsets.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requsets.fetchRomanceMovies} />
      <Row title="Documentatiers" fetchUrl={requsets.fetchDocumentaries} />
    </div>
  );
}

export default App;
