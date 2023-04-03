import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import styles from './FormSectionBirth.module.css';

type FormSectionBirthType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const FormSectionBirth = (props: FormSectionBirthType) => {
  const { register, errors } = props;
  return (
    <>
      <label className={styles.row} htmlFor="birth_year">
        Date of birth:
        <input
          {...register('birthYear', { required: 'Date of birth should be selected' })}
          type="date"
          id="birth_year"
        />
      </label>
      <p className={styles.errorMessage}>
        {errors.birthYear && errors.birthYear?.message?.toString()}
      </p>
    </>
  );
};
