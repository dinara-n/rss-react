import React from 'react';
import { CharacterSpecies } from '../../types/types';
import styles from './FormSectionSpecies.module.css';
const CharacterSpeciesArray = Object.values(CharacterSpecies);
export const FormSectionSpecies = (props) => {
    const { register, errors } = props;
    return (React.createElement(React.Fragment, null,
        React.createElement("label", { className: styles.row, htmlFor: "species" },
            "Species:",
            React.createElement("select", { ...register('species', { required: 'Species should be selected' }), id: "species" },
                React.createElement("option", { key: "default", value: "default" }),
                CharacterSpeciesArray.map((species) => (React.createElement("option", { key: species, value: species }, species))))),
        React.createElement("p", { className: styles.errorMessage }, errors.species && errors.species?.message?.toString())));
};
