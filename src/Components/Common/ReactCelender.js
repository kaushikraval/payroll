import React from 'react';
import { Calendar } from 'primereact/calendar';

export default function Input({
  placeholder,
  value,
  onChange,
  disabled,
  timeOnly,
  hourFormat,
  onKeyDown,
  numberOfMonths,
  selectionMode,
}) {
  return (
    <Calendar
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      showIcon
      disabled={disabled}
      timeOnly={timeOnly}
      hourFormat={hourFormat}
      onKeyDown={onKeyDown}
      numberOfMonths={numberOfMonths}
      selectionMode={selectionMode}
    ></Calendar>
  );
}
