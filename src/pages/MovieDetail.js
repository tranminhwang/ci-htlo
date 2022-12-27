import { useParams } from "react-router-dom";

const MovieDetail = () => {
  const { movie_id } = useParams();

  return <div>Movie Detail {movie_id}</div>;
};

export default MovieDetail;
