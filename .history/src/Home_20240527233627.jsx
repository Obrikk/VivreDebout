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
                        size={'4xl'} pos={'relative'} right={{'5rem' bottom='3rem' 
                    >Vivre</Heading>
                    <Heading size={'4xl'} pos='relative' left='5rem' bottom='3rem' >Debout</Heading>
                    {/* <img src={Trait1} alt="trait-illustration" className='trait1' /> */}
                    <Img src={Pen} pos='absolute' width={'5rem'} left='33rem' top='164px' ></Img>
                    <Text>VivreDebout est une association </Text>
                    
                </motion.div>
                <right>
                    <img src={FamilyDisabled} alt="" />
                    <div className="light"></div>
                </right>
                
                    {/* <img src={Blur1} alt="" className='blur1' /> */}
                    <img src={Blur1} alt="" className='blur1-reverse' />




                    
            </div>


            <Footer/>
        </>
     );
}

export default Home;