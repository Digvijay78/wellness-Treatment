import axios from 'axios';

const API_URL = 'https://669f704cb132e2c136fdd9a0.mockapi.io/api/v1/retreats';

export const getRetreats = async (filters) => {
  try {
    const params = {
      page: filters.page,
      limit: filters.limit,
    };

    if (filters.search) {
      params.search = filters.search;
    }

    const allDataResponse = await axios.get(API_URL);
    const totalCount = allDataResponse.data.length;

    const filteredData = allDataResponse.data.filter(retreat => {
      const retreatYear = new Date(retreat.date * 1000).getFullYear();
      const matchesYear = filters.date ? retreatYear.toString() === filters.date : true;
      const matchesType = filters.type ? retreat.type === filters.type : true;
      const matchesSearch = filters.search ? retreat.title.toLowerCase().includes(filters.search.toLowerCase()) : true;

      return matchesYear && matchesType && matchesSearch;
    });

    const totalPages = Math.ceil(filteredData.length / filters.limit);

    const paginatedData = filteredData.slice((filters.page - 1) * filters.limit, filters.page * filters.limit);

    return {
      data: paginatedData,
      total: totalPages,
      totalCount: totalCount,
    };
  } catch (error) {
    console.error('Error fetching retreats:', error);
    return { data: [], total: 0, totalCount: 0 };
  }
};
