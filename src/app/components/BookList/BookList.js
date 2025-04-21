
'use client';
import { useBookSearch } from '@/app/context/BookSearchContext';
import styles from '../BookList/BookList.module.css';
import BookItem from '../BookItem/BookItem';

export default function BookList() {
  const { books, isLoading } = useBookSearch();

  if (!isLoading && books.length === 0) {
    return (
      <div className={styles.empty}>
        No books found. Try another search!
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
      {isLoading && Array(4)
        .fill(null)
        .map((_, i) => (
          <div key={i} className={styles.skeleton} />
      ))}
    </div>
  );
}