import React from 'react';
import Card from '../../components/Card/Card';
import { cardsData } from '../../assets/data';
import styles from './CardsList.module.css';

function CardsList() {
  return (
    <section>
      <ul className={styles.list}>
        {cardsData.map((card) => (
          <li key={card.name}>
            <Card cardData={card} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CardsList;
