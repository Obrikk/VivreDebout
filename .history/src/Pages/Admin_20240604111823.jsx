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


    const handleSubmit =() => {

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
                <FormControl onSubmit={handleSubmit} w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} >

                    <FormLabel>Email</FormLabel>
                    <Input w={'50%'} bg='white' placeholder='Entrez votre email...' name='email' value={login.email} onChange={handleChange}></Input>
                    <FormLabel >Mot de passe</FormLabel>
                    <Input w={'50%'} bg='white'></Input>

                    <Button type='submit'></Button>

                </FormControl>

            </Flex>
        
        
        </>

     );
}

export default Admin;