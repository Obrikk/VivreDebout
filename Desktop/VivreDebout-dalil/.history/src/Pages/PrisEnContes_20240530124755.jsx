import Header from "../Header";
import { Heading } from '@chakra-ui/react'
import { useEffect } from 'react'




function PrisEnContes() {


    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#D2"
    })


    return ( 
        <>
        
            <Header></Header>
            <div className="pris-en-contes">
                <Heading>OUI</Heading>
            </div>

        </>
     );
}

export default PrisEnContes;