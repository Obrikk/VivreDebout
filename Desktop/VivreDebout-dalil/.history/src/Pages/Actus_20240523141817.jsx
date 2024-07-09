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
            <form onSubmit={handleSubmit}>
                <FormControl isRequired>
                    <FormLabel>Nom</FormLabel>
                    <Input
                    type="text"
                    placeholder="test@test.com"
                    size="lg"
                    onChange={event => setEmail(event.currentTarget.value)}
                    />
                </FormControl>
                <FormControl isRequired mt={6}>
                    <FormLabel>Password</FormLabel>
                    <Input
                    type="password"
                    placeholder="*******"
                    size="lg"
                    onChange={event => setPassword(event.currentTarget.value)}
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