import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { updateModalData } from '../../helpers/api';
import { apiUrl } from '../../assets/data';
import { CardDataType } from '../../types/types';
import styles from './CardsList.module.css';

type CardsListProps = {
  cards: CardDataType[];
};

function CardsList(props: CardsListProps) {
  const { cards } = props;
  const [modalActive, setModalActive] = useState(false);
  const [modalData, setModalData] = useState<CardDataType | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const handleModalOpen = (url: string) => {
    setModalActive(true);
    updateModalData(url, setModalData, setIsLoading, setError);
  };
  return (
    <section>
      <ul className={styles.list}>
        {cards.length ? (
          cards.map((card, index) => (
            <li
              className={styles.listItem}
              key={card.name}
              onClick={() => handleModalOpen(card.url || `${apiUrl}/${index}`)}
            >
              <Card cardData={card} />
            </li>
          ))
        ) : (
          <p>No cards to display</p>
        )}
      </ul>
      {modalActive ? (
        isLoading ? (
          <LoadingSpinner />
        ) : (
          <Modal setActive={setModalActive} data={modalData} error={error} />
        )
      ) : (
        ''
      )}
    </section>
  );
}

export default CardsList;
