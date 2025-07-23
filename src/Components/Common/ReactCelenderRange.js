import React, { useState } from 'react';
import { Calendar } from 'primereact/calendar';

export default function ReactCelenderRange({ placeholder }) {
  const [dates, setDates] = useState(null);
  return (
    <div>
      <Calendar
        value={dates}
        onChange={e => setDates(e.value)}
        selectionMode="range"
        readOnlyInput
        placeholder={placeholder}
      />
    </div>
  );
}
