import { useParams } from "react-router-dom";
import { Container, Image, Text, Button, Modal } from "@nextui-org/react";
import { searchMovieService } from "../apis/movieService";
import { useGetMovieDetail } from "../hooks/useMovies";
import { useState } from "react";

const MovieDetail = () => {
  const { movie_id } = useParams();
  const { movieDetail, loading } = useGetMovieDetail(movie_id);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Container md>
      <Image
        src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movieDetail?.poster_path}`}
        objectFit="cover"
        width={300}
      />
      <Text h2>Title: {movieDetail?.title}</Text>
      <Text h4>Title: {movieDetail?.overview}</Text>
      <Button onClick={() => setIsVisible(true)}>Xem trailer</Button>
      <Modal
        closeButton
        blur
        width="650px"
        aria-labelledby="modal-title"
        open={isVisible}
        onClose={() => setIsVisible(false)}
      >
        <Modal.Header>
          <Text>Trailer nè</Text>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/8aGhZQkoFbQ"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button>OK</Button>
          <Button color="error" onClick={() => setIsVisible(false)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MovieDetail;
