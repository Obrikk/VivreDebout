
import './styles/navbar.css'
import Navbar from './components/Navbar.jsx'
import { Heading, Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'


function Header() {
    return ( 
        <>
            <motion.div 
            className="header"
            initial={{y:'-40rem'}}
            animate={{y:0}}
            transition={{duration:0.4}}
            
            >
                <Navbar>
                </Navbar>
                    
            </motion.div>

        </>
     );
}

export default Header;