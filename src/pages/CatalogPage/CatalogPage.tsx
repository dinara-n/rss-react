import React, { useEffect, useState } from 'react';
import CardsList from '../../components/CardsList/CardsList';
import SearchBar from '../../components/SearchBar/SearchBar';
import { CardDataType } from '../../types/types';
import { updateCardsData } from '../../helpers/api';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

function CatalogPage() {
  const [cardsData, setCardsData] = useState<CardDataType[] | []>([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const search = localStorage.getItem('searchValue') ?? '';
    updateCardsData(search, setCardsData, setIsLoading);
  }, []);
  return (
    <>
      <h1>Catalog</h1>
      <SearchBar setCardsData={setCardsData} setIsLoading={setIsLoading} />
      {isLoading ? <LoadingSpinner /> : <CardsList cards={cardsData} />}
    </>
  );
}

export default CatalogPage;
