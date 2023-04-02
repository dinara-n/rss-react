import React from 'react';
import { CharacterGender } from '../../types/types';

type FormSectionGenderProps = {
  gender: CharacterGender;
};

export const FormSectionGender = React.forwardRef<HTMLInputElement, FormSectionGenderProps>(
  ({ gender }, ref) => (
    <label htmlFor={`gender-${gender}`}>
      <input type="radio" name="gender" id={`gender-${gender}`} value={gender} ref={ref} />
      {` ${gender}`}
    </label>
  )
);
