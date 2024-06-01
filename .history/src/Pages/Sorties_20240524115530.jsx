import Header from '../Header'
import '../styles/sorties.css'
import {useState, useEffect} from 'react'




function Sorties() {



    const [sorties, setSorties] = useState([])

    // useEffect(()=>{
    //     try{
    //         const sortiesRes = await fetch('env')
    //     }
    //     console.log('Les sorties ont été mises à jour :', sorties)
    // }, [sorties])



    return ( 
        <>
            <Header/>
            <div className="sorties">
                <h1>Sorties</h1>
            </div>
        </>
     );
}

export default Sorties;