import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { ApiKey } from "../../common/api/MoviesApiKey";
import moviesApi from "../../common/api/moviesApi";
export const fetchMovies = createAsyncThunk("movies/fetchMovies", 
async () => {
  const response = await moviesApi.get(`${ApiKey}`);
  return response.data;
});

const initialState = {
  movies: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.fulfilled]: (state, action) => {
        state.movies = action.payload;
    },
  }
});

export const { setMovies } = movieSlice.actions;
export const selectMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
