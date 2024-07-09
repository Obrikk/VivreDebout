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
                <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Flex  
                        as={motion.div}
                        width={'80%'} 
                        height={'80%'}    
                        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                        borderRadius={'0.75rem'}
                        padding={'1rem'}
                        justify={'center'}>
                        
                            <Heading>Conseils</Heading>

                    </Flex>
                </GridItem>
            </Grid>
        </>


     );
}

export default Solidarite;