import { Spacer, Input, Button } from "@nextui-org/react";
import "./SearchMovie.css";

const SearchMovie = () => {
  return (
    <>
      <Spacer y={2} />
      <div className="search-wrap">
        <Input
          css={{
            flex: 1,
            marginRight: "0.5rem",
          }}
          placeholder="Search movie"
        />
        <Button auto>Search</Button>
      </div>
    </>
  );
};

export default SearchMovie;
