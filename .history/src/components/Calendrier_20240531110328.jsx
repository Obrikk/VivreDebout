import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


function Calendrier() {

    const events= [
        {
            title:"Titre",
            start:'2023-01-05T08:00:00',
            end:'2023-01-05T08:00:00'
        }
    ]


    return ( 
        <div className="calendrier">
            <Fullcalendar
                plugins={[dayGridPlugin,timeGridPlugin, listPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{

                }}
            />
        </div>
     );
}

export default Calendrier;