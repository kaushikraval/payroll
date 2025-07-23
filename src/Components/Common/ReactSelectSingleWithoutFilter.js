import React from 'react';
import { Dropdown } from 'primereact/dropdown';
export default function Input({ placeholder, value, options, onChange }) {
  return (
    <Dropdown
      value={value}
      options={options}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
