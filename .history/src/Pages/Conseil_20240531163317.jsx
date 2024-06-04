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
            <Grid gridTemplateColumns={{lg:'1fr 1fr 1fr 1fr'}}>
                <Flex gridColumnStart={{lg:'2'}}></Flex>
            </Grid>
            
        </>
     );
}

export default Conseil;