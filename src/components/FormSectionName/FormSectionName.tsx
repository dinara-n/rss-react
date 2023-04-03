import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { validateNameStartsWithUppercase, validateNameIsUnique } from '../../helpers/validation';
import styles from './FormSectionName.module.css';

type FormSectionNameType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  cardsNames: string[];
};

export const FormSectionName = (props: FormSectionNameType) => {
  const { register, errors, cardsNames } = props;
  return (
    <>
      <label className={styles.row} htmlFor="name">
        Name:
        <input
          {...register('name', {
            required: 'Name should not be empty',
            validate: {
              startsWithUppercase: (value) =>
                validateNameStartsWithUppercase(value) ||
                'Name should start with an uppercase letter',
              isUnique: (value) =>
                validateNameIsUnique(value, cardsNames) || 'Name should be unique',
            },
          })}
          type="text"
          id="name"
        />
      </label>
      <p className={styles.errorMessage}>{errors.name && errors.name?.message?.toString()}</p>
    </>
  );
};
