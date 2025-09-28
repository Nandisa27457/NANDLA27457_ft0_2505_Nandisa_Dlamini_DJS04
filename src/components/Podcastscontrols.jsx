import React from "react";
import { genres } from "../../public/data";
// ...existing code...


const PodcastControls = ({//props for control states and setters
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
        value={searchQuery}//search state
        onChange={(e) => setSearchQuery(e.target.value)}//update search state on input
      />

      {/* Sort Dropdown */}
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>//sort state and update function
        <option value="date-desc">Newest First</option>
        <option value="title-asc">Title A–Z</option>
        <option value="title-desc">Title Z–A</option>
      </select>

      {/* Genre Filter */}
      <select
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}//genre filter state and update function
      >
        <option value="">All Genres</option>
        {genres.map((genre) => (//map through genres for options
          <option key={genre.id} value={genre.title}>
            {genre.title}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PodcastControls;
