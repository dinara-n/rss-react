import React from 'react';
import AddCardForm from '../../components/AddCardForm/AddCardForm';
import CardsList from '../../components/CardsList/CardsList';
import { useAppSelector } from '../../hooks/hooks';
function FormPage() {
    const cards = useAppSelector((state) => state.form.cards);
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Form"),
        React.createElement(AddCardForm, null),
        React.createElement(CardsList, { cards: cards })));
}
export default FormPage;
