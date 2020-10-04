import React, { useState, useEffect } from "react";
import axios from "../axios";
import requsets from "../requests";

import "./Banner.css";



function Banner() {
  const [movie, setMovie] = useState([]);

  // A snippet of code which runs based on a specific condition/varaible
  useEffect(() => {
    // if [], run once when the row loads, and don't run again
    async function fetchData() {
      const requset = await axios.get(requsets.fetchNetflixOrginials);
      //   console.log(requset.data.results);
      setMovie(
        requset.data.results[
          Math.floor(Math.random() * requset.data.results.length)
        ]
      );

      return requset;
    }

    fetchData();
  }, []);
  // console.log(movie);
  function truncate(str,n){
    return str?.length > n ? str.substr(0,n-1) + "..." :str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
            "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
     
        {/* <<< Background image */}
        {/* title */}
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        {/* div > 2 buttons */}
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner_description">{truncate(movie?.overview,180)}</h1>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
