import axios from "axios";

export const API_URL = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
});

export const getNowPlayingMovies = async (api_key) => {
  const { data } = await API_URL.get(
    `/now_playing?api_key=${api_key}&language=en-US&page=1`
  );
  return data.results;
};

export const getMovieDetail = async (movie_id, api_key) => {
  const { data } = await API_URL.get(
    `/${movie_id}?api_key=${api_key}&language=en-US`
  );
  return data;
};
