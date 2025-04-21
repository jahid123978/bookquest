

import SearchInterface from './components/SearchInterface/SearchInterface';
import { BookSearchProvider } from './context/BookSearchContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Book Search | Next.js',
  description: 'Open Library Book Search Application',
};

export default function Home() {
  return (
    <BookSearchProvider>
      <SearchInterface />
    </BookSearchProvider>
  );
}
