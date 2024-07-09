import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'



function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <div className="left"></div>
                <div className="right">
                    <form action="POST">
                        <label htmlFor="email">Email</label>
                        <input type="email" />

                        <label htmlFor="name">Nom</label>
                        <input type="name" />

                        <label htmlFor="phone">Téléphone</label>
                        <input type="phone" />

                        button
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
