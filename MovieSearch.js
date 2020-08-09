import React, { useState} from "react";
import MovieCard from "./MovieCard";
import MovieBar from "./MovieBar";

export default function SearchMovie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [found, setFound] = useState(false);
  
  const searchMovies = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=c21fa4cc76a2459a2bc07fddbd5e6885&language=en-US&query=${query}&page=1&include_adult=false`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      
      setMovies(data.results);
    //   Updating state based on results
      data.total_results === 0 ? setFound(true) : setFound(false);

      if (!response.ok) {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log("Could not fetch data!!!");
      console.error(`${error.name} : ${error.message}`);
    }

    
  };

  return (
    <div>
      <MovieBar searchMovies={searchMovies} setQuery={setQuery} query={query} />
      <MovieCard movies={movies} found={found}/>
    </div>
  );
}
