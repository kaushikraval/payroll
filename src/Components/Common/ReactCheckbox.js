import React from 'react';
import { Checkbox } from 'primereact/checkbox';

export default function ReactCheckbox({
  onChange,
  checked,
  inputId,
  name,
  value,
}) {
  return (
    <Checkbox
      inputId={inputId}
      checked={checked}
      onChange={onChange}
      name={name}
      value={value}
    />
  );
}
