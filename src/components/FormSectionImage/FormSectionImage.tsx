import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { validateImageIsImage } from '../../helpers/validation';
import styles from './FormSectionImage.module.css';

type FormSectionImageType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const FormSectionImage = (props: FormSectionImageType) => {
  const { register, errors } = props;
  return (
    <>
      <label className={styles.row} htmlFor="image">
        Image:
        <input
          {...register('image', {
            required: 'An image should be selected',
            validate: {
              isImage: (value) => validateImageIsImage(value) || 'The file should be an image',
            },
          })}
          type="file"
          accept="image/*"
          id="image"
        />
      </label>
      <p className={styles.errorMessage}>{errors.image && errors.image?.message?.toString()}</p>
    </>
  );
};
