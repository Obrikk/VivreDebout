
import './styles/header.css'
import Navbar from './components/Navbar.jsx'
import { Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'


function Header() {
    return ( 
        <>
            <motion.div 
            className="header"
            animate
            >
                <Navbar>
                </Navbar>
                    
            </motion.div>

        </>
     );
}

export default Header;