import Header from '../Header'
import {Input} from '@chakra-ui/react'
import {useState, useEffect} from 'react'



function Actus() {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')


    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <h1>Actualités</h1>
                <Input w='5rem' placeholder='Nom' onClick={(e)=> set}></Input>
                <Input w='5rem' placeholder='Prenom'></Input>
                <Input w='5rem' placeholder='Prenom'></Input>
                <p>{nom}</p>
            </div>
        </>
     );
}

export default Actus;