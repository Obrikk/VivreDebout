import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'
import {motion} from 'framer-motion'



function NousConnaitre() {
    

    const handleSubmit = (e)=> {
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
                        <motion.input type="email" initial={{y:'10rem'}} animate={{y:'0rem'}}  transition={{duration:0.1}}/>

                        <label htmlFor="name">Nom</label>
                        <input type="name" />

                        <label htmlFor="phone">Téléphone</label>
                        <input type="phone" />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id=""></textarea>

                        <button type="submit">Envoyer</button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
