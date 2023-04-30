import React from 'react';
export const FormSectionGender = React.forwardRef(({ gender }, ref) => (React.createElement("label", { htmlFor: `gender-${gender}` },
    React.createElement("input", { type: "radio", name: "gender", id: `gender-${gender}`, value: gender, ref: ref }),
    ` ${gender}`)));
