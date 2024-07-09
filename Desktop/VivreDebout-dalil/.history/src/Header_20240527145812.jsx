
import './styles/header.css'
import Navbar from './components/Navbar.jsx'
import { Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'


function Header() {
    return ( 
        <>
            <motion.div 
            className="header"
            initial={{x:'-100%'}}
            >
                <Navbar>
                </Navbar>
                    
            </motion.div>

        </>
     );
}

export default Header;