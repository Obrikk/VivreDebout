import Header from '../Header';
import { Box, Grid, Text, Flex, GridItem, Button, FormControl, FormLabel,Input, AlertDialogFooter} from "@chakra-ui/react";
import '../styles/nous-connaitre.css'
import {motion} from 'framer-motion'
import { useEffect, useState } from 'react';



function NousConnaitre() {

    const apiUrl = 'http://localhost:8888'

    const [message, setMessage] = useState({
        email:'',
        nomPrenom:'',
        tel:'',
        msg:''

    })

    const handleChange = (e)=>{
        const {name, value} = e.target
        setMessage({
            ...message,
            [name]: value
        })
        console.log(message)
    }
    

    useEffect(()=>{
        document.getElementById('email-input').focus()
    }, [])

    
    const sendMessage = async (e)=>{
        e.preventDefault()
        fetch(`${apiUrl}/email`,{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(message)
        })
        .then((res)=>{

            if (!res.ok) {
                const errorText = await response.text();
                throw new Error(`Erreur lors de l'envoi des données : ${errorText}`);
            }
        })
            
    }


    return (
        <>
            <Header />
            <div className="nous-connaitre">
                <div className="left"></div>
                <div className="right">
                    <form action="POST" onSubmit={sendMessage}>
                        <label htmlFor="email">Email</label>
                        <motion.input type="email" id='email-input' placeholder='email@email.com...' name='email' value={message.email} onChange={handleChange} />

                        <label htmlFor="nomPrenom">Nom</label>
                        <input type="text" placeholder='Jean Dujardin...' name='nomPrenom' value={message.nomPrenom} onChange={handleChange}/>

                        <label htmlFor="tel">Téléphone</label>
                        <input type="tel" placeholder='0847384093...' name='tel' value={message.tel} onChange={handleChange} />

                        <label htmlFor="msg">Message</label>
                        <textarea name="msg" id="" value={message.msg}  onChange={handleChange}></textarea>

                        <motion.button type="submit" whileHover={{scale:1.1}}>Envoyer</motion.button>
                    </form>

                </div>
            </div>
        </>
    );
}

export default NousConnaitre;
