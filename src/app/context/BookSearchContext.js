'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import { searchBooks } from '../api/openLibrary';
import { toast } from 'react-toastify';

const BookSearchContext = createContext();

export const BookSearchProvider = ({ children }) => {
  const [query, setQuery] = useState('');
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchType, setSearchType] = useState('title');
  
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    const fetchBooks = async () => {
      if (!debouncedQuery.trim()) {
        setBooks([]);
        return;
      }
      setError(null);

      try {
        const results = await searchBooks({
          query: debouncedQuery,
          searchType,
          page: 1
        });
        toast.info("Searching books...");
        setBooks(results);
        setIsLoading(true);
      } catch (err) {
        toast.error('Failed to fetch books. Please try again later.');
        setError(err.message);
      } finally {
        toast.dismiss();
        setIsLoading(false);
      }
    };

    fetchBooks();
  }, [debouncedQuery, searchType]);

  return (
    <BookSearchContext.Provider 
      value={{ 
        query, 
        setQuery, 
        books, 
        isLoading, 
        error,
        searchType,
        setSearchType
      }}
    >
      {children}
    </BookSearchContext.Provider>
  );
};

export const useBookSearch = () => {
  const context = useContext(BookSearchContext);
  if (!context) throw new Error('useBookSearch must be used within BookSearchProvider');
  return context;
};