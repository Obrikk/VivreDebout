import Header from '../Header'
import { Flex, Box, Button, Input, Grid } from '@chakra-ui/react'
import { useState, useEffect } from 'react'




function Conseil() {

    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })
    
    return ( 
        <>
            <Header></Header>
            <Grid gridTemplateColumns={{lg:'1fr 1fr 1fr 1fr 1fr'}} gridTemplateRows={{lg:'1fr 1fr 1fr 1fr 1fr'}}>
                <Flex justifyContent={{bg='red' gridArea={{lg:'2 / 2 / 2 / 2'}}> oui</Flex>
                <Flex justifyContent={{bg='red' gridArea={{lg:'4 / 2 / 4 / 2'}}> oui</Flex>
                <Flex justifyContent={{bg='red' gridArea={{lg:'3 / 3 / 3 / 3'}}> oui</Flex>
                <Flex justifyContent={{bg='red' gridArea={{lg:'2 / 4 / 2 / 4'}}> oui</Flex>
                <Flex justifyContent={{bg='red' gridArea={{lg:'4 / 4 / 4 / 4'}}> oui</Flex>
            </Grid>
            
        </>
     );
}

export default Conseil;