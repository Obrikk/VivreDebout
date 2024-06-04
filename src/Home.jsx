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
                        fontSize={{xl:'70px', '2xl':'90px'}} pos={'relative'} right={{ xl:'5rem'}} bottom={{ xl:'10rem' }  }  textShadow={' 9px 3px 25px rgba(0, 0, 0, 0.19)'}
                    >Vivre</Heading>

                    <Heading fontSize={{ xl:'75px'}} pos='relative' left={{ xl:'8rem'}} bottom={{xl:'7rem', '2xl':'11rem'}}  textShadow={' 9px 3px 25px rgba(0, 0, 0, 0.19)'}>Debout</Heading>
                    
                    {/* <img src={Traitd alt="trait-illustration" className='trait1' /> */}
                    <Img src={Pen} pos='absolute' width={{xl:'5rem'}} left={{xl:'39rem', '2xl':'46rem'}} top={{md:'164px', lg:'164px', '2xl':'205px'}} ></Img>
                    <Text>VivreDebout est une association de sgloub </Text>
                    
                </motion.div>
                <right>
                    <motion.img src={FamilyDisabled} alt="" initial={{x:'50rem'}} animate={{x:'0'}}    />
                    <div className="light"></div>
                </right>
                




                    
            </div>


            <Footer/>
        </>
     );
}

export default Home;