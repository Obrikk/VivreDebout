import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button} from "@chakra-ui/react";

function NousConnaitre() {
    const data = [
        { id: 1, text: 'oui' },
        { id: 2, text: 'NON' },
        { id: 3, text: 'PTET' },
        { id: 4, text: 'sldkf' },
        { id: 5, text: 'sdkf' },
        { id: 6, text: 'NON' }
    ];

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
