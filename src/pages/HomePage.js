import { Container, Grid, Loading } from "@nextui-org/react";
import SearchMovie from "../components/SerchMovie";
import MovieItem from "../components/MovieItem";
import { useGetNowPlaying } from "../hooks/useMovies";

const HomePage = () => {
  const { movies, loading, searchMovie, getNowPlaying } = useGetNowPlaying();

  return (
    <Container>
      <SearchMovie searchMovie={searchMovie} getNowPlaying={getNowPlaying} />
      {loading ? (
        <Loading />
      ) : (
        <Grid.Container
          gap={2}
          css={{
            padding: "4rem 0",
          }}
        >
          {movies.map((movie) => (
            <MovieItem movieData={movie} />
          ))}
        </Grid.Container>
      )}
    </Container>
  );
};

export default HomePage;
