import React from 'react';
import { CardDataType, CharacterGender, CharacterSpecies } from '../../types/types';
import styles from './AddCardForm.module.css';

const CharacterSpeciesArray = Object.values(CharacterSpecies) as Array<CharacterSpecies>;
const CharacterGenderArray = Object.values(CharacterGender) as Array<CharacterGender>;

type FormPageState = {
  cards: CardDataType[] | [];
};

type AddCardFormProps = {
  cards: CardDataType[] | [];
  setPageState: (newState: FormPageState) => void;
};

class AddCardForm extends React.Component<AddCardFormProps> {
  formRef: React.RefObject<HTMLFormElement>;
  formNameRef: React.RefObject<HTMLInputElement>;
  formBirthYearRef: React.RefObject<HTMLInputElement>;
  formSpeciesRef: React.RefObject<HTMLSelectElement>;
  formGenderMaleRef: React.RefObject<HTMLInputElement>;
  formGenderFemaleRef: React.RefObject<HTMLInputElement>;
  formGenderNARef: React.RefObject<HTMLInputElement>;
  formImageRef: React.RefObject<HTMLInputElement>;
  formAgreeRef: React.RefObject<HTMLInputElement>;

  constructor(props: AddCardFormProps) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.formRef = React.createRef();
    this.formNameRef = React.createRef();
    this.formBirthYearRef = React.createRef();
    this.formSpeciesRef = React.createRef();
    this.formGenderMaleRef = React.createRef();
    this.formGenderFemaleRef = React.createRef();
    this.formGenderNARef = React.createRef();
    this.formImageRef = React.createRef();
    this.formAgreeRef = React.createRef();
  }

  handleFormSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    this.props.setPageState({
      cards: [
        ...this.props.cards,
        {
          name: this.formNameRef.current?.value ?? '',
          birth_year: this.formBirthYearRef.current?.value ?? '',
          species:
            (this.formSpeciesRef.current?.value as CharacterSpecies) ?? CharacterSpecies.Human,
          gender: this.formGenderMaleRef.current?.checked
            ? CharacterGender.male
            : this.formGenderFemaleRef.current?.checked
            ? CharacterGender.female
            : CharacterGender.notApplicable,
          image: this.formImageRef.current?.files
            ? URL.createObjectURL(this.formImageRef.current?.files[0])
            : '',
        },
      ],
    });
  }

  render() {
    const getGenderRef = (gender: CharacterGender) =>
      gender === CharacterGender.male
        ? this.formGenderMaleRef
        : gender === CharacterGender.female
        ? this.formGenderFemaleRef
        : this.formGenderNARef;
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit}>
        <label className={styles.row} htmlFor="name">
          Name:
          <input type="text" name="name" id="name" ref={this.formNameRef} />
        </label>
        <label className={styles.row} htmlFor="birth_year">
          Date of birth:
          <input type="date" name="birth_year" id="birth_year" ref={this.formBirthYearRef} />
        </label>
        <label className={styles.row} htmlFor="species">
          Species:
          <select name="species" id="species" ref={this.formSpeciesRef}>
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
                <input
                  type="radio"
                  name="gender"
                  id={`gender-${gender}`}
                  value={gender}
                  ref={getGenderRef(gender)}
                />
                {` ${gender}`}
              </label>
            ))}
          </div>
        </label>
        <label className={styles.row} htmlFor="image">
          Image:
          <input type="file" accept="image/*" id="image" ref={this.formImageRef} />
        </label>
        <label htmlFor="agree">
          <input type="checkbox" name="agree" id="agree" value="agree" ref={this.formAgreeRef} />
          {' Create a card for this character'}
        </label>
        <button type="submit">Add character</button>
      </form>
    );
  }
}

export default AddCardForm;
