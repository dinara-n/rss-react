import React from 'react';
import styles from './FormSectionImage.module.css';

type FormSectionImageType = {
  imageNotEmpty: boolean;
  imageIsImage: boolean;
};

export const FormSectionImage = React.forwardRef<HTMLInputElement, FormSectionImageType>(
  ({ imageNotEmpty, imageIsImage }, ref) => (
    <>
      <label className={styles.row} htmlFor="image">
        Image:
        <input type="file" accept="image/*" id="image" ref={ref} />
      </label>
      <p className={styles.errorMessage}>
        {!imageNotEmpty
          ? 'An image should be selected'
          : !imageIsImage
          ? 'The file should be an image'
          : ' '}
      </p>
    </>
  )
);
