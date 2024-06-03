import React, { useState, useEffect } from 'react';
import {
    Button, useDisclosure, Input, Menu, MenuList, MenuButton, MenuItem, Heading,
    Grid, Flex, Text, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay,
    DrawerContent, DrawerCloseButton
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import DatePicker from "react-datepicker";
import { motion } from 'framer-motion';
import "react-datepicker/dist/react-datepicker.css";
import Header from '../Header';
import Footer from '../Footer';
import '../styles/sorties.css';

function Sorties() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [sorties, setSorties] = useState([]);
    const [formData, setFormData] = useState({
        nom: '',
        type: '',
        date: '',
        horaires: '',
        lieu: '',
        coutBrut: '',
        priseCharge: '',
        coutTotal: ''
    });

    const sortiesSortedByDate = [...sorties].sort((a, b) => {
        const dateA = new Date(a.date);
        const dateB = new Date(b.date);
        const currentDate = new Date();
        const diffA = Math.abs(dateA - currentDate);
        const diffB = Math.abs(dateB - currentDate);
        return diffA - diffB;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        return `Le ${date.toLocaleDateString('fr-FR', options)}`;
    };

    useEffect(() => {
        document.getElementById('root').style.backgroundColor = '#B4E1FF';
        return () => {
            document.getElementById('root').style.backgroundColor = '';
        };
    }, []);

    useEffect(() => {
        const fetchSorties = async () => {
            try {
                const response = await fetch('http://localhost:8888/sorties');
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const data = await response.json();
                setSorties(data.data || []); // Ensure data.data is an array
                console.log('Les sorties ont été mises à jour :', data);
            } catch (error) {
                console.error('Erreur lors de la récupération des sorties :', error.message);
            }
        };

        fetchSorties();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleMenuSelect = (value) => {
        setFormData({ ...formData, type: value });
        console.log(formData);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
        const formattedDate = date.toISOString().split('T')[0];
        setFormData({ ...formData, date: formattedDate });
        console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataWithIntegers = {
                ...formData,
                coutBrut: parseInt(formData.coutBrut) || 0,
                priseCharge: parseInt(formData.priseCharge) || 0,
                coutTotal: parseInt(formData.coutTotal) || 0,
            };

            console.log('Sending data to the server:', formDataWithIntegers);

            const response = await fetch('http://localhost:8888/sorties/', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formDataWithIntegers),
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Erreur lors de l'envoi des données : ${errorText}`);
            }

            const newSortie = await response.json();
            setSorties([...sorties, newSortie]);
            console.log('Sortie ajoutée :', newSortie);
        } catch (error) {
            console.error('Erreur lors de l\'envoi des données :', error.message);
        }
    };

    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://localhost:8888/sorties/${id}`, {
                method: 'DELETE',
            });
            if (!response.ok) {
                throw new Error('Erreur lors de la suppression de la sortie');
            }

            const updatedSorties = sorties.filter(sortie => sortie.id !== id);
            setSorties(updatedSorties);
            console.log(`Sortie ${id} supprimée`);
        } catch (error) {
            console.error('Erreur lors de la suppression de la sortie :', error.message);
        }
    };

    return (
        <>
            <Header />
            
            <div className='sorties'>

                <Heading size={{lg:'2xl'}} margin={{lg:'1rem'}} textShadow={' 9px 3px 25px rgba(0, 0, 0, 0.29)'} >Sorties</Heading>
                 <Button onClick={onOpen} position='absolute' top={{lg:'8rem'}} right={{lg:'5rem'}}>Ajouter <br></br>une sortie</Button>
                <Grid gridTemplateColumns='repeat(3, 1fr)' width='80%' mt='1rem' gap='4rem' fontFamily='Helvetica'>
                    {sortiesSortedByDate && sortiesSortedByDate.length > 0 ? sortiesSortedByDate.map((sortie) => (
                        <Flex key={sortie.id} bg='#d6efff' borderRadius='20px' boxShadow='rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' height={{lg:'17rem'}} direction='column' justify='center' alignItems='center' cursor='pointer' as={motion.div} whileHover={{ scale: 1.1 }} initial={{ x: '-20rem' }} animate={{ x: '0rem' }} whileTap={{ scale: 0.9 }}>
                            <Text fontSize='20px' fontWeight='600'>{sortie.nom}</Text>
                            <Text>{sortie.type}</Text>
                            <Text>{(sortie.date)}</Text>
                            <Text>{sortie.horaires}</Text>
                            <Text>{sortie.lieu}</Text>
                            <Button onClick={() => handleDelete(sortie.id)}>Supprimer</Button>
                        </Flex>
                    )) : (
                        <Text>il n'y a pas de sorties prévues</Text>
                    )}
                </Grid>

                <Drawer isOpen={isOpen} onClose={onClose}>
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Ajouter</DrawerHeader>

                        <DrawerBody>
                            <form id='my-form' onSubmit={handleSubmit}>
                                <p>Nom de la sortie</p>
                                <Input name='nom' placeholder='Ex : Sortie à Carrefour ...' onChange={handleInputChange} />

                                <p>Type de sortie</p>
                                <Menu>
                                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                        {formData.type || 'Types de sorties'}
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => handleMenuSelect('Extérieures')}>Extérieures</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('Musique')}>Musique</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('Théâtre')}>Théâtre</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('Expos')}>Expos</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('Touristique')}>Touristique</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('Intra VivreDebout')}>Intra VivreDebout</MenuItem>
                                        <MenuItem onClick={() => handleMenuSelect('PrisEnContes')}>PrisEnContes</MenuItem>
                                    </MenuList>
                                </Menu>

                                <p>Date de la sortie</p>
                                <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="yyyy-MM-dd" />

                                <p>Horaires de la sortie</p>
                                <Input name='horaires' placeholder='Ex : 11h-19h...' onChange={handleInputChange} />

                                <p>Lieu de la sortie</p>
                                <Input name='lieu' placeholder='Ex : Carrefour de Maurepas...' onChange={handleInputChange} />

                                <p>Cout brut de la sortie</p>
                                <Input name='coutBrut' placeholder='Ex : 30' onChange={handleInputChange} />

                                <p>Prise en charge de la sortie</p>
                                <Input name='priseCharge' placeholder='Ex : 20' onChange={handleInputChange} />

                                <p>Cout pour l'adhérent de la sortie</p>
                                <Input name='coutTotal' placeholder='Ex : 10' onChange={handleInputChange} />
                            </form>
                        </DrawerBody>

                        <DrawerFooter>
                            <Button type='submit' form='my-form' onClick={onClose}>
                                Ajouter
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>

            </div>
            <Footer>
            </Footer>
        </>
    );
}

export default Sorties;
