import React from 'react';
import { validateImageIsImage } from '../../helpers/validation';
import styles from './FormSectionImage.module.css';
export const FormSectionImage = (props) => {
    const { register, errors } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: styles.row, htmlFor: "image" },
            "Image:",
            React.createElement("input", { ...register('image', {
                    required: 'An image should be selected',
                    validate: {
                        isImage: (value) => validateImageIsImage(value) || 'The file should be an image',
                    },
                }), type: "file", accept: "image/*", id: "image" })),
        React.createElement("p", { className: styles.errorMessage }, errors.image && errors.image?.message?.toString())));
};
