import React, { useState } from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "https://upload.wikimedia.org/wikipedia/en/2/2e/Inception_%282010%29_theatrical_poster.jpg",
      rating: 5,
    },
    {
      title: "Breaking Bad",
      description: "A chemistry teacher turned meth producer.",
      posterURL: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Breaking_Bad_logo.svg/500px-Breaking_Bad_logo.svg.png",
      rating: 5,
    },
  ]);

  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState(1);

  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    posterURL: "",
    rating: 1,
  });

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
      movie.rating >= ratingFilter
  );

  const handleAddMovie = () => {
    if (
      newMovie.title.trim() &&
      newMovie.description.trim() &&
      newMovie.posterURL.trim() &&
      newMovie.rating >= 1
    ) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: "", description: "", posterURL: "", rating: 1 });
    } else {
      alert("Please fill all fields correctly");
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>My Favorite Movies</h1>

      <Filter
        titleFilter={titleFilter}
        setTitleFilter={setTitleFilter}
        ratingFilter={ratingFilter}
        setRatingFilter={setRatingFilter}
      />

      <h2>Add a new movie</h2>
      <input
        type="text"
        placeholder="Title"
        value={newMovie.title}
        onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Description"
        value={newMovie.description}
        onChange={(e) =>
          setNewMovie({ ...newMovie, description: e.target.value })
        }
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="text"
        placeholder="Poster URL"
        value={newMovie.posterURL}
        onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Rating"
        value={newMovie.rating}
        onChange={(e) =>
          setNewMovie({ ...newMovie, rating: Number(e.target.value) })
        }
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={handleAddMovie}>Add Movie</button>

      <MovieList movies={filteredMovies} />
    </div>
  );
}

export default App;
