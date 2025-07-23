import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import daygridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import '../../Assets/css/Style.css';

export default function ReactEventCelender() {
  const [events, setEvents] = useState([]);
  let sat = [];
  let sun = [];
  let present = [];
  let general = [];
  let shiftTime = [];
  function daysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  }
  useEffect(() => {
    const getEvenstData = () => {
      if (events?.length === 0) {
        if (sat.length === 0 && sun.length === 0) {
          let d = new Date();
          const date = d.getFullYear();
          const month = d.getMonth();
          let getTot = daysInMonth(month + 1, date);
          for (let i = 1; i <= getTot; i++) {
            let newDate = new Date(date, month, i);
            if (newDate.getDay() === 0) {
              sun.push({
                title: 'weekly off',
                date: new Date(`${date}-${month + 1}-${i}`),
                editable: false,
                classNames: ['calender_class'],
              });
            } else if (newDate.getDay() === 6) {
              sat.push({
                title: 'weekly off',
                date: new Date(`${date}-${month + 1}-${i}`),
                editable: false,
              });
            } else {
              present.push({
                title: 'present',
                date: new Date(`${date}-${month + 1}-${i}`),
                editable: false,
              });
              general.push({
                title: 'GEN',
                date: new Date(`${date}-${month + 1}-${i}`),
                editable: false,
              });
              shiftTime.push({
                date: new Date(`${date}-${month + 1}-${i}`),
                title: '9:30 AM - 6:30 PM',
                editable: false,
              });
            }
          }
          setEvents([
            {
              daysOfWeek: [0, 6],
              duration: { days: 1 },
              title: 'Weekly Off',
              backgroundColor: 'transparent',
              textColor: 'black',
              borderColor: 'transparent',
              classNames: ['status status_orange'],
            },
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              duration: { days: 1 },
              title: ['Present'],
              backgroundColor: 'transparent',
              textColor: 'black',
              borderColor: 'transparent',
              classNames: ['status status_green'],
            },
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              duration: { days: 1 },
              title: ['Gen'],
              backgroundColor: 'transparent',
              textColor: 'black',
              borderColor: 'transparent',
              classNames: ['general_wrap'],
            },
            {
              daysOfWeek: [1, 2, 3, 4, 5],
              duration: { days: 1 },
              title: ['9:30 AM - 6:30 PM'],
              backgroundColor: 'transparent',
              textColor: 'black',
              borderColor: 'transparent',
              classNames: ['office_timing'],
            },
          ]);
        }
      }
    };
    getEvenstData();
  });

  function renderEventContent(eventInfo) {
    return (
      <>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  return (
    <div className="attendence_calender_wrapper">
      <FullCalendar
        selectable
        events={events}
        editable={false}
        headerToolbar={{
          start: 'prev',
          center: 'title',
          end: 'next',
        }}
        plugins={[daygridPlugin, interactionPlugin]}
        eventContent={renderEventContent}
        views={{
          dayGrid: { fixedWeekCount: false },
        }}
      />
    </div>
  );
}
