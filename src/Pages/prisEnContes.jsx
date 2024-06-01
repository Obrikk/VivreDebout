import Header from "../Header";
import { useEffect, useState } from "react";
import sqy from "../../public/sqyTerre.png";
import fondation from "../../public/fondationDeFrance.jpg";
import theatre from "../../public/theatre.png";

import {
  Flex,
  Box,
  Grid,
  Img,
  GridItem,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

function PrisEnContes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [sqy, fondation];

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#D2C4F3";

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Box
        w="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Box
          width="90px"
          height="90px"
          boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
          pos="absolute"
          bottom="0.7em"
          right="5"
          borderRadius="10px"
          overflow="hidden"
        >
          {images.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Image ${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
              transition={{ duration: 1 }}
              style={{
                position: "absolute",
                objectFit: "cover",
              }}
            />
          ))}
        </Box>

        <Img
          src={theatre}
          w="8.5rem"
          pos="absolute"
          top={{ base: "3rem", md: "5rem", lg: "10rem" }}
          alt="Théâtre"
        />

      <Grid
  templateColumns={{
    base: "1fr",
    sm: "3fr",
    md: "3fr 1fr",
    lg: "1fr 1fr 1fr",
    xl: "2fr 1fr fr",
    '2xl': "1fr 1fr 1fr"
  }}
  height="100%"
  templateRows={{ lg: "auto", xl: "auto" }}
  overflow={{ lg: "visible", xl: "hidden" }}
>
  <GridItem
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Flex
      as={motion.div}
      width={{ base: "90%", sm: "80%" }}
      height={{ base: "auto", lg: "85%", xl: "80%" }}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      borderRadius="0.75rem"
      padding="1rem"
      whileHover={{ scale: 1.05 }}
      initial={{ x: "-20rem" }}
      animate={{ x: "0rem" }}
      cursor="pointer"
      direction="column"
      bg="#EEE7FF"
      display="flex"
      justifyContent="center"
    >
      <Heading pos={"relative"} fontSize={{ base: "1.5em", lg: "3em", xl: "4em" }}
        bottom={{ base: "1.5em", lg: "1em", xl: "0.5em" }}>
        Inclusivité
      </Heading>
      <Text fontSize={{ base: "0.8em", lg: "1.4em", xl: "1.5em" }} mt={"1em"}>
        Montez sur Scène avec "Pris en Contes 2023-2024" <br /> <br />
        Maison du Voisinage Les Coudrays Rue de Bassigny - 78310 Maurepas Parking facile d'accès situé à proximité <br /> <br />
        Tous les mardis de 17h45 à 19h45
      </Text>
    </Flex>
  </GridItem>
  <GridItem
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    alignItems="flex-end"
  >
    <Flex
      as={motion.div}
      width={{ base: "90%", sm: "80%" }}
      height={{ base: "auto", lg: "60%" }}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      borderRadius="0.75rem"
      padding="1rem"
      pos="relative" 
      bottom="20px"
      whileHover={{ scale: 1.05 }}
      initial={{ y: "30rem" }}
      animate={{ y: "0rem" }}
      direction="column"
      cursor="pointer"
      bg="#EEE7FF"
      alignItems={{ base: "center", lg: "center" }}
      justifyContent={{ base: "center", lg: "space-between" }}
    >
      <Heading pos={"relative"} fontSize={{ base: "1.5em", lg: "3em", xl: "4em" }}>
        Debout !
      </Heading>
      <Text fontSize={{ base: "0.8em", lg: "1.5em", xl: "1.5em" }} textAlign="center">
        Être en mouvement dans l’audace et la créativité, c’est possible !
      </Text>
      <Button
        mb={{ lg: "1rem" }}
        onClick={onOpen}
        w={{ base: "80%", lg: "60%" }}
        h={{ lg: "30%" }}
        fontSize={{ base: "1em", lg: "2em", xl: "2em" }}
      >
        Rejoignez nous !!
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="15px"
          overflowY="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          position="fixed"
          height="85vh"
        >
          <ModalHeader fontWeight="bold" fontSize={{ base: "1.5em", lg: "2em", xl: "3.5em" }} overflow="visible">
            Pourquoi nous rejoindre ?
          </ModalHeader>
          <Text fontSize="1.07em" textAlign="justify" pl="15px" pr="15px" pos="relative" top="50px">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maxime inventore! Assumenda totam fugit qui error iusto alias id, corporis velit veritatis, provident, modi repellat fugiat ipsam. Ab, ipsa dolorum!
          </Text>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter overflow="visible">
            <Button backgroundColor="#EEE7FF" mr={3} onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  </GridItem>
  <GridItem
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
    gridColumnStart={{ md: "1", lg: "3", xl: "3" }}
    gridColumnEnd={{ md: "3", lg: "3", xl: "3" }}
  >
    <Flex
      as={motion.div}
      width={{ base: "90%", sm: "80%" }}
      height={{ base: "auto", lg: "85%" }}
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
      borderRadius="0.75rem"
      padding="1rem"
      alignItems="center"
      whileHover={{ scale: 1.05 }}
      initial={{ x: "20rem" }}
      animate={{ x: "0rem" }}
      cursor="pointer"
      bg="#EEE7FF"
      direction="column"
    >
      <Heading pos={"relative"} fontSize={{ base: "1.5em", lg: "2.7em", xl: "3em" }}>
        Nos futures Manifestations
      </Heading>
      <UnorderedList
        spacing={35}
        listStyleType="circle"
        marginTop="4.5rem"
        pos="relative"
        right="20px"
        fontSize={{ base: "0.8em", lg: "1.5em", xl: "1.5em" }}
      >
        <ListItem>- 14 juin 15h nuit du handicap</ListItem>
        <ListItem>- Novembre 2024, du lundi 18 au dimanche 24 novembre semaine du handicap en entreprise</ListItem>
        <ListItem>- 25 janvier 2025 50 ans vivre debout</ListItem>
      </UnorderedList>
    </Flex>
  </GridItem>
</Grid>

      </Box>
    </>
  );
}

export default PrisEnContes;
