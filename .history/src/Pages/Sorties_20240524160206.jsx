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

    const AddSortie = () => {
  const nomRef = useRef();
  const dateRef = useRef();
  const typeRef = useRef();
  const horairesRef = useRef();
  const lieuRef = useRef();

  const ajouterSortie = () => {
    const nom = nomRef.current.value;
    const date = dateRef.current.value;
    const type = typeRef.current.value;
    const horaires = horairesRef.current.value;
    const lieu = lieuRef.current.value;

    // Construire l'URL pour la requête POST
    const url = `http://localhost:3000/sorties/${nom}/${date}/${type}/${horaires}/${lieu}`;

    // Envoyer la requête POST
    axios.post(url)
      .then(response => {
        console.log(response.data);
        alert('Sortie ajoutée avec succès!');
      })
      .catch(error => {
        console.error('Erreur:', error);
        alert('Erreur lors de l\'ajout de la sortie');
      });
  };





    return ( 

        
        <>
            <Header/>
            <div className="sorties">
                <h1>skldfj</h1>
                <div className="add-sortie">
      <input 
        type="text" 
        placeholder='Nom' 
        ref={nomRef}
      />
      <input 
        type="text" 
        placeholder='Date' 
        ref={dateRef}
      />
      <input 
        type="text" 
        placeholder='Type (ex: "Sportif")' 
        ref={typeRef}
      />
      <input 
        type="text" 
        placeholder='Horaires' 
        ref={horairesRef}
      />
      <input 
        type="text" 
        placeholder='Lieu' 
        ref={lieuRef}
      />
      <button onClick={ajouterSortie}>ajouter une sortie</button>
    </div>

                <ul className='liste-sorties'>
                    {sorties.map((sortie)=>(
                        <li key={sortie.id}>
                            <div className="card">
                                <h2>{sortie.Nom}</h2>
                                <h2>{sortie.Date}</h2>
                                <h2>{sortie.Type}</h2>
                                <h2>{sortie.Horaires}</h2>
                                <h2>{sortie.Lieu}</h2>
                                <h2>{sortie.Date}</h2>
                                <Button>Modifier</Button>
                                <Button>Supprimer</Button>
                            </div>
                        </li>
                    ))}

                </ul>
            </div>
        </>
     );
}

export default Sorties;