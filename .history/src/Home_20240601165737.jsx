import React, { useState } from "react";
import Header from "./Header";
import FamilyDisabled from "../public/FamilyDisab.svg";
import Blur1 from "../public/blur1.png";
import Pen from "../public/pen.gif";
import { Heading, Image, Box, Text } from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import Solidarite from "../public/solidarité.jpg";
import Atelier from "../public/Ateliers.jpg";
import theatre from "../public/theatre.png";
import sortie from "../public/sortie.jpg";
import solidarite from "../public/solidariteP.png";
import sortieP from "../public/sortieP.png";

import "../src/styles/home.css";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";

function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalContent, setModalContent] = useState("");

  const handleSolidariteClick = () => {
    onOpen();
    setModalContent("solidarite");
  };

  const handleSortiesClick = () => {
    onOpen();
    setModalContent("sorties");
  };

  const handlePrisEnContesClick = () => {
    onOpen();
    setModalContent("prisEnContes");
  };

  const handleDiscover = () => {
    let url = "";
    if (modalContent === "prisEnContes") {
      url = "/prisEnContes";
    } else if (modalContent === "solidarite") {
      url = "/solidarite";
    } else if (modalContent === "sorties") {
      url = "/sorties";
    }
    window.open(url, "_blank"); // Ouvrir une nouvelle fenêtre ou un nouvel onglet
  };

  return (
    <>
      <Header />

      <div className="home">
        <div className="left">
          <Box overflow={"visible"}>
          <Heading size="3xl" pos="relative" bottom={"1rem"} left={{lg:'3rem'}} >
            Vivre Debout
            
          </Heading>
          <Image
            src={Pen}
            pos="absolute"
            width="4rem"
            left="34.5rem"
            top="5.7rem"
          />
          <Text
            pos="relative"
            textAlign={"justify"}
            fontSize="1rem"
            fontWeight="600"
            margin={"auto"}
            width={"76%"}
            left={{lg:'3rem'}}
            top={{lg:'1rem'}}
          >
            Vivre Debout est membre administrateur de la Coordination Handicap
            Autonomie qui regroupe des petites associations qui défendent les
            mêmes valeurs et droits… Vivre Debout existe depuis 50 ans et a pour
            objectif de maintenir l’autonomie et l’indépendance des Personnes à
            Mobilité Réduite.
          </Text>
          </Box>
         

          <Box display={"flex"} gap={"45px"} pos={"relative"} left={"60px"} top={"35px"}>
            <Box>
              <Text pos="relative" left={"20px"} fontSize="2rem" fontWeight="bold">
                Sorties
              </Text>
              <Image
                height={"150px"}
                borderRadius={"10px"}
                src={sortie}
                alt="Sortie"
                onClick={handleSortiesClick}
                pos={"relative"}
                cursor={"pointer"}
              />
            </Box>

            <Box>
              <Text pos="relative" fontSize="2rem" fontWeight="bold">
                Solidarité
              </Text>
              <Image
                cursor="pointer"
                height={"150px"}
                borderRadius={"10px"}
                src={Solidarite}
                alt="Solidarité"
                onClick={handleSolidariteClick}
                pos={"relative"}
              />
            </Box>

            <Box>
              <Text left={"10px"} pos="relative" fontSize="2rem" fontWeight="bold">
                Pris En Contes
              </Text>
              <Image
                height={"150px"}
                cursor="pointer"
                onClick={handlePrisEnContesClick}
                src={Atelier}
                alt="Pris en conte"
                pos="relative"
                borderRadius="15px"
              />
            </Box>
          </Box>

       
       
        </div>
        <div className="right">
          <Image
            height={{lg:'26rem'}}
            pos="relative"
            top={{lg:'2rem'}}
            // left="5.5rem"
            src={FamilyDisabled}
            alt="Family Disabled"
          />
          <div className="light"></div>
        </div>
      </div>

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
          <ModalHeader overflow={"visible"}>
            <Image
              left={"170px"}
              top={"85px"}
              pos={"absolute"}
              width="4.2em"
              src={
                modalContent === "prisEnContes"
                  ? theatre
                  : modalContent === "solidarite"
                  ? solidarite
                  : sortieP
              }
              alt={modalContent}
            />
            <Text
              fontWeight="bold"
              fontSize="2.5em"
              textAlign="center"
              bottom={"14px"}
              pos={"relative"}
            >
              {modalContent === "prisEnContes"
                ? "Pris En Contes"
                : modalContent === "solidarite"
                ? "Solidarite"
                : "Sorties"}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody
            pos={"relative"}
            top="75px"
            textAlign="justify"
            fontSize="1em"
          >
            {modalContent === "prisEnContes" ? (
              <>
                Nous sommes des Vivants Debout avec nos assises roulantes pour
                jouer sur les planches ou ailleurs. Le mouvement immobile, la
                parole silencieuse, transformés, cachés ou visibles sont
                transfigurés par des comédiens en Devenir, là où on ne les
                attend pas. Dans nos ateliers Théâtre accessibles à tous, nous
                créons à chaque instant en bousculant les limites que l’on croit
                avoir, en apprenant des uns des autres, avec un appétit de vivre
                hors norme. Oyez, abordez le plaisir par le rire, par le partage
                ! Osez sans limite d’âge, nous rejoindre pour de nouvelles
                aventures inédites, pour rebondir encore plus haut, encore plus
                loin.
              </>
            ) : modalContent === "solidarite" ? (
              <>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis temporibus unde ipsam officiis suscipit sunt tempora.
                Vel doloremque, sint quidem facilis similique perspiciatis,
                voluptate a temporibus expedita velit aut quae!
              </>
            ) : (
              <>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Dolorum, voluptatibus.
              </>
            )}
          </ModalBody>

          <ModalFooter gap={"25px"} overflow={"visible"}>
          <Button onClick={onClose} color={"white"} _hover={"#AB87FF"}  backgroundColor='#AB87BF'>Fermer</Button>

          <Button onClick={handleDiscover} color={"white"} _hover={"#AB87FF"}  backgroundColor='#AB87FF'>Decouvrir</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Home;
