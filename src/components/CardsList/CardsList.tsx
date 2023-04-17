import React, { useState } from 'react';
import Card from '../../components/Card/Card';
import Modal from '../../components/Modal/Modal';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { CardDataType } from '../../types/types';
import styles from './CardsList.module.css';
import { useLazyGetCharacterQuery } from '../../store/apiSlice';

type CardsListProps = {
  cards: CardDataType[];
};

function CardsList(props: CardsListProps) {
  const { cards } = props;
  const [modalActive, setModalActive] = useState(false);
  const [trigger, { isLoading, data, isError }] = useLazyGetCharacterQuery();
  const handleModalOpen = (id: string) => {
    setModalActive(true);
    trigger(id);
  };
  return (
    <section>
      <ul className={styles.list}>
        {cards.length ? (
          cards.map((card, index) => (
            <li
              className={styles.listItem}
              key={card.name}
              onClick={() =>
                handleModalOpen(card.url?.split('/').at(-2) || `${(index + 1).toString()}`)
              }
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
          <Modal
            setActive={setModalActive}
            data={data}
            error={isError ? 'Something went wrong' : ''}
          />
        )
      ) : (
        ''
      )}
    </section>
  );
}

export default CardsList;
