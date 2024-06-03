import '../styles/navbar.css'
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion'

function Navbar() {
    return ( 
        <motion.nav
            animate={{y:-100}}
            transition={{ delay: 1 }}
            >
            <ul>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/contact">Solidarité</a></li>
                <li><a href="/liens">Pris en conte</a></li>
                <li><a href="/sorties">Sorties</a></li>
                <li><a href="nous-connaître">Nous connaître</a></li>
                <li><button class="button-45" role="button">Nous Soutenir</button></li>

                
            </ul>
           



        </motion.nav>
     );
}

export default Navbar;