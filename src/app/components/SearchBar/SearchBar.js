
'use client';

import { useBookSearch } from "@/app/context/BookSearchContext";
import { toast } from "react-toastify";

const SearchBar = () => {
  const { query, setQuery, isLoading } = useBookSearch();
    function handleKeyDown(e) { 
      e.preventDefault();
      if(isLoading)
        toast.success('Successfully found books');
      setQuery(e.target.value);
    }
      
  return (
    <div className="mb-6">
      <input
        type="text"
        value={query}
        onChange={(e) => handleKeyDown(e)}
        placeholder="Search books..."
        className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Search books"
      />
    </div>
  );
};

export default SearchBar;