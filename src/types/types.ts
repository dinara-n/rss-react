export type CardDataType = {
  name: string;
  height?: string;
  mass?: string;
  hair_color?: string;
  skin_color?: string;
  eye_color?: string;
  birth_year: string;
  species?: CharacterSpecies;
  gender: CharacterGender;
  url?: string;
  image: string;
};

export type FormPageState = {
  cards: CardDataType[] | [];
};

export type ValidationRulesType = {
  nameNotEmpty: boolean;
  nameStartsWithUppercase: boolean;
  birthYearNotEmpty: boolean;
  speciesIsNotEmpty: boolean;
  genderNotEmpty: boolean;
  imageNotEmpty: boolean;
  imageIsImage: boolean;
  agreeIsChecked: boolean;
};

export enum CharacterGender {
  male = 'male',
  female = 'female',
  notApplicable = 'n/a',
}

export enum CharacterSpecies {
  Human = 'Human',
  Droid = 'Droid',
  Wookie = 'Wookie',
  Rodian = 'Rodian',
  Hutt = 'Hutt',
  MonCalamari = 'Mon Calamari',
  Ewok = 'Ewok',
  Neimodian = 'Neimodian',
  Gungan = 'Gungan',
  Dug = 'Dug',
}
