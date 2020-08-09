import React from "react";

export default function MovieCard(props) {
  const { movies, found } = props;
  return (
    <div className="card-list">
        <h2 className="card--display" style={{display: found? 'block' : 'none' }}> Sorry, we couldn't find any matching content, please try again!</h2>
      {movies
        .filter((movie) => movie.poster_path)
        .map((movie) => (
          <div className="card" key={movie.id}>
            <img
              className="card--image"
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title + " poster"}
            />
                    <div className="card--content">
                        <h3 className="card--title">{movie.title} </h3>
                            <p>
                                <small>RELEASE DATE: {movie.release_date} </small>
                            </p>
                            <p>
                                <small>RATING: {movie.vote_average} </small>
                            </p>
                            <p className="card--desc"> {movie.overview} </p>
                    </div>
            </div>
        ))}
    </div>
  );
}
