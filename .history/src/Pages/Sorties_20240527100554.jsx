import Header from '../Header'
import '../styles/sorties.css'
import {useState, useEffect} from 'react'
import {Button} from '@chakra-ui/react'




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

    





    return ( 

        
        <>
            
        </>
     );
}

export default Sorties;