import { useEffect, useState } from "react";
import { THEMOVIE_DB_API_KEY } from "../constants/index";
import { getNowPlayingMovies } from "../apis/movieService";

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
