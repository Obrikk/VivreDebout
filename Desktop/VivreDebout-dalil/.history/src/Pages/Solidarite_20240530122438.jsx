import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, GridItem, Heading } from '@chakra-ui/react'



function Solidarite() {




    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <Grid templateColumns='1fr 1fr 1fr'>
                <GridItem width='100%' height='100%' bg='red' boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}>
                    <Heading>Conseils</Heading>
                </GridItem>
                <GridItem></GridItem>
                <GridItem></GridItem>
            </Grid>
        </>


     );
}

export default Solidarite;