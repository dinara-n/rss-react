import { imageExtentions } from '../assets/data';
export const validateInputNotEmpty = (inputValue) => !!inputValue;
export const validateNameStartsWithUppercase = (value) => !!value.match(/^[A-ZА-Я]/);
export const validateNameIsUnique = (value, names) => !names.includes(value);
export const validateSelectIsNotEmpty = (selectValue) => selectValue !== 'default';
export const validateGenderNotEmpty = (...args) => args.includes(true);
export const validateImageNotEmpty = (files) => !!files?.length;
export const validateAgreeIsChecked = (value) => value;
export const validateImageIsImage = (files) => {
    if (files && files[0] && files[0].name) {
        const extension = files[0].name.split('.').at(-1);
        return !!extension && imageExtentions.includes(extension);
    }
    return false;
};
