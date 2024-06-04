import '../styles/navbar.css'
import { Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion'

function Navbar() {
    return ( 
        <motion.nav
            whileHover={{scale: 1.3}}>
            <ul>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/liens">Liens</a></li>
                <li><a href="/sorties">Sorties</a></li>
                <li><a href="nous-connaître">Nous connaître</a></li>
                <li><button class="button-45" role="button">Nous Soutenir</button></li>

                
            </ul>
           



        </motion.nav.nav>
     );
}

export default Navbar;