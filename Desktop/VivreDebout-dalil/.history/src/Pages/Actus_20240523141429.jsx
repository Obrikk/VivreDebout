import Header from '../Header'
import {Input, Button} from '@chakra-ui/react'
import {useState, useEffect} from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'



function Actus() {

    const [nom, setNom] = useState('')
    const [prenom, setPrenom] = useState('')
    

    function handleSubmit(){
        
    }


    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <FormControl>
                    <FormLabel>Nom</FormLabel>
                    <Input type='text'/>
                    <FormLabel>Prenom</FormLabel>
                    <Input type='email'/>
                </FormControl>
            </div>
        </>
     );
}

export default Actus;