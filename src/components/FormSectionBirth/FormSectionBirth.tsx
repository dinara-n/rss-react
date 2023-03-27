import React from 'react';
import styles from './FormSectionBirth.module.css';

type FormSectionBirthType = {
  birthYearNotEmpty: boolean;
};

export const FormSectionBirth = React.forwardRef<HTMLInputElement, FormSectionBirthType>(
  ({ birthYearNotEmpty }, ref) => (
    <>
      <label className={styles.row} htmlFor="birth_year">
        Date of birth:
        <input type="date" name="birth_year" id="birth_year" ref={ref} />
      </label>
      <p className={styles.errorMessage}>
        {!birthYearNotEmpty ? 'Date of birth should be selected' : ' '}
      </p>
    </>
  )
);
