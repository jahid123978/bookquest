import Image from 'next/image';
import { FaUser, FaCalendarAlt } from 'react-icons/fa';
import styles from '../BookItem/BookItem.module.css'; 
const BookItem = ({ book }) => {
  return (
    <>
      <div className={styles.card}>
      {/* Cover Image */}
      {book.coverId && (
        <div className={styles.imageWrapper}>
          <Image
            src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
            alt={`Cover for ${book.title}`}
            layout="fill"
            objectFit="cover"
            className={styles.image}
          />
        </div>
      )}

      {/* Details */}
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>

        {book.authors && (
          <p className={styles.author}>
            <FaUser className={styles.icon} />
            {book.authors.join(', ')}
          </p>
        )}

        {book.year && (
          <p className={styles.year}>
            <FaCalendarAlt className={styles.icon} />
            {book.year}
          </p>
        )}

        <button className={styles.button}>View Details</button>
      </div>
    </div>
    </>
  );
};

export default BookItem;