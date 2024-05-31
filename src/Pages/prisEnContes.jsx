import Header from "../Header";
import "../styles/prisEnConte.css";
import React, { useState, useEffect } from "react";
import theatre from "../../public/theatre.png";
import sqy from "../../public/sqyTerre.png";
import fondation from "../../public/fondationDeFrance.jpg";
import {
  Button,
  useDisclosure,
  Heading,
  Box,
  Text,
  Grid,
  GridItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
} from "@chakra-ui/react";

function PrisEnContes() {
  useEffect(() => {
    const rootElement = document.getElementById("root");
    rootElement.style.backgroundColor = "#D2C4F3";
    rootElement.style.overflow = "visible"; // Ensure overflow is visible on the root element
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState("");
  const [showFirstImage, setShowFirstImage] = useState(true);

  const handleBoxClick = () => {
    onOpen();
    setModalContent("prisEnContes");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirstImage((prev) => !prev);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Header />
      <Box
        pos="absolute"
        top="7em"
        height="80px"
        borderRadius="15px"
        width="80px"
        right="1em"
        border="1px solid red"
        className="image-container"
      >
        <Image
          src={sqy}
          alt="First"
          className={`image ${showFirstImage ? "fade-in" : "fade-out"}`}
        />
        <Image
          src={fondation}
          alt="Second"
          className={`image ${showFirstImage ? "fade-out" : "fade-in"}`}
        />
      </Box>

      <Box textAlign="center">
        <Heading>
          <Image
            borderRadius="10px"
            width="2.2em"
            margin="auto"
            cursor="pointer"
            src={theatre}
          />
        </Heading>
        <Grid templateColumns={["1fr 1fr 1fr"]} mt={"3em"}>
          {/* Left */}
          <GridItem display={"flex"} justifyContent={"center"}>
            <Box
              width={"73%"}
              height={"320px"}
              borderRadius="15px"
              backgroundColor="#F8F5FF"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Heading pos={"relative"} bottom={"85px"} fontSize="2.9rem">
                Debout !
              </Heading>
              <Text pos={"relative"} bottom={"5px"} fontWeight={500}>
                Être en mouvement dans l’audace <br />
                et la créativité, c’est possible !
              </Text>

              <Button
                onClick={handleBoxClick}
                color="white"
                _hover={{ backgroundColor: "#AB87FF" }}
                backgroundColor="#AB87FF"
                pos={"relative"}
                top={"45px"}
              >
                Rejoignez-Nous ?
              </Button>
            </Box>
          </GridItem>
          {/* Troisième grid item */}
          <GridItem display={"flex"} justifyContent={"center"}>
            <Box
              width={"73%"}
              height={"100%"}
              borderRadius="15px"
              backgroundColor="#F8F5FF"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              
              flexDirection="column"
            >
              <Heading pos={"relative"} bottom={"24px"} fontSize="2.7rem">Inclusivité</Heading>
              <Text
               
                pos={"relative"}
                top={"px"}
                pr={"15px"}
                pl={"15px"}
                textAlign={"justify"}
                fontWeight={"500"}
              >
                Montez sur Scène avec "Pris en Contes 2023-2024" <br /> <br />
                Maison du Voisinage Les Coudrays Rue de Bassigny - 78310
                Maurepas Parking facile d'accès situé à proximité <br /> <br />
                Tous les mardis de 17h45 à 19h45
              </Text>
            </Box>
          </GridItem>

          {/* Right */}
          <GridItem display={"flex"} justifyContent={"center"}>
            <Box
              width={"73%"}
              height={"100%"}
              borderRadius="15px"
              backgroundColor="#F8F5FF"
              cursor="pointer"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
            >
              <Heading pos={"relative"} bottom={'43px'} fontSize="2.3em">Prochaines Manifestations</Heading>

              <Text
                     pos="relative"
                     right="10px"
                     lineHeight="1.8"
                     top="15px"
                     pr="15px"
                     pl="20px"
                     textAlign="justify"
                     fontWeight="500"
                   
              >
                - 14 juin 15h : Nuit du Handicap <br />
                - 18 au 24 novembre 2024 : Semaine de l'inclusion, du lundi au
                dimanche <br /> - 25 janvier 2025 : 50ème anniversaire de Vivre
                Debout
              </Text>
            </Box>
          </GridItem>
        </Grid>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
        <ModalOverlay />
        <ModalContent
          borderRadius={"15px"}
          overflowY={"auto"}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          overflow="visible"
          position="fixed"
          top={"-3em"}
          height={"95vh"}
        >
          <ModalHeader overflow="visible">
            <Text
              fontWeight="bold"
              fontSize={["xl", "2xl", "2.5em"]}
              textAlign="center"
            >
              {modalContent === "prisEnContes" ? "Pourquoi Nous Rejoindre ?" : null}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pos="relative"
            mt={16}
            textAlign="justify"
            fontSize={["sm", "md", "lg"]}
          >
            <Text marginBottom="40px" textAlign="justify" fontSize="1em">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium ipsam culpa, consequatur quos odit, rem sunt,
              exercitationem inventore corporis quidem minus magni dignissimos
              eaque reprehenderit provident vitae fugit nesciunt ea.
            </Text>
          </ModalBody>
          <ModalFooter overflow="visible">
            <Button
              onClick={onClose}
              color="white"
              _hover={{ backgroundColor: "#AB87FF" }}
              backgroundColor="#AB87BF"
              mx="auto"
            >
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PrisEnContes;
