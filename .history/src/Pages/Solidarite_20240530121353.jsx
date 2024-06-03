import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid } from '@chakra-ui/react'



function Solidarite() {




    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <Grid>
                Grid
            </Grid>
        </>


     );
}

export default Solidarite;