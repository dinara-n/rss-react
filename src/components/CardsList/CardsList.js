import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import styles from './CardsList.module.css';
import { useLazyGetCharacterQuery } from '../../store/apiSlice';
function CardsList(props) {
    const { cards } = props;
    const [modalActive, setModalActive] = useState(false);
    const [trigger, { isLoading, data, isError }] = useLazyGetCharacterQuery();
    const handleModalOpen = (id) => {
        setModalActive(true);
        trigger(id);
    };
    return (React.createElement("section", null,
        React.createElement("ul", { className: styles.list }, cards.length ? (cards.map((card, index) => (React.createElement("li", { className: styles.listItem, key: card.name, onClick: () => handleModalOpen(card.url?.split('/').at(-2) || `${(index + 1).toString()}`) },
            React.createElement(Card, { cardData: card }))))) : (React.createElement("p", null, "No cards to display"))),
        modalActive ? (isLoading ? (React.createElement(LoadingSpinner, null)) : (React.createElement(Modal, { setActive: setModalActive, data: data, error: isError ? 'Something went wrong' : '' }))) : ('')));
}
export default CardsList;
