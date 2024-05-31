import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, Img, GridItem, Heading, Text, Button, UnorderedList, ListItem, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import {motion} from 'framer-motion'
import SolidariteImg from '../../public/solidariteP.png'


function Solidarite() {

    const { isOpen, onOpen, onClose } = useDisclosure()



    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <Box  w='100%' height='100%' display={'flex'} flexDirection={'column'} alignItems={'center'} >
                <Img src={SolidariteImg} w={'5rem'} pos='absolute' top={{lg:'8rem'}}></Img>

                <Grid templateColumns={{md:'1fr 1fr',lg:'1fr 1fr 1fr', xl:'1fr 1fr 1fr'}} height='100%' templateRows={{lg:'auto', xl:'auto'}} overflow={{lg:'visible',xl:'hidden'}} >
                    <GridItem  width='100%'  height='100%' display={'flex'} justifyContent={'center'} alignItems='center' >
                        <Flex  
                            as={motion.div}
                            width={'80%'} 
                            height={{lg:'85%',xl:'80%'}}    
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
                                <Text marginTop={'2rem'}>- Nous apportons les conseils pour le respect de l'éthique citoyenne</Text>
                                <Text marginTop={'1rem'}>- Nous sommes amenés parfois à dénoncer et à critiquer publiquement les entraves et les manquements à la convention de l'ONU</Text>
                                <Button marginTop='4rem'>Accéder aux conseils</Button>

                        </Flex>
                    </GridItem>
                    <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'flex-end'}>
                        <Flex  
                            as={motion.div}
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
                            justifyContent={{lg:'space-between'}}

                            >
                                <Heading>Actions <br></br>Solidaires</Heading>
                                <Button mb={{lg:''}} onClick={onOpen} w={{lg:'60%'}} h={{lg:'30%'}}>
                                    Open Modal
                                </Button>
                                <Modal isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent bg='salmon' width={'100vw'} maxWidth={'100vw'}>
                                    <ModalHeader>Modal Title</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                    </ModalBody>

                                    <ModalFooter>
                                        <Button backgroundColor={'#FCEFB4'} mr={3} onClick={onClose}>
                                        Close
                                        </Button>
                                        <Button variant='ghost'>Secondary Action</Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                                

                        </Flex>
                    </GridItem>
                    <GridItem width='100%' height='100%' display={'flex'} justifyContent={'center'} alignItems={'center'} gridColumnStart={{md:'1',lg:'3', xl:'3'}}
                            gridColumnEnd={{md:'3',lg:'3',xl:'3'}} >
                        <Flex  
                            as={motion.div}
                            width={'80%'} 
                            height={{lg:'85%'}}    
                            boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'}
                            borderRadius={'0.75rem'}
                            padding={'1rem'}
                            alignItems={'center'}
                            whileHover={{scale:1.05}}
                            initial={{x:'20rem'}}
                            animate={{x:'0rem'}}
                            cursor='pointer'
                            bg='#fdf8e1'
                            direction='column'

                            >
                            
                                <Heading>Liens utiles</Heading>
                                <UnorderedList spacing={3} listStyleType={'circle'} marginTop={'5rem'} marginRight={'5rem'}>
                                    <ListItem ><Link href='https://mdphenligne.cnsa.fr/'>MPDH en ligne</Link></ListItem>
                                    <ListItem ><Link href='https://www.yvelines.fr/fiche/pole-autonomie-territorial-st-quentin/'>Pôle autonomie de SQY</Link></ListItem>
                                    <ListItem ><Link href='https://www.economie.gouv.fr/recrutement/dgfip-avis-de-recrutement-de-travailleurs-en-situation-de-handicap-par-la-voie'>DGFIP</Link></ListItem>
                                    <ListItem ><Link href='https://www.capemploi.info/'>CAP Emploi</Link></ListItem>
                                    
                                </UnorderedList>    

                        </Flex>
                    </GridItem>
                </Grid>
            </Box>


            
        </>


     );
}

export default Solidarite;