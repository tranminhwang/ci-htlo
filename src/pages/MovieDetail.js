import { useParams } from "react-router-dom";
import { useGetMovieDetail } from "../hooks/useMovies";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const { movieDetail, loading } = useGetMovieDetail(movie_id);

  return (
    <div>
      <h2>Movie Detail {movie_id}</h2>
      <h2>Loading: {JSON.stringify(loading)}</h2>
      <h2>{JSON.stringify(movieDetail)}</h2>
    </div>
  );
};

export default MovieDetail;
