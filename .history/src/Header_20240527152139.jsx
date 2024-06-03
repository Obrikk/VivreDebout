
import './styles/header.css'
import Navbar from './components/Navbar.jsx'
import { Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'


function Header() {
    return ( 
        <>
            <motion.div 
            className="header"
            initial={{y:'-20rem'}}
            animate={{y:0}}
            transition={{duration:0.3}}

            >
                <Navbar>
                </Navbar>
                    
            </motion.div>

        </>
     );
}

export default Header;