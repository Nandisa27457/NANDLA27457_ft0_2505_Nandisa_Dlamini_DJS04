import React from "react";
import { getGenres } from "../utility";


const PodcastControls = ({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  selectedGenre,
  setSelectedGenre,
}) => {
  return (
    <div className="podcast-controls">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search podcasts..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Sort Dropdown */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="date-desc">Newest First</option>
        <option value="title-asc">Title A–Z</option>
        <option value="title-desc">Title Z–A</option>
      </select>

      {/* Genre Filter */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Genres</option>
        <option value="Personal-growth">Personal growth </option>
        <option value="Business">Business</option>
        <option value="Music">Music</option>
      </select>
    </div>
  );
};

export default PodcastControls;
