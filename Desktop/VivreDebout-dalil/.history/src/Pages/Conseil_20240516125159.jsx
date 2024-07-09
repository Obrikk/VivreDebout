import Header from '../Header'
import { Flex, Box, Button, Input } from '@chakra-ui/react'
import { useState} from 'react'




function Conseil() {

    const roles = ['Présidente', 'Vice-présidente', 'Secrétaire', 'Trésorerie', 'Administrateurs']
    
    const initialMembres = {
        'Présidente' : 'Ghislaine LENOUVEL',
        'Vice-présidente': 'Anne ELBAKH',
        'Secrétaire' : 'Marie-Edith SIMÉON',
        'Trésorerie' : 'Yannick BULIN',
        'Administrateurs' : 'Jocelyne BONSANG'
    }
    const [membres, setMembres] = useState(initialMembres)
    const [isInput, setInput] = useState(false)
    const [displayMembre, setDisplayMembre] =


    function handleClick(){
        setInput(!isInput)
    }

    
    return ( 
        <>
            <Header></Header>
            <Flex
            direction='column'
            justify='space-around'
            alignItems='center'
            >
                    {roles.map((role, index)=>(
                        <>
                        <Flex key={index}  w="20vw" direction='column' alignItems='center'>
                            <h1>{role}</h1>
                            <p>{membres[role]}</p>
                            {isInput && (
                                <Input placeholder= 'changer role'></Input>
                            )}
                            <Button onClick={handleClick}>Changer</Button>

                        </Flex>
                        
                        </>
                    ))}
                    
            </Flex>
        </>
     );
}

export default Conseil;