import React from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardsList from '../../components/CardsList/CardsList';
import { useAppSelector } from '../../hooks/hooks';

function FormPage() {
  const cards = useAppSelector((state) => state.form.cards);

  return (
    <>
      <h1>Form</h1>
      <AddCardForm />
      <CardsList cards={cards} />
    </>
  );
}

export default FormPage;
