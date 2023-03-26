import React from 'react';
import { CardDataType, CharacterGender, CharacterSpecies } from '../../types/types';
import styles from './AddCardForm.module.css';

const CharacterSpeciesArray = Object.values(CharacterSpecies) as Array<CharacterSpecies>;
const CharacterGenderArray = Object.values(CharacterGender) as Array<CharacterGender>;

type FormPageState = {
  cards: CardDataType[] | [];
};

type AddCardFormProps = {
  setPageState: (newState: FormPageState) => void;
};

class AddCardForm extends React.Component<AddCardFormProps> {
  constructor(props: AddCardFormProps) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    this.props.setPageState({ cards: [] });
  }

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label className={styles.row} htmlFor="name">
          Name:
          <input type="text" name="name" id="name" />
        </label>
        <label className={styles.row} htmlFor="birth_year">
          Date of birth:
          <input type="date" name="birth_year" id="birth_year" />
        </label>
        <label className={styles.row} htmlFor="species">
          Species:
          <select name="species" id="species">
            {CharacterSpeciesArray.map((species) => (
              <option key={species} value={species}>
                {species}
              </option>
            ))}
          </select>
        </label>
        <label className={styles.row}>
          Gender:
          <div>
            {CharacterGenderArray.map((gender) => (
              <label key={gender} htmlFor={`gender-${gender}`}>
                <input type="radio" name="gender" id={`gender-${gender}`} value={gender} />
                {` ${gender}`}
              </label>
            ))}
          </div>
        </label>
        <label className={styles.row} htmlFor="image">
          Image:
          <input type="file" accept="image/*" id="image" />
        </label>
        <label htmlFor="agree">
          <input type="checkbox" name="agree" id="agree" value="agree" />
          {' Create a card for this character'}
        </label>
        <button type="submit">Add character</button>
      </form>
    );
  }
}

export default AddCardForm;
