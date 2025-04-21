import axios from 'axios';

const API_BASE = 'https://openlibrary.org/search.json';

export const searchBooks = async ({ query, searchType, page = 1 }) => {
  try {
    const params = {
      [searchType]: query,
      fields: 'title,author_name,first_publish_year,cover_i,key',
      limit: 12,
      page,
    };

    const { data } = await axios.get(API_BASE, { params });
    
    return data.docs.map(book => ({
      id: book.key,
      title: book.title,
      authors: book.author_name,
      year: book.first_publish_year,
      coverId: book.cover_i,
    }));
    
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch books');
  }
};