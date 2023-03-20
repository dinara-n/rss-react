import React from 'react';
import CardsList from '../../components/CardsList/CardsList';
import SearchBar from '../../components/SearchBar/SearchBar';

function CatalogPage() {
  return (
    <>
      <h1>Catalog</h1>
      <SearchBar />
      <CardsList />
    </>
  );
}

export default CatalogPage;
