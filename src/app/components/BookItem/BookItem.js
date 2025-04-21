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
    // <article className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    //   {book.coverId && (
    //     <div className="relative h-48 mb-4">
    //       <Image
    //         src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
    //         alt={`Cover for ${book.title}`}
    //         // fill
    //         width={400}
    //         height={400}
    //         className="object-contain"
    //         // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    //       />
    //     </div>
    //   )}
    //   <h2 className="text-xl font-semibold mb-2">{book.title}</h2>
    //   {book.authors && (
    //     <p className="text-gray-600 mb-2">
    //       by {book.authors.join(', ')}
    //     </p>
    //   )}
    //   {book.year && (
    //     <p className="text-sm text-gray-500">
    //       First published: {book.year}
    //     </p>
    //   )}
    // </article>
  );
};

export default BookItem;