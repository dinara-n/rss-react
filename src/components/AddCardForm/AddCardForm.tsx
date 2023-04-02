import React from 'react';
import {
  CardDataType,
  CharacterGender,
  CharacterSpecies,
  FormPageState,
  ValidationRulesType,
} from '../../types/types';
import {
  validateAgreeIsChecked,
  validateGenderNotEmpty,
  validateImageIsImage,
  validateImageNotEmpty,
  validateInputNotEmpty,
  validateNameIsUnique,
  validateNameStartsWithUppercase,
  validateSelectIsNotEmpty,
} from '../../helpers/validation';
import { FormSectionSpecies } from '../../components/FormSectionSpecies/FormSectionSpecies';
import { FormSectionGender } from '../../components/FormSectionGender/FormSectionGender';
import { FormSectionName } from '../../components/FormSectionName/FormSectionName';
import { FormSectionBirth } from '../../components/FormSectionBirth/FormSectionBirth';
import { FormSectionImage } from '../../components/FormSectionImage/FormSectionImage';
import { FormSectionAgree } from '../../components/FormSectionAgree/FormSectionAgree';
import styles from './AddCardForm.module.css';

const CharacterGenderArray = Object.values(CharacterGender) as Array<CharacterGender>;

type AddCardFormState = {
  validationRules: ValidationRulesType;
  submitPending: boolean;
};

type AddCardFormProps = {
  cards: CardDataType[] | [];
  setPageState: (newState: FormPageState) => void;
};

class AddCardForm extends React.Component<AddCardFormProps, AddCardFormState> {
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
    this.state = {
      validationRules: {
        nameNotEmpty: true,
        nameStartsWithUppercase: true,
        nameIsUnique: true,
        birthYearNotEmpty: true,
        speciesIsNotEmpty: true,
        genderNotEmpty: true,
        imageNotEmpty: true,
        imageIsImage: true,
        agreeIsChecked: true,
      },
      submitPending: false,
    };
    this.validateForm = this.validateForm.bind(this);
    this.addNewCard = this.addNewCard.bind(this);
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

  validateForm() {
    this.setState({
      validationRules: {
        ...this.state.validationRules,
        nameNotEmpty: validateInputNotEmpty(this.formNameRef.current?.value ?? ''),
        nameStartsWithUppercase: validateNameStartsWithUppercase(
          this.formNameRef.current?.value ?? ''
        ),
        nameIsUnique: validateNameIsUnique(
          this.formNameRef.current?.value ?? '',
          this.props.cards.map((card) => card.name)
        ),
        birthYearNotEmpty: validateInputNotEmpty(this.formBirthYearRef.current?.value ?? ''),
        speciesIsNotEmpty: validateSelectIsNotEmpty(
          this.formSpeciesRef.current?.value as CharacterSpecies
        ),
        genderNotEmpty: validateGenderNotEmpty(
          !!this.formGenderMaleRef.current?.checked,
          !!this.formGenderFemaleRef.current?.checked,
          !!this.formGenderNARef.current?.checked
        ),
        imageNotEmpty: validateImageNotEmpty(this.formImageRef.current?.files),
        imageIsImage: validateImageIsImage(this.formImageRef.current?.files),
        agreeIsChecked: validateAgreeIsChecked(this.formAgreeRef.current?.checked ?? false),
      },
    });
  }

  addNewCard() {
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

  async handleFormSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    await this.validateForm();
    const formIsValid = !Object.values(this.state.validationRules).includes(false);
    if (formIsValid) {
      this.setState({ submitPending: true });
      setTimeout(() => {
        this.setState({ submitPending: false });
        this.formRef.current?.reset();
      }, 2000);
      this.addNewCard();
    }
  }

  render() {
    const getGenderRef = (gender: CharacterGender) => {
      switch (gender) {
        case CharacterGender.male:
          return this.formGenderMaleRef;
        case CharacterGender.female:
          return this.formGenderFemaleRef;
        case CharacterGender.notApplicable:
          return this.formGenderNARef;
        default:
          return this.formGenderNARef;
      }
    };
    return (
      <form className={styles.form} onSubmit={this.handleFormSubmit} ref={this.formRef}>
        <p className={styles.submitMessage}>
          {this.state.submitPending ? 'The characher is saved' : ' '}
        </p>
        <FormSectionName
          ref={this.formNameRef}
          nameNotEmpty={this.state.validationRules.nameNotEmpty}
          nameStartsWithUppercase={this.state.validationRules.nameStartsWithUppercase}
          nameIsUnique={this.state.validationRules.nameIsUnique}
        />
        <FormSectionBirth
          ref={this.formBirthYearRef}
          birthYearNotEmpty={this.state.validationRules.birthYearNotEmpty}
        />
        <FormSectionSpecies
          ref={this.formSpeciesRef}
          speciesIsNotEmpty={this.state.validationRules.speciesIsNotEmpty}
        />
        <label className={styles.row}>
          Gender:
          <div>
            {CharacterGenderArray.map((gender) => (
              <FormSectionGender key={gender} gender={gender} ref={getGenderRef(gender)} />
            ))}
          </div>
        </label>
        <p className={styles.errorMessage}>
          {!this.state.validationRules.genderNotEmpty ? 'Gender should be selected' : ' '}
        </p>
        <FormSectionImage
          ref={this.formImageRef}
          imageNotEmpty={this.state.validationRules.imageNotEmpty}
          imageIsImage={this.state.validationRules.imageIsImage}
        />
        <FormSectionAgree
          ref={this.formAgreeRef}
          agreeIsChecked={this.state.validationRules.agreeIsChecked}
        />
        <button className={styles.submitButton} type="submit">
          Add character
        </button>
      </form>
    );
  }
}

export default AddCardForm;
