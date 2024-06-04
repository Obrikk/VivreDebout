import Header from '../Header'
import  '../styles/sorties.css'
import React, {useState, useEffect} from 'react';
import {Button, useDisclosure, Input, Menu, MenuList, MenuButton, MenuItem, Heading, Grid, Flex, GridItem, Card, Text, Box} from '@chakra-ui/react'
import { ChevronDownIcon} from '@chakra-ui/icons'
import DatePicker from "react-datepicker";
import {motion} from 'framer-motion'

import "react-datepicker/dist/react-datepicker.css";


import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'




function Sorties() {

    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const btnRef = React.useRef()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [sorties, setSorties] = useState([])
    const [formData, setFormData] = useState({
        'Nom': '',
        'Type': '',
        'Date': '',
        'Horaires': '',
        'Lieu': '',
        'CoutBrut': '',
        'PriseCharge': '',
        'CoutTotal': ''

    })

    useEffect(() => {
        document.getElementById('root').style.backgroundColor = '#B4E1FF';
        return () => {
          document.getElementById('root').style.backgroundColor = ''; 
        };
      }, []);

    useEffect(() => {
        const fetchSorties = async () => {
            try {
                // Fetch des données depuis l'API
                const response = await fetch('http://localhost:3000/sorties');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                // Extraction des données JSON
                const data = await response.json();
                // Mise à jour de l'état avec les données récupérées
                setSorties(data);
                console.log('Les sorties ont été mises à jour :', data);
            } catch (error) {
                console.error('Erreur lors de la récupération des sorties :', error.message);
            }
        };

        // Appel de la fonction fetchSorties
        fetchSorties();
    }, []); 


    const handleInputChange = (e)=> {
        // Equivalent à const name = e.target.name
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
        console.log(formData)
    }

    const handleMenuSelect = (value)=>{
        setFormData({...formData, Type:value})
        console.log(formData)
    }


    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split('T')[0];
        
        setFormData({ ...formData, Date: formattedDate });
        console.log(formData)
    };

    const handleSubmit = async () => {
        try {
            // Convert string values to integers
            const formDataWithIntegers = {
                ...formData,
                CoutBrut: parseInt(formData.CoutBrut),
                PriseCharge: parseInt(formData.PriseCharge),
                CoutTotal: parseInt(formData.CoutTotal),
            };
            console.log(formDataWithIntegers)
            const response = await fetch('http://localhost:3000/sorties/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formDataWithIntegers),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de l\'envoi des données');
            }

            const newSortie = await response.json();
            setSorties([...sorties, newSortie]);
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données :', error.message);
        }
    };

    
   const handleDelete = async(id) => {
        try{
            const response = await fetch(`http://localhost:3000/sorties/${id}`, {
                method:'DELETE',
            })
            if(!response.ok){
                throw new Error('Erreur lors de la suppression de la sortie')
            }

            const updatedSorties = sorties.filter(sortie => sortie.id !==id)
            setSorties(updatedSorties)
            console.log(`Sortie ${id} supprimée`)
            
        } catch{
            
        }
    }
    
    
    
    
    return ( 
        
        
        <>
            <Header></Header>
            <Button onClick={onOpen} pos={'absolute'} top={{xl:'10rem'}} left={{xl:'10rem'}}>Ajouter</Button>
            <div className={'sorties'}>
                <Heading size={{xl:'3xl'}} marginTop={{xl:'2rem'}} color={{}}>Sorties</Heading>
                <Grid gridTemplateColumns={{xl:'repeat(3,1fr)'}}  width={{xl:'80%'}} marginTop={{xl:'5rem'}}  gap={{xl:'4rem'}} fontFamily={'Helvetica'}>
                    <Flex  as={motion.div} initial={{x:-}}  bg='transparent'  borderRadius={'20px'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} height={{xl: '24rem'}}  direction='column' justify={'center'} alignItems='center' cursor='pointer' as={motion.div} whileHover={{scale:1.1}} > 
                        
                        <Text pos='rel'>Sortie ennuyante</Text>
                        <Text>Sportif</Text>
                        <Text>Date de la sortie</Text>
                        <Text>20h-22h</Text>    
                        <Text>Maurepas</Text>
                        <Button>Supprimer</Button>
                    </Flex>
                    <Flex bg='transparent'  borderRadius={'20px'} boxShadow={'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;'} height={{xl: '24rem'}}  direction='column' justify={'center'} alignItems='center' cursor='pointer' as={motion.div} whileHover={{scale:1.1}} > 
                        
                        <Text pos='rel'>Sortie ennuyante</Text>
                        <Text>Sportif</Text>
                        <Text>Date de la sortie</Text>
                        <Text>20h-22h</Text>    
                        <Text>Maurepas</Text>
                        <Button>Supprimer</Button>
                    </Flex>
                    
                </Grid> 
                
                
    <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
        <DrawerCloseButton />
        <h1>Ajouter</h1>

        <DrawerBody  >
            <form
            id='my-form'
            
            onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
            }}
            >
                <p>Nom de la sortie</p>  
                <Input name='Nom' placeholder='Ex : Sortie à Carrefour ...' onChange={handleInputChange} />

                <p>Type de sortie</p>  
                <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                    {formData.Type || 'Types de sorties'}
                </MenuButton>
                <MenuList>
                    <MenuItem onClick={() => handleMenuSelect('Extérieures')}>Extérieures</MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('Musique')}>Musique</MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('Théâtre')}>Théâtre</MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('Expos')}>Expos</MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('Touristique')}>Touristique</MenuItem>
                    <MenuItem onClick={() => handleMenuSelect('Intra VivreDebout')}>Intra VivreDebout</MenuItem>
                </MenuList>
                </Menu>

                <p>Date de la sortie</p>  
                
                <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="yyyy-MM-dd" 
            />

                <p>Horaires de la sortie</p>  
                <Input name='Horaires' placeholder='Ex : 11h-19h...' onChange={handleInputChange}/>

                <p>Lieu de la sortie</p>  
                <Input name='Lieu' placeholder='Ex : Carrefour de Maurepas...' onChange={handleInputChange}/>

                <p>Cout brut de la sortie</p>  
                <Input name='CoutBrut' placeholder='Ex : 30'onChange={handleInputChange} />

                <p>Prise en charge de la sortie</p>  
                <Input name='PriseCharge' placeholder='Ex : 20' onChange={handleInputChange}/>

                <p>Cout pour l'adhérent de la sortie</p>  
                <Input name='CoutTotal' placeholder='Ex : 10' onChange={handleInputChange}/>
            </form>
        </DrawerBody>

        <DrawerFooter>
            <Button type='submit' form='my-form' onClick={()=>onClose()}>
            Ajouter
            </Button>
        </DrawerFooter>
        </DrawerContent>
    </Drawer>

            </div>
        </>
     );
}

export default Sorties;