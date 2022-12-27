import { useEffect, useState } from "react";
import { THEMOVIE_DB_API_KEY } from "../constants/index";
import { getNowPlayingMovies, getMovieDetail } from "../apis/movieService";

export const useGetNowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getNowPlayingMovies(THEMOVIE_DB_API_KEY)
      .then((results) => setMovies(results))
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    movies,
    loading,
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
