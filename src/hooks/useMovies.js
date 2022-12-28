import { useEffect, useState } from "react";
import { THEMOVIE_DB_API_KEY } from "../constants/index";
import {
  getNowPlayingMovies,
  getMovieDetail,
  searchMovieService,
} from "../apis/movieService";

export const useGetNowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovie = (keyword) => {
    setLoading(true);
    searchMovieService(keyword, THEMOVIE_DB_API_KEY)
      .then((res) => setMovies(res))
      .finally(() => {
        setLoading(false);
      });
  };
  const getNowPlaying = () => {
    setLoading(true);
    getNowPlayingMovies(THEMOVIE_DB_API_KEY)
      .then((results) => setMovies(results))
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getNowPlaying();
  }, []);

  return {
    movies,
    loading,
    getNowPlaying,
    searchMovie,
  };
};

export const useGetMovieDetail = (movie_id) => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMovieDetail(movie_id, THEMOVIE_DB_API_KEY)
      .then((res) => {
        setMovieDetail(res);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    movieDetail,
    loading,
  };
};
