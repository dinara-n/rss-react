import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import styles from './FormSectionAgree.module.css';

type FormSectionAgreeType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const FormSectionAgree = (props: FormSectionAgreeType) => {
  const { register, errors } = props;
  return (
    <>
      <label htmlFor="agree">
        <input
          {...register('agree', { required: 'This field should be checked' })}
          type="checkbox"
          id="agree"
          value="agree"
        />
        {' Create a card for this character'}
      </label>
      <p className={styles.errorMessage}>{errors.agree && errors.agree?.message?.toString()}</p>
    </>
  );
};
