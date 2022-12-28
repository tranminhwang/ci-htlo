import { useParams } from "react-router-dom";
import { Container, Image, Text, Button, Modal } from "@nextui-org/react";
import { THEMOVIE_DB_API_KEY } from "../constants";
import { getMovieVideo } from "../apis/movieService";
import { useGetMovieDetail } from "../hooks/useMovies";
import { useState } from "react";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const { movieDetail, loading } = useGetMovieDetail(movie_id);
  const [videoKey, setVideoKey] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const onClickXemTrailer = () => {
    setIsVisible(true);
    getMovieVideo(movie_id, THEMOVIE_DB_API_KEY).then((movies) => {
      console.log("trailer", movies);
      if (movies.length >= 1) {
        setVideoKey(movies[0].key);
      }
    });
  };

  return (
    <Container md>
      <Image
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail?.poster_path}`}
        objectFit="cover"
        width={300}
      />
      <Text h2>Title: {movieDetail?.title}</Text>
      <Text h4>Title: {movieDetail?.overview}</Text>
      <Button onClick={onClickXemTrailer}>Xem trailer</Button>
      <Modal
        closeButton
        blur
        width="650px"
        aria-labelledby="modal-title"
        open={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <Modal.Header>
          <Text h4 css={{ margin: "0 auto 0 0" }}>
            Trailer nè
          </Text>
        </Modal.Header>
        <Modal.Body
          css={{
            padding: 0,
          }}
        >
          {videoKey ? (
            <iframe
              style={{
                width: "100%",
              }}
              height="400"
              src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : (
            <Text>Not Found</Text>
          )}
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default MovieDetail;
