import Header from '../Header'
import {Input, Button} from '@chakra-ui/react'
import {useState, useEffect} from 'react'



function Actus() {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    

    function handleSubmit(){
        
    }


    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <h1>Actualités</h1>
                <Input w='5rem' placeholder='Nom' onChange={(e)=> setNom(e.target.value)}></Input>
                <Input w='5rem' placeholder='Prenom' onChange={(e) => setPrenom(e.target.value)}></Input>
                <Button onClick={handleSubmit}></Button>
                <p>{nom + prenom}</p>
            </div>
        </>
     );
}

export default Actus;