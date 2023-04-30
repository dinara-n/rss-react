import React from 'react';
import styles from './FormSectionAgree.module.css';
export const FormSectionAgree = (props) => {
    const { register, errors } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { htmlFor: "agree" },
            React.createElement("input", { ...register('agree', { required: 'This field should be checked' }), type: "checkbox", id: "agree", value: "agree" }),
            ' Create a card for this character'),
        React.createElement("p", { className: styles.errorMessage }, errors.agree && errors.agree?.message?.toString())));
};
