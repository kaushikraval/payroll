import React from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function Input({
  placeholder,
  value,
  options,
  onChange,
  filter,
  className,
  disabled,
}) {
  return (
    <Dropdown
      value={value}
      filter={filter}
      // showClear
      options={options}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    />
  );
}
