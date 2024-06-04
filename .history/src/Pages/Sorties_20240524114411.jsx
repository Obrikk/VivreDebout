import Header from '../Header'
import '../styles/sorties.css'
import {useState, useEffect} from 'react'


function Sorties() {


    const [sorties, setSorties] = useState([])

    useEffect(()=>{
        console.log('Les sorties ont été mises à jour :')
    })



    return ( 
        <>
            <Header/>
            <div className="sorties">
                <h1>bjr</h1>
            </div>
        </>
     );
}

export default Sorties;