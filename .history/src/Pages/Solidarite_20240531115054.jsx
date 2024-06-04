import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, GridItem, Heading, Text, Button } from '@chakra-ui/react'
import {motion} from 'framer-motion'



function Solidarite() {




    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <Grid templateColumns={{lg:'1fr 1fr', xl:'1fr 1fr 1fr'}} templateRows={{lg:'auto', xl:'auto'}} overflow={{lg:'scroll',xl:'hidden'}} >
                <GridItem  width='100%'  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Flex  
                        as={motion.div}
                        width={'80%'} 
                        height={{lg:'80%',xl:'80%'}}    
                        boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                        borderRadius={'0.75rem'}
                        padding={'1rem'}
                        whileHover={{scale:1.05}}
                        initial={{x:'-20rem'}}
                        animate={{x:'0rem'}}
                        cursor='pointer'
                        direction={'column'}
                        bg='#fdf8e1'


                        >
                        
                            <Heading>Conseils</Heading>
                            <Text marginTop={'4rem'}>- Nous apportons les conseils pour le respect de l'éthique citoyenne</Text>
                            <Text marginTop={'1rem'}>- Nous sommes amenés parfois à dénoncer et à critiquer publiquement les entraves et les manquements à la convention de l'ONU</Text>
                            <Button marginTop='4rem'>Accéder aux conseils</Button>

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
                        bg='#fdf8e1'

                        >
                            <Heading>Actions <br></br>Solidaires</Heading>
                            

                    </Flex>
                </GridItem>
                <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} gridColumnStart={{lg:'1', xl:'3'}}
                        gridColumnEnd={{lg:'3',xl:'3'}}>
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
                        bg='#fdf8e1'
                        direction='column'

                        >
                        
                            <Heading>Liens utiles</Heading>
                            <Text>OUI</Text>

                    </Flex>
                </GridItem>
            </Grid>
        </>


     );
}

export default Solidarite;