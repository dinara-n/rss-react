import React from 'react';
import Card from '../../components/Card/Card';
import styles from './CardsList.module.css';
import { CardDataType } from 'types/types';

type CardsListProps = {
  cards: CardDataType[];
};

function CardsList(props: CardsListProps) {
  const { cards } = props;
  return (
    <section>
      <ul className={styles.list}>
        {cards.length ? (
          cards.map((card) => (
            <li key={card.name}>
              <Card cardData={card} />
            </li>
          ))
        ) : (
          <p>No cards to display</p>
        )}
      </ul>
    </section>
  );
}

export default CardsList;
