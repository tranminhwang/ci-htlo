import { Container, Grid } from "@nextui-org/react";
import SearchMovie from "../components/SerchMovie";
import MovieItem from "../components/MovieItem";
import mockMovies from "../mocks/mockMovies.json";

const HomePage = () => {
  const movies = mockMovies.results;

  return (
    <Container>
      <SearchMovie />
      <Grid.Container gap={2}>
        {movies.map((movie) => (
          <MovieItem movieData={movie} />
        ))}
      </Grid.Container>
    </Container>
  );
};

export default HomePage;
