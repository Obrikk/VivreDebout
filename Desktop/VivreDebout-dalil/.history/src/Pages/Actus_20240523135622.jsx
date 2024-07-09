import Header from '../Header'
import {Input} from '@chakra-ui/react'



function Actus() {
    return ( 
        <>
            <Header></Header>
            <div className="actus">
                <h1>Actualités</h1>
                <Input></Input>
            </div>
        </>
     );
}

export default Actus;