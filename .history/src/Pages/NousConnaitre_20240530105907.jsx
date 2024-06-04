import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'



function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <form action="POST">
                    <FormControl >
                        <FormLabel>Email</FormLabel>
                        <Input type='email' variant='filled'></Input>
                    </FormControl>
                </form>
            </div>
        </>
    );
}

export default NousConnaitre;
