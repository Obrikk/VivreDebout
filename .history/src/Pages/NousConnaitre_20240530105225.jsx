import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";

function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <form action="POST">
                    <FormControl bg='red'>
                        <FormLabel>Email</FormLabel>
                        <Input type='email'></Input>
                    </FormControl>
                </form>
            </div>
        </>
    );
}

export default NousConnaitre;
