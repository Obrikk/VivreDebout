import Header from "../Header";
import { useEffect } from "react";
import sqy from "../../public/sqyTerre.png";
import fondation from "../../public/fondationDeFrance.jpg";

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
  Link,
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
import theatre from "../../public/theatre.png";

function prisEnContes() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
  });

  return (
    <>
      <Header></Header>

      
      <Box
        w="100%"
        height="100%"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}

      >
        <Box
    width={"65px"}
    height={"60px"}
    border={"1px solid red"}
    pos={"absolute"}
    bottom={"2"}
    right={"5"}
    borderRadius={"10px"}
    
    >
  {/* <Image
  src={sqy}

  ></Image>
  <Image
  src={fondation}

  ></Image> */}
    </Box>
        
        <Img src={theatre} w={"5rem"} pos="absolute" top={{ lg: "8rem" }}></Img>

        <Grid
          templateColumns={{
            md: "1fr 1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          height="100%"
          templateRows={{ lg: "auto", xl: "auto" }}
          overflow={{ lg: "visible", xl: "hidden" }}
        >
          <GridItem
            width="100%"
            height="100%"
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            <Flex
              as={motion.div}
              width={"80%"}
              height={{ lg: "85%", xl: "80%" }}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction={"column"}
              bg="#EEE7FF"
            >
              <Heading>Inclusivité</Heading>
              <Text marginTop={"5.6rem"}>
              Montez sur Scène avec "Pris en Contes 2023-2024" <br /> <br />
                Maison du Voisinage Les Coudrays Rue de Bassigny - 78310
                Maurepas Parking facile d'accès situé à proximité <br /> <br />
                Tous les mardis de 17h45 à 19h45

              </Text>
             
            </Flex>
          </GridItem>
          <GridItem
            width="100%"
            height="100%"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-end"}
          >
            <Flex
              as={motion.div}
              width={"80%"}
              height={{ lg: "60%" }}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              whileHover={{ scale: 1.05 }}
              initial={{ y: "30rem" }}
              animate={{ y: "0rem" }}
              direction={"column"}
              cursor="pointer"
              bg="#EEE7FF"
              alignItems={{ lg: "center" }}
              justifyContent={{ lg: "space-between" }}
            >
              <Heading>Debout !</Heading>
              <Text textAlign={"center"}>
                Être en mouvement dans l’audace et la créativité, c’est possible
                !
              </Text>
              <Button
                mb={{ lg: "1rem" }}
                onClick={onOpen}
                w={{ lg: "60%" }}
                h={{ lg: "30%" }}
              >
                Rejoignez nous !!
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                
                  borderRadius={"15px"}
                  overflowY={"auto"}
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  
                  position="fixed"
                  top={"-3em"}
                  height={"95vh"}
                >
                  <ModalHeader fontWeight={"bold"} fontSize={"2.3em"} overflow="visible">Pourquoi nous rejoindre ?</ModalHeader>
                  <Text fontSize={"1.07em"} textAlign={"justify"} pl={"15px"} pr={"15px"} pos={"relative"} top={"10px"}>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maxime inventore! Assumenda totam fugit qui error iusto alias id, corporis velit veritatis, provident, modi repellat fugiat ipsam. Ab, ipsa dolorum!
                  </Text>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>

                  <ModalFooter
                  overflow={"visible"}
                  >
                    <Button
                      backgroundColor={"#FCEFB4"}
                      mr={3}
                      onClick={onClose}
                    >
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
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            gridColumnStart={{ md: "1", lg: "3", xl: "3" }}
            gridColumnEnd={{ md: "3", lg: "3", xl: "3" }}
          >
            <Flex
              as={motion.div}
              width={"80%"}
              height={{ lg: "85%" }}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              alignItems={"center"}
              whileHover={{ scale: 1.05 }}
              initial={{ x: "20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              bg="#EEE7FF"
              direction="column"
            >
              <Heading>
Nos futures Manifestations 
</Heading>
              <UnorderedList
                spacing={3}
                listStyleType={"circle"}
                marginTop={"4.5rem"}
                pos={"relative"}
                right={"20px"}
                
              >
                <ListItem>
                - 14 juin 15h nuit du handicap
                </ListItem>
                <ListItem>
                - Novembre 2024, du lundi 18 au dimanche 24 novembre DEMAINE DU HANDICAP EN ENTREPRISE 
                </ListItem>
              
              
                <ListItem>
                -25 janvier 2025 50 ans vivre debout  
                </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default prisEnContes;
