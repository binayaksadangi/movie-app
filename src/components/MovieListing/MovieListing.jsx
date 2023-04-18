import React from "react";
import { useSelector } from "react-redux";
import { selectMovies } from "../../redux/reducers/movieSlice";
import { Container, Grid } from "@mui/material";
import classes from "./MovieListing.module.css";
import MovieCard from "../MovieCard/MovieCard";
const MovieListing = () => {
  const movies = useSelector(selectMovies);
  console.log(movies);

  return (
    <Container>
      <Top10Movies />
    </Container>
  );
};
const Top10Movies = () => {
  const movies = useSelector(selectMovies);
  console.log(movies);

  return (
    <>
      <p className={classes.heading}>Top 10 Movies of this week</p>
      <Grid container spacing={2}>
        
          {movies &&
            movies.items.map((movies, index) => (
              <Grid item xs={12} md={3} direction='column'>
              <MovieCard movies={movies} id={index} />
              </Grid>
            ))}
       
      </Grid>
    </>
  );
};
export default MovieListing;
