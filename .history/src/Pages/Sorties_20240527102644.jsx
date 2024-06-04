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
                <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerBody marginTop='2rem'>
            <Input placeholder='Type here...' />
            <Input placeholder='Type here...' />
            <Input placeholder='Type here...' />
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

            </div>
        </>
     );
}

export default Sorties;