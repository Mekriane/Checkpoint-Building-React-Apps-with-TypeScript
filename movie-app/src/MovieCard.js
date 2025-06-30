import React from "react";

function MovieCard({ movie }) {
  return (
    <div style={{ border: "1px solid gray", margin: "1rem", padding: "1rem" }}>
      <img
        src={movie.posterURL}
        alt={movie.title}
        style={{ width: "150px" }}
      />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>Rating: {movie.rating} / 5</p>
    </div>
  );
}

export default MovieCard;
