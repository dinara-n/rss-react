import React from 'react';
import styles from './Card.module.css';
import male from '../../assets/male.png';
import female from '../../assets/female.png';
import neuter from '../../assets/genders.png';
function Card(props) {
    const { cardData } = props;
    const gender = cardData.gender === 'male' ? male : cardData.gender === 'female' ? female : neuter;
    return (React.createElement("section", { className: styles.card },
        React.createElement("h3", { className: styles.title }, cardData.name),
        !!cardData.image && React.createElement("img", { className: styles.image, src: cardData.image }),
        React.createElement("dl", null,
            React.createElement("div", { className: styles.parameter },
                React.createElement("dt", { className: styles.paramName }, "Date of birth:"),
                React.createElement("dd", { className: styles.paramData }, cardData.birth_year)),
            !!cardData.species && typeof cardData.species === 'string' && (React.createElement("div", { className: styles.parameter },
                React.createElement("dt", { className: styles.paramName }, "Species:"),
                React.createElement("dd", { className: styles.paramData }, cardData.species))),
            React.createElement("div", { className: styles.parameter },
                React.createElement("dt", { className: styles.paramName }, "Gender:"),
                React.createElement("dd", { className: styles.paramData },
                    React.createElement("img", { src: gender, title: cardData.gender, "aria-label": cardData.gender }))))));
}
export default Card;
