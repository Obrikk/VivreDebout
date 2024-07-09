import './styles/home.css'
import Header from './Header'
import Footer from './Footer'
import HomePage from '../public/homePage.png'
import FamilyDisabled from '../public/FamilyDisab.svg'
import Trait1 from '../public/trait1.png'
import Blur1 from '../public/blur1.png'
import harvest from '../public/harvest.png'
import Pen from '../public/pen.gif'
import { Heading } from '@chakra-ui/react'
import { Fade, Text, ScaleFade, Slide, SlideFade, Collapse, Button,Img, useDisclosure, Box } from '@chakra-ui/react'
import { motion } from "framer-motion"




function Home() {



    return ( 
        <>
            <Header></Header>
            
            <div className="home">
                <motion.div 
                className='left'
                initial={{x:'-50rem'}}
                animate={{x:0}}
                >
                    <Heading 
                        fontSize={{md:'80px',xl: '105px'}} pos={'relative'} right={{lg:'5rem', xl:'5rem'}} bottom={{base:'0rem', sm :'0rem', lg:'5rem', }} 
                    >Vivre</Heading>

                    <Heading fontSize={{md:'', xl:'90px'}} pos='relative' left={{md:'5rem', lg:'11rem'}} bottom={{md:'3rem', lg:'14rem'}} >Debout</Heading>
                    
                    {/* <img src={Traitd alt="trait-illustration" className='trait1' /> */}
                    <Img src={Pen} pos='absolute' width={{md:'5rem', lg:'5rem'}} left={{md:'33rem', lg:'33rem'}} top={{md:'164px', lg:'164px'}} ></Img>
                    <Text>VivreDebout est une association </Text>
                    
                </motion.div>
                <right>
                    <motion.img src={FamilyDisabled} alt="" initial={{x:'50rem'}} animate={{x:'0'}} />
                    <div className="light"></div>
                </right>
                




                    
            </div>


            <Footer/>
        </>
     );
}

export default Home;