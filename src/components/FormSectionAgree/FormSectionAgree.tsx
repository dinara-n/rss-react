import React from 'react';
import styles from './FormSectionAgree.module.css';

type FormSectionAgreeType = {
  agreeIsChecked: boolean;
};

export const FormSectionAgree = React.forwardRef<HTMLInputElement, FormSectionAgreeType>(
  ({ agreeIsChecked }, ref) => (
    <>
      <label htmlFor="agree">
        <input type="checkbox" name="agree" id="agree" value="agree" ref={ref} />
        {' Create a card for this character'}
      </label>
      <p className={styles.errorMessage}>
        {!agreeIsChecked ? 'This field should be checked' : ' '}
      </p>
    </>
  )
);
