import React from "react";
import "./Home.css";

import PicSlider from "../picSlider/PicSlider";
import Viewr from "../Viewr/Viewr";
import MovieGrid from "../movieGrid/MovieGrid";

import { useSelector } from "react-redux";
import {
  selectRecomended,
  selectNewDisney,
  selectOrignals,
  selectTrending,
} from "../../features/movie/movieSlice";
import useHome from "./useHome";

const Home = () => {
  useHome();

  const recomendedMovies = useSelector(selectRecomended);
  const newDisneyMovies = useSelector(selectNewDisney);
  const orignalsMovies = useSelector(selectOrignals);
  const trendingMovies = useSelector(selectTrending);

  return (
    <div className="home-body">
      <PicSlider />
      <Viewr />
      <MovieGrid heading="Recommended for you" data={recomendedMovies} />
      <MovieGrid heading="new Disney+" data={newDisneyMovies} />
      <MovieGrid heading="Orignals" data={orignalsMovies} />
      <MovieGrid heading="Trending" data={trendingMovies} />
    </div>
  );
};

export default Home;
