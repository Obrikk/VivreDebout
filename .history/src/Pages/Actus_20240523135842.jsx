import Header from '../Header'
import {Input} from '@chakra-ui/react'
import {useState, useEffect} from 'react'



function Actus() {

    const [nom, setNom]


    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <h1>Actualités</h1>
                <Input w='5rem' placeholder='Nom' onClick={}></Input>
                <Input w='5rem' placeholder='Prenom'></Input>
                <Input w='5rem' placeholder='Prenom'></Input>
            </div>
        </>
     );
}

export default Actus;