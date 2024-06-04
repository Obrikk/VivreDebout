import { Flex, Heading, Box, Text, Grid,  } from '@chakra-ui/react'
import Header from '../Header'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'


function Admin() {
    return ( 


        <>
            <Header></Header>
            <Flex  w={'100%'}direction={'column'} bg='salmon'>
                <Heading w={'100%'} bg={'red'} display={'Flex'} justifyContent={'center'}>Page administration</Heading>
                <FormControl>

                </FormControl>

            </Flex>
        
        
        </>

     );
}

export default Admin;