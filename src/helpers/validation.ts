import { imageExtentions } from '../assets/data';

export const validateInputNotEmpty = (inputValue: string) => !!inputValue;
export const validateNameStartsWithUppercase = (value: string) => !!value.match(/^[A-Z]/);
export const validateNameIsUnique = (value: string, names: string[]) => !names.includes(value);
export const validateSelectIsNotEmpty = (selectValue: string) => selectValue !== 'default';
export const validateGenderNotEmpty = (...args: boolean[]) => args.includes(true);
export const validateImageNotEmpty = (files: FileList | null | undefined) => !!files?.length;
export const validateAgreeIsChecked = (value: boolean) => value;
export const validateImageIsImage = (files: FileList | null | undefined) => {
  if (files && files[0] && files[0].name) {
    const extension = files[0].name.split('.').at(-1);
    return !!extension && imageExtentions.includes(extension);
  }
  return false;
};
