'use client';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { useMemo } from 'react';
import { demoEvents } from '@/lib/demoEvents';

export default function Schedule() {
  const events = useMemo(() => demoEvents, []);
  return (
    <div className="card">
      <h2 className="h2 mb-4">Fixture</h2>
      <div style={{background:'#fff', borderRadius:'12px', padding:'8px'}}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          events={events}
          height="auto"
          headerToolbar={{ left: 'prev,next today', center: 'title', right: 'dayGridMonth,timeGridWeek,timeGridDay' }}
        />
      </div>
      <p className="muted mt-3">* Eventos demo precargados.</p>
    </div>
  );
}
