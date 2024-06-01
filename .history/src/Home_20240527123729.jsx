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

    const { isOpen, onToggle } = useDisclosure()


    return ( 
        <>
            <Header></Header>
            
            <div className="home">
                <div 
                    className='left'
                    animate={{
                        x: 0,
                        backgroundColor: "#000",
                        boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
                        position: "fixed",
                        transitionEnd: {
                          display: "none",
                        },
                      }}
                    >
                        <Heading 
                            size={'4xl'} pos={'relative'} right='5rem' bottom='3rem' whileHover={{scale:1.2}}
                        >Vivre</Heading>
                        <Heading size={'4xl'} pos='relative' left='5rem' bottom='3rem' >Debout</Heading>
                        {/* <img src={Trait1} alt="trait-illustration" className='trait1' /> */}
                        <Img src={Pen} pos='absolute' width={'5rem'} left='33rem' top='16rem' ></Img>
                        <Text>VivreDebout est une association </Text>
                    
                </div>
                <right>
                    <img src={FamilyDisabled} alt="" />
                    <div className="light"></div>
                </right>
                
                    <img src={Blur1} alt="" className='blur1' />
                    <img src={Blur1} alt="" className='blur1-reverse' />




                    
            </div>


            <Footer/>
        </>
     );
}

export default Home;