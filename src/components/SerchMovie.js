import { Spacer, Input, Button } from "@nextui-org/react";
import { useState } from "react";
import "./SearchMovie.css";

const SearchMovie = ({ searchMovie }) => {
  const [searchKeyword, setSearchKeyword] = useState("");
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
          onChange={(event) => setSearchKeyword(event.target.value)}
        />
        <Button auto onClick={() => searchMovie(searchKeyword)}>
          Search
        </Button>
      </div>
    </>
  );
};

export default SearchMovie;
