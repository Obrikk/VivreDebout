import { Flex, Heading, Box, Text, Grid,Input, Button  } from '@chakra-ui/react'
import Header from '../Header'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import {useState} from 'react'


function Admin() {

    const [login, setLogin] = useState({
        email:'',
        password:''
    })


    function handleSubmit(){
        console.log('submit')
    }

    const handleChange = (e)=>{
        const {name, value} = e.target
        setLogin((prevLogin)=>({...prevLogin,[name]:value}))
    }

    return ( 


        <>
            <Header></Header>
            <Flex  w={'100%'}direction={'column'} >
                <Heading w={'100%'} display={'Flex'} justifyContent={'center'}>Page administration</Heading>
                <form action="" onSubmit={handle}>
                <FormControl  w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} >

                    <FormLabel>Email</FormLabel>
                    <Input w={'50%'} bg='white' placeholder='Entrez votre email...' type='email' name='email' value={login.email} onChange={handleChange}></Input>
                    <FormLabel >Mot de passe</FormLabel>
                    <Input w={'50%'} bg='white' name='password' value={login.password} onChange={handleChange}></Input>

                    <Button type='submit'>Se connecter</Button>

                </FormControl>
                </form>

            </Flex>
        
        
        </>

     );
}

export default Admin;