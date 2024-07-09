import '../styles/navbar.css'
import { Heading, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import LogoVD from '../../public/LogoVD.svg'

function Navbar() {
    return ( 
        <motion.nav
            
            >
            <ul>
                <li><Image src={LogoVD}  w={{md:'2rem'}}></Image></li>
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