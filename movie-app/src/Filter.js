import React from "react";

function Filter({ titleFilter, setTitleFilter, ratingFilter, setRatingFilter }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Filter by title"
        value={titleFilter}
        onChange={(e) => setTitleFilter(e.target.value)}
        style={{ marginRight: "1rem" }}
      />
      <input
        type="number"
        min="1"
        max="5"
        placeholder="Min rating"
        value={ratingFilter}
        onChange={(e) => setRatingFilter(Number(e.target.value))}
      />
    </div>
  );
}

export default Filter;
