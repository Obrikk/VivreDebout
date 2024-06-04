import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { list } from '@chakra-ui/react';


function Calendrier() {
    return ( 
        <div className="calendrier">
            <Calendar
                plugins={[dayGridPlugin,timeGridPlugin,listPlugin]}
            />
        </div>
     );
}

export default Calendrier;