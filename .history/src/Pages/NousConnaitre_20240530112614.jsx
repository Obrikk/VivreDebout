import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'
import {motion} from 'framer-motion'



function NousConnaitre() {
    

    const handleSubmit = ()=> {
        e.preventDefault()
    }


    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <div className="left"></div>
                <div className="right">
                    <form action="POST" onSubmit={handleSubmit}>
                        <label htmlFor="email">Email</label>
                        <motion.input type="email" />

                        <label htmlFor="name">Nom</label>
                        <input type="name" />

                        <label htmlFor="phone">Téléphone</label>
                        <input type="phone" />

                        <button type="submit">Envoyer</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
