import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button} from "@chakra-ui/react";

function NousConnaitre()

    return (
        <>
            <Header />
            <Grid templateRows='repeat(2, 1fr)'
                templateColumns='repeat(2, 1fr)'
                marginTop='1rem'
                
            >
                <GridItem   w='100%' 
                    border='solid black 1px'
                     display={'flex'}
                     flexDirection={'column'}
                     alignItems='center'
                     justifyContent={'space-around'}>
                        <Text fontSize='3xl' fontWeight='500' > Conseil d'administration</Text>
                        <Button ><a href="/nous-connaître/conseil">Voir les membres</a></Button>
                </GridItem>
                <GridItem>OUI</GridItem>
                <GridItem>OUI</GridItem>
                <GridItem>OUI</GridItem>
            </Grid>
        </>
    );
}

export default NousConnaitre;
