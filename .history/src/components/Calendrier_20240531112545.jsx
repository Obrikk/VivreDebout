import Fullcalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // Import Tippy.js styles
import './tooltip.css'; // Import your custom tooltip styles


function Calendrier() {

    const events= [
        {
            title:"Titre",
            start:'2024-01-05T08:00:00',
            end:'2024-01-05T09:00:00'
        }
    ]


    return ( 
        <div className="calendrier">
            <Fullcalendar
                plugins={[dayGridPlugin,timeGridPlugin, listPlugin]}
                initialView={"dayGridMonth"}
                headerToolbar={{
                    start: "prev,next",
                    center: 'title',
                    end:'dayGridMonth, timeGridWeek'
                }}
                events={events}
                height={'80vh'}
                eventDidMount={(info)=>{
                    tippy(info.el, {
                        content: info.event.title,
                        trigger:'click',
                        theme: 'retro', // Optional: You can choose different themes or customize your own
                        animation: 'fade',
                        className=
                      });
                }}
            />
        </div>
     );
}

export default Calendrier;