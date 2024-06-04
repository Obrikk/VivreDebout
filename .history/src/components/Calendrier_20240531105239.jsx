import { useRef, useEffect } from 'react';
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import '@fullcalendar/common/main.css'; // Import FullCalendar CSS
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
// import '@fullcalendar/list/main.css';

function Calendrier() {
  const calendarRef = useRef(null);

  useEffect(() => {
    const calendarEl = calendarRef.current;

    if (calendarEl) {
      const calendar = new Calendar(calendarEl, {
        plugins: [dayGridPlugin, timeGridPlugin, listPlugin],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,listWeek'
        }
      });
      calendar.render();
    }
  }, []);

  return (
    <div className="calendrier">
      <div ref={calendarRef} id="calendar"></div>
    </div>
  );
}

export default Calendrier;
