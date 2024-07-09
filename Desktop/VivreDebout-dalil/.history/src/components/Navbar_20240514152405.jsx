import '../styles/navbar.css'
import { Heading } from '@chakra-ui/react';

function Navbar() {
    return ( 
        <nav>
            <ul>
                <li><a href="/actualites">Actualités</a></li>
                <li><a href="/historique">Historique</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/liens">Liens</a></li>
                <li><a href="nous-connaître">Nous connaître</a></li>
                <li><button class="button-45" role="button">Soutenir</button></li>

                
            </ul>
           



        </nav>
     );
}

export default Navbar;