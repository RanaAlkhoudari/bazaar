import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchBar.css';

const SearchBar = ({ searchChange, submitHandler }) => {
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="search products"
        onChange={searchChange}
      />
      <button type="submit" className={styles.search_btn}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBar;
