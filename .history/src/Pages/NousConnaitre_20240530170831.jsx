import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';



function NousConnaitre() {

    const [message, setMessage] = useState({
        email:'',

    })

    const handleChange = ()=>{

    }
    

    useEffect(()=>{
        document.getElementById('email-input').focus()
    })

    const sendMessage = (e)=> {
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
                        <motion.input type="email" id='email-input' />

                        <label htmlFor="name">Nom</label>
                        <input type="name" />

                        <label htmlFor="phone">Téléphone</label>
                        <input type="phone" />

                        <label htmlFor="message">Message</label>
                        <textarea name="message" id=""></textarea>

                        <motion.button type="submit" whileHover={{scale:1.1}}>Envoyer</motion.button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
