import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.css';

function SearchBar() {
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue') ?? '');
  }, []);

  useEffect(() => () => localStorage.setItem('searchValue', searchRef.current), [searchRef]);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  return (
    <>
      <form>
        <input
          className={styles.search}
          type="search"
          value={searchValue ?? ''}
          onChange={handleChange}
          placeholder="Search..."
        />
      </form>
    </>
  );
}

export default SearchBar;
