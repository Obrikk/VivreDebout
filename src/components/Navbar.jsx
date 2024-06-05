import '../styles/navbar.css'
import { Heading, Image,Button } from '@chakra-ui/react';
import { motion } from 'framer-motion'
import LogoVD from '../../public/LogoVD.svg'

function Navbar() {
    return ( 
        <motion.nav
            
            >
            <ul>
                <li><Image   src={LogoVD}  w={{lg:'2.5rem',xl:"3rem",md:"2rem",sm:"2.5rem"}}   onClick={()=>window.location.href='/'}></Image></li>
                <li><a href="nous-connaître">Nous connaître</a></li>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/solidarite">Solidarité</a></li>
                <li><a href="/pris-en-contes">Pris en contes</a></li>
                <li><a href="/sorties">Sorties</a></li>
                <li  id='soutenir'><Button  class="button-45"   
                 role="button">Nous Soutenir</Button></li>

                
            </ul>
           



        </motion.nav>
     );
}

export default Navbar;