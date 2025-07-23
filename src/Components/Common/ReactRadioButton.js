import React from 'react';
import { RadioButton } from 'primereact/radiobutton';

export default function ReactRadioButton(props) {
  const { inputId, name, value, onChange, checked } = props;
  return (
    <RadioButton
      inputId={inputId}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
  );
}
