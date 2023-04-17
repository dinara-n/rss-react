import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CharacterGender } from '../../types/types';
import { FormSectionSpecies } from '../../components/FormSectionSpecies/FormSectionSpecies';
import { FormSectionGender } from '../../components/FormSectionGender/FormSectionGender';
import { FormSectionName } from '../../components/FormSectionName/FormSectionName';
import { FormSectionBirth } from '../../components/FormSectionBirth/FormSectionBirth';
import { FormSectionImage } from '../../components/FormSectionImage/FormSectionImage';
import { FormSectionAgree } from '../../components/FormSectionAgree/FormSectionAgree';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { addFormCard } from '../../store/formSlice';
import styles from './AddCardForm.module.css';

const CharacterGenderArray = Object.values(CharacterGender) as Array<CharacterGender>;

function AddCardForm() {
  const cards = useAppSelector((state) => state.form.cards);
  const dispatch = useAppDispatch();
  const [submitPending, setSubmitPending] = useState(false);
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const cardsNames = cards.map((card) => card.name);

  const addNewCard = () => {
    const fileList = getValues('image');
    dispatch(
      addFormCard({
        name: getValues('name') ?? '',
        birth_year: getValues('birthYear') ?? '',
        species: getValues('species') ?? '',
        gender: getValues('gender') ?? '',
        image: URL.createObjectURL(fileList[0]) ?? '',
      })
    );
  };

  const onSubmit = () => {
    setSubmitPending(true);
    setTimeout(() => {
      setSubmitPending(false);
      reset();
    }, 2000);
    addNewCard();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <p className={styles.submitMessage}>{submitPending ? 'The characher is saved' : ' '}</p>
      <FormSectionName register={register} errors={errors} cardsNames={cardsNames} />
      <FormSectionBirth register={register} errors={errors} />
      <FormSectionSpecies register={register} errors={errors} />
      <label className={styles.row}>
        Gender:
        <div>
          {CharacterGenderArray.map((gender) => (
            <FormSectionGender
              {...register('gender', { required: 'Gender should be selected' })}
              key={gender}
              gender={gender}
            />
          ))}
        </div>
      </label>
      <p className={styles.errorMessage}>{errors.gender && errors.gender?.message?.toString()}</p>
      <FormSectionImage register={register} errors={errors} />
      <FormSectionAgree register={register} errors={errors} />
      <button className={styles.submitButton} type="submit">
        Add character
      </button>
    </form>
  );
}

export default AddCardForm;
