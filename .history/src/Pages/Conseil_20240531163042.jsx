import Header from '../Header'
import { Flex, Box, Button, Input } from '@chakra-ui/react'
import { useState} from 'react'




function Conseil() {

   
    
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