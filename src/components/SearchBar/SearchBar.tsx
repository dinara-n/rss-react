import React, { useEffect, useRef } from 'react';
import styles from './SearchBar.module.css';
import searchIcon from '../../assets/search.png';
import { useAppDispatch } from '../../hooks/hooks';
import { updateSearchQuery } from '../../store/searchSlice';

type SearchBarProps = {
  searchValue: string;
  setSearchValue: (value: string) => void;
  trigger: (value: string) => void;
};

function SearchBar(props: SearchBarProps) {
  const { searchValue, setSearchValue, trigger } = props;
  const dispatch = useAppDispatch();
  const searchRef = useRef<string>(searchValue ?? '');

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const handleSearchClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    dispatch(updateSearchQuery(searchRef.current));
    trigger(searchValue);
  };

  return (
    <>
      <form className={styles.search}>
        <input
          className={styles.searchInput}
          type="search"
          value={searchValue ?? ''}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button
          className={styles.searchButton}
          type="submit"
          onClick={handleSearchClick}
          aria-label="Search."
        >
          <img className={styles.searchButtonIcon} src={searchIcon} />
        </button>
      </form>
    </>
  );
}

export default SearchBar;
