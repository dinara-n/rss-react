import React from 'react';
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form/dist/types';
import { CharacterSpecies } from '../../types/types';
import styles from './FormSectionSpecies.module.css';

const CharacterSpeciesArray = Object.values(CharacterSpecies) as Array<CharacterSpecies>;

type FormSectionSpeciesType = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export const FormSectionSpecies = (props: FormSectionSpeciesType) => {
  const { register, errors } = props;
  return (
    <>
      <label className={styles.row} htmlFor="species">
        Species:
        <select {...register('species', { required: 'Species should be selected' })} id="species">
          <option key="default" value="default"></option>
          {CharacterSpeciesArray.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </label>
      <p className={styles.errorMessage}>{errors.species && errors.species?.message?.toString()}</p>
    </>
  );
};
