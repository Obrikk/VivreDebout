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

    async function getUsers(){
        try{
            const usersRes = await fetch('http://localhost:3000/users',{
                method: 'GET',
                headers: {
                    'Content-type': 'application/json'
                },
                body
            })
        }
    }
    

    async function handleSubmit(e){
        e.preventDefault();
        const user = {
            nom : nom,
            prenom: prenom

        }
        console.log(user)

        try{
            const response = await fetch('http://localhost:3000/adduser',{
                method: 'POST',
                headers: {
                    'Content-type' : 'application/json'
                },
                body: JSON.stringify({nom, prenom})
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout de l\'utilisateur');
              }

            const data = await response.json();
            console.log('Utilisateur ajouté avec succès:', data);

        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'utilisateur:', error.message);
            // Afficher un message d'erreur à l'utilisateur
          }
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


            <Button onClick={getUsers}></Button>
            <p>{users}</p>

            </div>
        </>
     );
}

export default Actus;