import React from 'react';
import { CascadeSelect } from 'primereact/cascadeselect';

export default function ReactTreeSelect(props) {
  const {
    value,
    options,
    optionLabel,
    optionGroupLabel,
    optionGroupChildren,
    placeholder,
    onChange,
    itemTemplate,
  } = props;
  return (
    <CascadeSelect
      value={value}
      options={options}
      optionLabel={optionLabel}
      optionGroupLabel={optionGroupLabel}
      optionGroupChildren={optionGroupChildren}
      placeholder={placeholder}
      onChange={onChange}
      itemTemplate={itemTemplate}
    />
  );
}
