import { Flex, Heading, Box, Text, Grid,Input  } from '@chakra-ui/react'
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
            <Flex  w={'100%'}direction={'column'} >
                <Heading w={'100%'} display={'Flex'} justifyContent={'center'}>Page administration</Heading>
                <FormControl w={'100%'} display={'flex'} flexDir={'column'} alignItems={'center'} >
                    <FormLabel w>OUI</FormLabel>
                    <Input></Input>
                    <FormLabel>OUI</FormLabel>
                    <Input></Input>

                </FormControl>

            </Flex>
        
        
        </>

     );
}

export default Admin;