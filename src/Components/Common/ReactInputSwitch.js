import React from 'react';
import { InputSwitch } from 'primereact/inputswitch';

export default function ReactInputSwitch({ checked, onChange }) {
  return <InputSwitch checked={checked} onChange={onChange} />;
}
