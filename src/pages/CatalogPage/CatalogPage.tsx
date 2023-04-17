import React, { useState, useEffect } from 'react';
import CardsList from '../../components/CardsList/CardsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { useLazySearchCharactersQuery } from '../../store/apiSlice';
import { useAppSelector } from '../../hooks/hooks';

function CatalogPage() {
  const searchQuery = useAppSelector((state) => state.search.query);
  const [searchValue, setSearchValue] = useState<string>(searchQuery ?? '');
  const [trigger, { isLoading, data, isError }] = useLazySearchCharactersQuery();
  useEffect(() => {
    trigger(searchQuery);
  }, [searchQuery, trigger]);
  return (
    <>
      <h1>Catalog</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} trigger={trigger} />
      {isLoading ? <LoadingSpinner /> : data ? <CardsList cards={data?.results ?? []} /> : ''}
      {isError ? 'Something went wrong' : ''}
    </>
  );
}

export default CatalogPage;
