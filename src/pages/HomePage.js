import React, { useState, useEffect } from 'react';
import { getRetreats } from '../services/api';
import Header from '../components/Header';
import RetreatCard from '../components/RetreatCard';
import Filters from '../components/Filters';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [retreats, setRetreats] = useState([]);
  const [filters, setFilters] = useState({ page: 1, limit: 3 });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRetreats(filters);
        console.log('Fetched data:', response.data);
        setRetreats(response.data);
        setTotalPages(response.total);
      } catch (error) {
        console.error('Error fetching retreats:', error);
      }
    };
    fetchData();
  }, [filters]);

  const handleFilterChange = (newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters, page: 1 }));
  };

  const handleSearch = (query) => {
    setFilters((prevFilters) => ({ ...prevFilters, search: query, page: 1 }));
  };

  const handlePageChange = (page) => {
    setFilters((prevFilters) => ({ ...prevFilters, page }));
  };

  console.log('Retreats:', retreats); // Debugging line to check the retreats data

  return (
    <div className="container mx-auto px-4">
      <Header />
      <Filters onFilterChange={handleFilterChange} />
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {retreats.map((retreat) => (
          <RetreatCard key={retreat.id} retreat={retreat} />
        ))}
      </div>
      <Pagination currentPage={filters.page} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

export default HomePage;
