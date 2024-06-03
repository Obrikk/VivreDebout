import Header from '../Header'

import '../styles/actus.css'
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';


function Actus() {

    

    return ( 
        <>
            <Header></Header>
            <div className="actus">
            

            </div>
        </>
     );
}

export default Actus;