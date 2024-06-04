import { Flex, Heading, Box, Text, Grid,Input  } from '@chakra-ui/react'
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


    return ( 


        <>
            <Header></Header>
            <Flex  w={'100%'}direction={'column'} >
                <Heading w={'100%'} display={'Flex'} justifyContent={'center'}>Page administration</Heading>
                <FormControl onSubmit={handleSubmit} w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} >
                    
                    <FormLabel>OUI</FormLabel>
                    <Input w={'50%'} bg='white'></Input>
                    <FormLabel >OUI</FormLabel>
                    <Input w={'50%'} bg='white'></Input>

                </FormControl>

            </Flex>
        
        
        </>

     );
}

export default Admin;