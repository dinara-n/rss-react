import React, { useEffect, useState } from 'react';
import CardsList from '../../components/CardsList/CardsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { CardDataType } from '../../types/types';
import { updateCardsData } from '../../helpers/api';

function CatalogPage() {
  const [cardsData, setCardsData] = useState<CardDataType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const search = localStorage.getItem('searchValue') ?? '';
    updateCardsData(search, setCardsData, setIsLoading, setError);
  }, []);
  return (
    <>
      <h1>Catalog</h1>
      <SearchBar setCardsData={setCardsData} setIsLoading={setIsLoading} setError={setError} />
      {isLoading ? <LoadingSpinner /> : cardsData ? <CardsList cards={cardsData} /> : ''}
      {error}
    </>
  );
}

export default CatalogPage;
