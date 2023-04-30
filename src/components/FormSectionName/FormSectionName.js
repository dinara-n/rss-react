import React from 'react';
import { validateNameStartsWithUppercase, validateNameIsUnique } from '../../helpers/validation';
import styles from './FormSectionName.module.css';
export const FormSectionName = (props) => {
    const { register, errors, cardsNames } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: styles.row, htmlFor: "name" },
            "Name:",
            React.createElement("input", { ...register('name', {
                    required: 'Name should not be empty',
                    validate: {
                        startsWithUppercase: (value) => validateNameStartsWithUppercase(value) ||
                            'Name should start with an uppercase letter',
                        isUnique: (value) => validateNameIsUnique(value, cardsNames) || 'Name should be unique',
                    },
                }), type: "text", id: "name" })),
        React.createElement("p", { className: styles.errorMessage }, errors.name && errors.name?.message?.toString())));
};
