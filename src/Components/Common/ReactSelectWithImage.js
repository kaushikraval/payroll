import React from 'react';
import { Dropdown } from 'primereact/dropdown';
export default function ReactSelectWithImage(props) {
  const {
    value,
    options,
    onChange,
    optionLabel,
    filterBy,
    placeholder,
    valueTemplate,
    isShowClear,
    itemTemplate,
    className,
  } = props;
  return (
    <Dropdown
      value={value}
      options={options}
      onChange={onChange}
      optionLabel={optionLabel}
      filter
      showClear={isShowClear}
      filterBy={filterBy}
      placeholder={placeholder}
      valueTemplate={valueTemplate}
      itemTemplate={itemTemplate}
      className={className}
    />
  );
}
