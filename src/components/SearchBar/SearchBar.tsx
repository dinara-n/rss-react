import React, { useEffect, useRef, useState } from 'react';
import styles from './SearchBar.module.css';
import { CardDataType } from '../../types/types';
import { updateCardsData } from '../../helpers/api';

type SearchBarProps = {
  setCardsData: (value: CardDataType[]) => void;
  setIsLoading: (value: boolean) => void;
};

function SearchBar(props: SearchBarProps) {
  const { setCardsData, setIsLoading } = props;
  const [searchValue, setSearchValue] = useState<string>(localStorage.getItem('searchValue') ?? '');
  const searchRef = useRef<string>(searchValue);

  useEffect(() => {
    setSearchValue(localStorage.getItem('searchValue') ?? '');
    return () => localStorage.setItem('searchValue', searchRef.current);
  }, [setSearchValue]);

  useEffect(() => {
    searchRef.current = searchValue;
  }, [searchValue]);

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(evt.target.value);
  };

  const handleSearchClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    updateCardsData(searchRef.current, setCardsData, setIsLoading);
    localStorage.setItem('searchValue', searchRef.current);
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
        <button type="submit" onClick={handleSearchClick}></button>
      </form>
    </>
  );
}

export default SearchBar;
