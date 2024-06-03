import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';



function NousConnaitre() {

    const [message, setMessage] = useState({
        email:'',
        nomPrenom:'',
        tel:'',
        msg:''

    })

    const handleChange = ()=>{
        const {name, value} = e.target
        setMessage({
            ..
        })
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
                    <form action="POST" onSubmit={sendMessage}>
                        <label htmlFor="email">Email</label>
                        <motion.input type="email" id='email-input' value={message.email} onChange={handleChange} />

                        <label htmlFor="nomPrenom">Nom</label>
                        <input type="nomPrenom" />

                        <label htmlFor="tel">Téléphone</label>
                        <input type="tel" />

                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id=""></textarea>

                        <motion.button type="submit" whileHover={{scale:1.1}}>Envoyer</motion.button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
