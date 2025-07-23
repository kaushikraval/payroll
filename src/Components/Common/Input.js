import React from 'react';
import { InputText } from 'primereact/inputtext';

export default function Input({
  placeholder,
  value,
  onChange,
  type,
  className,
  disabled,
}) {
  return (
    <InputText
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
    />
  );
}
