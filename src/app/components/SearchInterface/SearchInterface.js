'use client';

import { useBookSearch } from "@/app/context/BookSearchContext";
import SearchBar from "../SearchBar/SearchBar";
import BookList from "../BookList/BookList";
import styles from '../SearchInterface/SearchInterface.module.css';
import Footer from "../Footer/Footer";
import {toast } from 'react-toastify';
const SearchInterface = () => {
  const { error } = useBookSearch();

  return (
<div className={styles.searchInterface}>
<header className={styles.header}>
  <div className={styles.headerContent}>
    <div className={styles.logoContainer}>
      <h1 className={styles.logo}>
        BookQuest
      </h1>
    </div>

    {/* Center - Search */}
    <div className={styles.searchContainer}>
      <div className={styles.searchInputWrapper}>
      <SearchBar />
  <div className={styles.searchIcon}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      aria-hidden="true"
      role="img"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  </div>
      </div>
    </div>

    {/* Right Side - Navigation */}
    <nav className={styles.navLinks}>
      <a href="#favorites" className={styles.navLink}>Favorite Books</a>
      <a href="#login" className={styles.navLink}>Login</a>
    </nav>
  </div>
</header>    
 
  
  <div className={styles.contentArea}>
    {error && (
      <div className={styles.errorMessage}>
        {toast.error("Error fetching books. Please try again.")}
      </div>
    )}
    <BookList />
  </div>
  <Footer/>
</div>
  );
};

export default SearchInterface;