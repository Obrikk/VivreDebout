import Header from '../Header'
import { Flex, Box, Button, Input, Grid, GridItem } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import {motion} from 'framer-motion'




function Conseil() {

    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })
    
    return ( 
        <>
            <Header></Header>
            <Grid gridTemplateColumns={{lg:'1fr 1fr 1fr 1fr 1fr'}} gridTemplateRows={{lg:'1fr 1fr 1fr 1fr 1fr'}}>
                <GridItem display={'flex'}  gridArea={{lg:'2 / 2 / 2 / 2'}}>
                    
                    <Flex as={motion.div}
                                width={'80%'} 
                                height={{lg:'60%'}}    
                                boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                                borderRadius={'0.75rem'}
                                padding={'1rem'}
                                whileHover={{scale:1.05}}
                                initial={{y:'30rem'}}
                                animate={{y:'0rem'}}
                                direction={'column'}
                                cursor='pointer'
                                bg='#fdf8e1'
                                alignItems={{lg:'center'}}
                                justifyContent={{lg:'center'}} 
                                > oui
                    </Flex>
                </GridItem>

                <GridItem display={'flex'}  gridArea={{lg:'4 / 2 / 4 / 2'}}>
                    <Flex as={motion.div}
                                width={'80%'} 
                                height={{lg:'60%'}}    
                                boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                                borderRadius={'0.75rem'}
                                padding={'1rem'}
                                whileHover={{scale:1.05}}
                                initial={{y:'30rem'}}
                                animate={{y:'0rem'}}
                                direction={'column'}
                                cursor='pointer'
                                bg='#fdf8e1'
                                alignItems={{lg:'center'}}
                                justifyContent={{lg:'center'}} 
                                > oui
                    </Flex>
                </GridItem>

                <GridItem display={'flex'}  gridArea={{lg:'3 / 3 / 3 / 3'}}>
                    <Flex as={motion.div}
                                width={'80%'} 
                                height={{lg:'60%'}}    
                                boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                                borderRadius={'0.75rem'}
                                padding={'1rem'}
                                whileHover={{scale:1.05}}
                                initial={{y:'30rem'}}
                                animate={{y:'0rem'}}
                                direction={'column'}
                                cursor='pointer'
                                bg='#fdf8e1'
                                alignItems={{lg:'center'}}
                                justifyContent={{lg:'center'}} 
                                > oui
                    </Flex>
                    
                </GridItem>

                

                <GridItem display={'flex'}  gridArea={{lg:'2 / 4 / 2 / 4'}}>
                <Flex as={motion.div}
                            width={'80%'} 
                            height={{lg:'60%'}}    
                            boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                            borderRadius={'0.75rem'}
                            padding={'1rem'}
                            whileHover={{scale:1.05}}
                            initial={{y:'30rem'}}
                            animate={{y:'0rem'}}
                            direction={'column'}
                            cursor='pointer'
                            bg='#fdf8e1'
                            alignItems={{lg:'center'}}
                            justifyContent={{lg:'center'}} 
                             > oui
                </Flex>
                    
                </GridItem>

                <GridItem display={'flex'}  gridArea={{lg:'4 / 4 / 4 /4'}}>

                    <Flex as={motion.div}
                                width={'80%'} 
                                height={{lg:'60%'}}    
                                boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                                borderRadius={'0.75rem'}
                                padding={'1rem'}
                                whileHover={{scale:1.05}}
                                initial={{y:'30rem'}}
                                animate={{y:'0rem'}}
                                direction={'column'}
                                cursor='pointer'
                                bg='#fdf8e1'
                                alignItems={{lg:'center'}}
                                justifyContent={{lg:'center'}} 
                                > oui
                    </Flex>
                </GridItem>

                
            </Grid>
            
        </>
     );
}

export default Conseil;