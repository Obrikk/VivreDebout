import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";

function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <form action="POST">
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input></Input>
                    </FormControl>
                </form>
            </div>
        </>
    );
}

export default NousConnaitre;
