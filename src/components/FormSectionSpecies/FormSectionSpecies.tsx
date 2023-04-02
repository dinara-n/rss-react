import React from 'react';
import { CharacterSpecies } from '../../types/types';
import styles from './FormSectionSpecies.module.css';

const CharacterSpeciesArray = Object.values(CharacterSpecies) as Array<CharacterSpecies>;

type FormSectionSpeciesType = {
  speciesIsNotEmpty: boolean;
};

export const FormSectionSpecies = React.forwardRef<HTMLSelectElement, FormSectionSpeciesType>(
  ({ speciesIsNotEmpty }, ref) => (
    <>
      <label className={styles.row} htmlFor="species">
        Species:
        <select name="species" id="species" ref={ref}>
          <option key="default" value="default"></option>
          {CharacterSpeciesArray.map((species) => (
            <option key={species} value={species}>
              {species}
            </option>
          ))}
        </select>
      </label>
      <p className={styles.errorMessage}>
        {!speciesIsNotEmpty ? 'Species should be selected' : ' '}
      </p>
    </>
  )
);
