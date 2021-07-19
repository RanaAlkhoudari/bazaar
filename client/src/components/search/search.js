import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './searchBar.css';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(keyword);
    if (keyword.trim()) {
      // history.push(`/products/${keyword}`);
      history.push(`/products/${keyword}`);
    } else {
      history.push('/');
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.search_bar}
        type="text"
        placeholder="search products"
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className={styles.search_btn}>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default Search;
