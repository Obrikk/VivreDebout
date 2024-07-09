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
            start:'2024-05-27',
            end:'2024-05-29'
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
                fixedWeekCount=3
                eventDidMount={(info)=>{
                    tippy(info.el, {
                        content: `${info.event.title} <br/> Bonjour`,
                        trigger:'click',
                        allowHTML: true,
                        theme: 'retro', // Optional: You can choose different themes or customize your own
                        animation: 'fade',
                        className:'custom-tooltip',
                        height: '50Vh'
                      });
                }}
            />
        </div>
     );
}

export default Calendrier;