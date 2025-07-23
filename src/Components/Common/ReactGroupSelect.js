import React from 'react';
import { Dropdown } from 'primereact/dropdown';

export default function ReactGroupSelect({
  options,
  value,
  onChange,
  placeholder,
  optionGroupTemplate,
}) {
  return (
    <>
      <Dropdown
        value={value}
        filter
        options={options}
        onChange={onChange}
        optionLabel="label"
        optionGroupLabel="label"
        optionGroupChildren="items"
        optionGroupTemplate={optionGroupTemplate}
        placeholder={placeholder}
        className="group_select"
      />
    </>
  );
}
