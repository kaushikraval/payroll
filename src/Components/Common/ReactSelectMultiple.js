import React from 'react';
import { MultiSelect } from 'primereact/multiselect';

export default function ReactSelectMultiple({
  options,
  value,
  onChange,
  placeholder,
  itemTemplate,
  name,
  disabled,
  display,
}) {
  return (
    <>
      <MultiSelect
        placeholder={placeholder}
        value={value}
        filter
        showClear
        options={options}
        onChange={onChange}
        maxSelectedLabels={2}
        itemTemplate={itemTemplate}
        name={name}
        disabled={disabled}
        display={display}
      />
    </>
  );
}
