import React from 'react';
import styles from './FormSectionBirth.module.css';
export const FormSectionBirth = (props) => {
    const { register, errors } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: styles.row, htmlFor: "birth_year" },
            "Date of birth:",
            React.createElement("input", { ...register('birthYear', { required: 'Date of birth should be selected' }), type: "date", id: "birth_year" })),
        React.createElement("p", { className: styles.errorMessage }, errors.birthYear && errors.birthYear?.message?.toString())));
};
