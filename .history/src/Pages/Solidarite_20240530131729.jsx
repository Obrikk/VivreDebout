import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import {motion} from 'framer-motion'



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
                        justify={'center'}
                        whileHover={{scale:1.05}}
                        initial={{x:'-20rem'}}
                        animate={{x:'0rem'}}
                        cursor='pointer'

                        >
                        
                            <Heading>Conseils</Heading>
                            <Text>Nous apportons les conseils pour le respect de l'éthique citoyenne</Text>

                    </Flex>
                </GridItem>
                <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Flex  
                        as={motion.div}
                        width={'80%'} 
                        height={'80%'}    
                        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                        borderRadius={'0.75rem'}
                        padding={'1rem'}
                        whileHover={{scale:1.05}}
                        initial={{y:'30rem'}}
                        animate={{y:'0rem'}}
                        direction={'column'}
                        cursor='pointer'
                        >
                            <Heading>Actions <br></br>Solidaires</Heading>
                            

                    </Flex>
                </GridItem>
                <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Flex  
                        as={motion.div}
                        width={'80%'} 
                        height={'80%'}    
                        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                        borderRadius={'0.75rem'}
                        padding={'1rem'}
                        justify={'center'}
                        whileHover={{scale:1.05}}
                        initial={{x:'20rem'}}
                        animate={{x:'0rem'}}
                        cursor='pointer'

                        >
                        
                            <Heading>Liens utiles</Heading>

                    </Flex>
                </GridItem>
            </Grid>
        </>


     );
}

export default Solidarite;