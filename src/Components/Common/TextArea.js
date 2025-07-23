import { InputTextarea } from 'primereact/inputtextarea';

export default function TextArea({ rows, cols, value, onChange, placeholder }) {
  return (
    <InputTextarea
      rows={rows}
      cols={cols}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}
