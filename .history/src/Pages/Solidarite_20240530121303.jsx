import Header from '../Header'
import { useEffect } from 'react'
import { Flex } from '@chakra-ui/react'



function Solidarite() {




    useEffect(()=>{
        document.getElementById('root').style.backgroundColor = "#FCEFB4"
    })






    return ( 
        <>
        
            <Header></Header>
            <div className="solidarite">



            </div>
        </>


     );
}

export default Solidarite;