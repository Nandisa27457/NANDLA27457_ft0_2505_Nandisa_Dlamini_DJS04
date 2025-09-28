import React, { useState, useEffect, useMemo } from 'react';
import Podcast from './Podcast';
import PodcastControls from './Podcastscontrols';
import { fetchPodcasts } from '../utility';
import { getGenres } from '../utility';

const Podcasts = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // UI state
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date-desc');
  const [selectedGenre, setSelectedGenre] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchPodcasts();
        setPodcasts(data);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, []);

  // Derived list
  const processedPodcasts = useMemo(() => {
    let result = [...podcasts];

    // Search
    if (searchQuery.trim() !== '') {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter;

if (selectedGenre) {
  result = result.filter((p) => {
    const titles = getGenres(p.genreIds); // e.g. ["Technology", "Business"]
    return titles.includes(selectedGenre);
  });
}


    // Sort
    result.sort((a, b) => {
      if (sortBy === 'date-desc') return new Date(b.lastUpdated) - new Date(a.lastUpdated);
      if (sortBy === 'title-asc') return a.title.localeCompare(b.title);
      if (sortBy === 'title-desc') return b.title.localeCompare(a.title);
      return 0;
    });

    return result;
  }, [podcasts, searchQuery, sortBy, selectedGenre]);

  // Pagination
  const totalPages = Math.ceil(processedPodcasts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedPodcasts = processedPodcasts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, sortBy, selectedGenre]);

  if (isLoading) {
    return (
      <div className="loading">
        <div className="loading-text">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* 🔹 Controls Component */}
      <PodcastControls
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        sortBy={sortBy}
        setSortBy={setSortBy}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {/* Podcast Grid */}
      <div className="podcast-grid">
        {paginatedPodcasts.map((podcast) => (
          <Podcast key={podcast.id} {...podcast} />
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            className={currentPage === i + 1 ? 'active' : ''}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Podcasts;
