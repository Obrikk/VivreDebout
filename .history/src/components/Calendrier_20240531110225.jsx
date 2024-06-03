import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


function Calendrier() {
    return ( 
        <div className="calendrier">
            <Fullcalendar
                plugins={[dayGridPlugin,timeGridPlugin, listPlugin]}
                initialView={"dayGridMonth"}
            />
        </div>
     );
}

export default Calendrier;