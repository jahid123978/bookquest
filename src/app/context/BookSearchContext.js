// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { searchBooks } from '../api/openLibrary';
// import { useDebounce } from '../hooks/useDebounce';

// const BookSearchContext = createContext();

// export const BookSearchProvider = ({ children }) => {
//   const [query, setQuery] = useState('');
//   const [books, setBooks] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
  
//   const debouncedQuery = useDebounce(query, 500);

//   const transformBookData = (apiBook) => ({
//     id: apiBook.key,
//     title: apiBook.title,
//     authors: apiBook.author_name,
//     firstPublished: apiBook.first_publish_year,
//     coverId: apiBook.cover_i,
//   });

//   useEffect(() => {
//     const fetchBooks = async () => {
//       if (!debouncedQuery.trim()) {
//         setBooks([]);
//         return;
//       }

//       setIsLoading(true);
//       setError(null);

//       try {
//         const results = await searchBooks(debouncedQuery);
//         setBooks(results.map(transformBookData));
//       } catch (err) {
//         setError('Failed to fetch books. Please try again later.');
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchBooks();
//   }, [debouncedQuery]);

//   return (
//     <BookSearchContext.Provider value={{ query, setQuery, books, isLoading, error }}>
//       {children}
//     </BookSearchContext.Provider>
//   );
// };

// export const useBookSearch = () => {
//   const context = useContext(BookSearchContext);
//   if (!context) {
//     throw new Error('useBookSearch must be used within a BookSearchProvider');
//   }
//   return context;
// };

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

      setIsLoading(true);
      setError(null);

      try {
        const results = await searchBooks({
          query: debouncedQuery,
          searchType,
          page: 1
        });
        toast.info("Searching books...");
        setBooks(results);
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