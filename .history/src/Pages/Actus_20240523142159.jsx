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
    

    function handleSubmit(e){
        e.preventDefault();
        const user = {
            nom : {nom},
            prenom: {prenom}

        }
        console.log(user)

        
    }


    return ( 
        <>
            <Header></Header>
            <div className="actus">
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>
                    <Input
                    type="text"
                    placeholder="name..."
                    size="lg"
                    onChange={event => setNom(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired mt={6}>
                    <FormLabel>Password</FormLabel>
                    <Input
                    type="text"
                    placeholder="Prenom..."
                    size="lg"
                    onChange={event => setPrenom(event.currentTarget.value)}
                    />
                </FormControl>
                <Button
                    variantColor="teal"
                    variant="outline"
                    type="submit"
                    width="full"
                    mt={4}
                >
                    Sign In
                </Button>
            </form>
            </div>
        </>
     );
}

export default Actus;