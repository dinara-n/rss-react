import React, { useState } from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardsList from '../../components/CardsList/CardsList';
import { CardDataType } from '../../types/types';

function FormPage() {
  const [cards, setCards] = useState<CardDataType[] | []>([]);

  return (
    <>
      <h1>Form</h1>
      <AddCardForm cards={cards} setCards={setCards} />
      <CardsList cards={cards} />
    </>
  );
}

export default FormPage;
