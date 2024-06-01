
import './styles/header.css'
import Navbar from './components/Navbar.jsx'
import { Heading, Box } from '@chakra-ui/react'



function Header() {
    return ( 
        <>
            <div className="header">
                <Navbar>
                </Navbar>
                    
            </div>

        </>
     );
}

export default Header;