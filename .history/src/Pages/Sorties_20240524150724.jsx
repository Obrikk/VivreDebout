import Header from '../Header'
import '../styles/sorties.css'
import {useState, useEffect} from 'react'




function Sorties() {



    const [sorties, setSorties] = useState([])

    useEffect(() => {
        const fetchSorties = async () => {
            try {
                // Fetch des données depuis l'API
                const response = await fetch('http://localhost:3000/sorties');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                // Extraction des données JSON
                const data = await response.json();
                // Mise à jour de l'état avec les données récupérées
                setSorties(data);
                console.log('Les sorties ont été mises à jour :', data);
            } catch (error) {
                console.error('Erreur lors de la récupération des sorties :', error.message);
            }
        };

        // Appel de la fonction fetchSorties
        fetchSorties();
    }, []); 

    function clickButton(){
        console.log(sorties[0])
    }


    return ( 
        <>
            <Header/>
            <div className="sorties">
                <h1>skldfj</h1>
                <button onClick={()=>clickButton()}>Users</button>
                
                <ul>
                    {sorties.map((sortie, idSortie)=>(
                        <li key={idSortie}>
                            <div className="card">
                                <h2>{sortie.Nom}</h2>
                                <h2>{sortie.Date}</h2>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </>
     );
}

export default Sorties;