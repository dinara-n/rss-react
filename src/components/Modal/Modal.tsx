import React from 'react';
import { CardDataType } from '../../types/types';
import styles from './Modal.module.css';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
import neuter from '../../assets/genders.png';

type ModalProps = {
  setActive: (value: boolean) => void;
  data: CardDataType | null;
  error: string;
};

function Modal(props: ModalProps) {
  const { setActive, data, error } = props;
  const handleClose = () => setActive(false);
  const gender = data?.gender === 'male' ? male : data?.gender === 'female' ? female : neuter;
  return (
    <div className={styles.modal} onClick={handleClose}>
      <section className={styles.content} onClick={(evt) => evt.stopPropagation()}>
        <button className={styles.close} type="button" onClick={handleClose}>
          x
        </button>
        {!!error ? (
          <p>{error}</p>
        ) : (
          <>
            <h3 className={styles.title}>{data?.name}</h3>
            <dl>
              {!!data?.height && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Height:</dt>
                  <dd className={styles.paramData}>{data.height}</dd>
                </div>
              )}
              {!!data?.mass && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Mass:</dt>
                  <dd className={styles.paramData}>{data.mass}</dd>
                </div>
              )}
              {!!data?.hair_color && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Heir color:</dt>
                  <dd className={styles.paramData}>{data.hair_color}</dd>
                </div>
              )}
              {!!data?.skin_color && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Skin color:</dt>
                  <dd className={styles.paramData}>{data.skin_color}</dd>
                </div>
              )}
              {!!data?.eye_color && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Eye color:</dt>
                  <dd className={styles.paramData}>{data.eye_color}</dd>
                </div>
              )}
              {!!data?.birth_year && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Date of birth:</dt>
                  <dd className={styles.paramData}>{data.birth_year}</dd>
                </div>
              )}
              {!!data?.species && typeof data.species === 'string' && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Species:</dt>
                  <dd className={styles.paramData}>{data.species}</dd>
                </div>
              )}
              {!!data?.homeworld && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Home world:</dt>
                  <dd className={styles.paramData}>
                    <a href={data.homeworld}>{data.homeworld}</a>
                  </dd>
                </div>
              )}
              {!!data?.films && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Films:</dt>
                  <dd className={styles.paramData}>
                    {data.films.map((film) => film.split('/').at(-2)).join(', ')}
                  </dd>
                </div>
              )}
              {!!data?.vehicles && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Vehicles:</dt>
                  <div>
                    {!data.vehicles.length && 'none'}
                    {data.vehicles.map((vehicle) => (
                      <dd className={styles.paramData} key={vehicle}>
                        <a href={vehicle}>{vehicle}</a>
                      </dd>
                    ))}
                  </div>
                </div>
              )}
              {!!data?.starships && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Starships:</dt>
                  <div>
                    {!data.starships.length && 'none'}
                    {data.starships.map((starship) => (
                      <dd className={styles.paramData} key={starship}>
                        <a href={starship}>{starship}</a>
                      </dd>
                    ))}
                  </div>
                </div>
              )}
              {!!data?.gender && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Gender:</dt>
                  <dd className={styles.paramData}>
                    <img src={gender} title={data.gender} aria-label={data.gender} />
                  </dd>
                </div>
              )}
              {!!data?.created && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Created:</dt>
                  <dd className={styles.paramData}>{data.created.split('T')[0]}</dd>
                </div>
              )}
              {!!data?.edited && (
                <div className={styles.parameter}>
                  <dt className={styles.paramName}>Edited:</dt>
                  <dd className={styles.paramData}>{data.edited.split('T')[0]}</dd>
                </div>
              )}
            </dl>
          </>
        )}
      </section>
    </div>
  );
}

export default Modal;
