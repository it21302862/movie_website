import React, { useState, useEffect } from "react";
import "./banner.css";

import MovieContent from "../components/MovieContent";
import MovieDate from "../components/MovieDate";
import PlayBtn from "../components/PlayBtn";
import MovieSwiper from "../components/MovieSwiper";

function Banner() {
  const [movies, setMovies] = useState([]);

  // Fetch data from local JSON
  const fetchData = () => {
    fetch("http://localhost:3000/data/movieData.json")
      .then((res) => res.json())
      .then((data) => {
        // Mark the first movie as active
        const initialized = data.map((movie, index) => ({
          ...movie,
          active: index === 0,
        }));
        setMovies(initialized);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Called when Swiper slide changes
  const handleSlideChange = (swiper) => {
    // const activeIndex = swiper.realIndex;
    // const updatedMovies = movies.map((movie, index) => ({
    //   ...movie,
    //   active: index === activeIndex,
    // }));
    // setMovies(updatedMovies);

    const newMovies = movies.map(movie =>{
        movie.active = false;
        if(movie._id === swiper){
            movie.active = true;
        }
        return movie;
    })
    setMovies(newMovies);
  };

  const activeMovie = movies.find((movie) => movie.active);

  return (
    <div className="banner">
      {activeMovie && (
        <div className="movie" key={activeMovie.id}>
          <img
            src={activeMovie.bgImg}
            alt="Background Image"
            className="bgImg active"
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6 col-md-12">
                <MovieContent movie={activeMovie} />
              </div>
              <div className="col-lg-6 col-md-12">
                <MovieDate movie={activeMovie} />
                <PlayBtn movie={activeMovie} />
              </div>
            </div>
          </div>
        </div>
      )}

      {movies.length > 0 && (
        <MovieSwiper slides={movies} slideChange={handleSlideChange} />
      )}
    </div>
  );
}

export default Banner;
