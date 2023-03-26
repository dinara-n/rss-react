import React from 'react';
import { CardDataType } from 'types/types';
import styles from './Card.module.css';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
import neuter from '../../assets/genders.png';

type CardProps = {
  cardData: CardDataType;
};

function Card(props: CardProps) {
  const { cardData } = props;
  const gender = cardData.gender === 'male' ? male : cardData.gender === 'female' ? female : neuter;
  return (
    <section className={styles.card}>
      <h3 className={styles.title}>{cardData.name}</h3>
      <img className={styles.image} src={cardData.image} />
      <dl>
        {!!cardData.height && (
          <div className={styles.parameter}>
            <dt className={styles.paramName}>Height:</dt>
            <dd className={styles.paramData}>{cardData.height} sm</dd>
          </div>
        )}
        {!!cardData.mass && (
          <div className={styles.parameter}>
            <dt className={styles.paramName}>Mass:</dt>
            <dd className={styles.paramData}>{cardData.mass} kg</dd>
          </div>
        )}
        <div className={styles.parameter}>
          <dt className={styles.paramName}>Date of birth:</dt>
          <dd className={styles.paramData}>{cardData.birth_year}</dd>
        </div>
        {!!cardData.species && (
          <div className={styles.parameter}>
            <dt className={styles.paramName}>Species:</dt>
            <dd className={styles.paramData}>{cardData.species}</dd>
          </div>
        )}
        <div className={styles.parameter}>
          <dt className={styles.paramName}>Gender:</dt>
          <dd className={styles.paramData}>
            <img src={gender} title={cardData.gender} aria-label={cardData.gender} />
          </dd>
        </div>
      </dl>
    </section>
  );
}

export default Card;
