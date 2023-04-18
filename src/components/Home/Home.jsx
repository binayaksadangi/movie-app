import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/reducers/movieSlice";
import Hero from "../Hero/Hero";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchMovies())
  },[dispatch])
  return (
    <div>
      <Hero/>
      <MovieListing />
    </div>
  );
};

export default Home;
