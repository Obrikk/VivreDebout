import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'



function NousConnaitre() {
    

    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <form action="POST">
                    <label htmlFor="email">Email</label>
                    <input type="text" />
                    <label htmlFor="name"></label>
                    <label htmlFor="phone"></label>
                </form>
            </div>
        </>
    );
}

export default NousConnaitre;
