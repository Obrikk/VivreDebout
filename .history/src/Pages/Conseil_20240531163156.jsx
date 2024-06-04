import Header from '../Header'
import { Flex, Box, Button, Input } from '@chakra-ui/react'
import { useState, useEffect } from 'react'




function Conseil() {

    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })
    
    return ( 
        <>
            <Header></Header>
            <Grid></Grid>
            
        </>
     );
}

export default Conseil;