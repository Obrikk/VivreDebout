import Header from '../Header'
import '../styles/sorties.css'
import React, {useState, useEffect} from 'react';
import {Button, useDisclosure, Input} from '@chakra-ui/react'

import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'




function Sorties() {



    const [sorties, setSorties] = useState([])
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

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
            <Header></Header>
            <div className="sorties">
                <h1>Sorties</h1>
                <section className='sorties-container'>
                    {sorties.map((sortie)=> (
                        <li key={sortie.id}>{sortie.Nom}</li>
                    ))}
                </section>
                {/* Bouton ajouter une sortie, ouvre un drawer */}
                
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <p>Nom de la sortie</p>  
              <Input name='Nom' placeholder='Ex : Sortie à Carrefour ...' />
              <p>Type de la sortie</p>  
              <Input name='Type' placeholder='Ex : Sportive, Culturelle...' />
              <p>Date de la sortie</p>  
              <Input name='Date' placeholder='Ex : 2024-06-' />
              <p>Type de la sortie</p>  
              <Input name='Type' placeholder='Ex : Sportive, Culturelle...' />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

            </div>
        </>
     );
}

export default Sorties;