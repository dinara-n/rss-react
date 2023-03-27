import React from 'react';
import styles from './FormSectionName.module.css';

type FormSectionNameType = {
  nameNotEmpty: boolean;
  nameStartsWithUppercase: boolean;
  nameIsUnique: boolean;
};

export const FormSectionName = React.forwardRef<HTMLInputElement, FormSectionNameType>(
  ({ nameNotEmpty, nameStartsWithUppercase, nameIsUnique }, ref) => (
    <>
      <label className={styles.row} htmlFor="name">
        Name:
        <input type="text" name="name" id="name" ref={ref} />
      </label>
      <p className={styles.errorMessage}>
        {!nameNotEmpty
          ? 'Name should not be empty'
          : !nameStartsWithUppercase
          ? 'Name should start with an uppercase letter'
          : !nameIsUnique
          ? 'Name should be unique'
          : ' '}
      </p>
    </>
  )
);
