import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";

function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <form action="POST">
                    <FormControl>
                        <FormLabel></FormLabel>
                    </FormControl>
                </form>
            </div>
        </>
    );
}

export default NousConnaitre;
