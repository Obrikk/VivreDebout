import React, { useState, useEffect } from "react";
import Header from "./Header";
import FamilyDisabled from "../public/FamilyDisab.svg";
import Pen from "../public/pen.gif";
import {
  Heading,
  Image,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Flex,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerCloseButton,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Link,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import Solidarite from "../public/solidarite.png";
import Atelier from "../public/Ateliers.jpg";
import theatre from "../public/theatre.png";
import sortie from "../public/sorties.png";
import solidarite from "../public/solidariteP.png";
import sortieP from "../public/sortieP.png";
import Arbre from "../public/arbre.jpg";

import "../src/styles/home.css";
import "./styles/navbar.css";

const CustomModal = ({ isOpen, onClose, header, body, imageSrc, discoverHandler }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="15px"
        overflow="none"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        position="fixed"
        height="85vh"
      >
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Image m={"auto"} h={"15vh"} src={imageSrc} alt={header} />
          <Text mt={"30px"} textAlign={"justify"} fontSize={"1.1rem"}>{body}</Text>
        </ModalBody>
        <ModalFooter gap={"15px"}>
          <Button onClick={onClose} color={"white"} _hover={{ bg: "#AB87FF" }} backgroundColor='#AB87BF'>Fermer</Button>
          <Button onClick={discoverHandler} color={"white"} _hover={{ bg: "#AB87FF" }} backgroundColor='#AB87FF'>Découvrir</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function Home() {
  const { isOpen: isSolidariteOpen, onOpen: onSolidariteOpen, onClose: onSolidariteClose } = useDisclosure();
  const { isOpen: isSortiesOpen, onOpen: onSortiesOpen, onClose: onSortiesClose } = useDisclosure();
  const { isOpen: isPrisEnContesOpen, onOpen: onPrisEnContesOpen, onClose: onPrisEnContesClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 1500);
  };

  const handleDiscover = (modalContent) => {
    let url = "";
    if (modalContent === "prisEnContes") {
      url = "/prisEnContes";
    } else if (modalContent === "solidarite") {
      url = "/solidarite";
    } else if (modalContent === "sorties") {
      url = "/sorties";
    }
    window.open(url, "_blank");
  };

  return (
    <>
      <Flex as="header" w="100%" p={4} alignItems="center" justifyContent="space-between">
        {isMobile ? (
          <>
            <IconButton
              aria-label="Options"
              icon={<HamburgerIcon />}
              h={"60px"}
              w={"60px"}
              onClick={onDrawerOpen}
              borderRadius={"15px"}
              color={"white"}
              bg={"black"}
              _hover={{ bg: "white", color: "black" }}
            />
            <Drawer isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
              <DrawerOverlay />
              <DrawerContent backgroundColor="white">
                <DrawerCloseButton />
                <DrawerHeader textAlign={"center"} fontSize={"2rem"} fontWeight={"700"}>
                  Menu
                </DrawerHeader>
                <DrawerBody
                  fontSize={"1.5rem"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  fontWeight={"500"}
                  gap={"40px"}
                >
                  {[
                    { label: "Actualités", href: "./actus" },
                    { label: "Sorties", href: "./Sorties" },
                    { label: "Nous Connaître", href: "./nous-connaître" },
                    { label: "Nous Soutenir", href: "./soutien" },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href={item.href}
                      onClick={handleLinkClick(item.href)}
                      _hover={{
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "8px",
                        padding: "8px",
                        transition: "0.4s all ease",
                      }}
                    >
                      {item.label}
                    </Link>
                  ))}
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onDrawerClose}>
                    Fermer
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Header />
        )}
      </Flex>

      <div className="home">
        <div className="left">
          <Box overflow={"visible"}>
            <Heading size="3xl" pos="relative" bottom={"1rem"} left={{ lg: '3rem' }}>
              Vivre Debout
            </Heading>
            <Image src={Arbre} pos={'absolute'} opacity='0.1' w={{ lg: '70rem' }} top={{ lg: '5rem' }} right={'10rem'} />
            <Image src={Pen} pos="absolute" width="4rem" left="34.5rem" top="5.7rem" />
            <Text
              pos="relative"
              textAlign={"justify"}
              fontSize="1rem"
              fontWeight="600"
              margin={"auto"}
              width={"76%"}
              left={{ lg: '3rem' }}
              top={{ lg: '1rem' }}
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
                onClick={onSortiesOpen}
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
                onClick={onSolidariteOpen}
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
                onClick={onPrisEnContesOpen}
                src={Atelier}
                alt="Pris en conte"
                pos="relative"
                borderRadius="15px"
              />
            </Box>
          </Box>
        </div>
        <div className="right">
          <Image height={{ lg: '26rem' }} pos="relative" top={{ lg: '2rem' }} src={FamilyDisabled} alt="Family Disabled" />
          <div className="light"></div>
        </div>
      </div>

      <CustomModal
        isOpen={isSolidariteOpen}
        onClose={onSolidariteClose}
        header="Solidarité"
        body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis temporibus unde ipsam officiis suscipit sunt tempora. Vel doloremque, sint quidem facilis similique perspiciatis, voluptate a temporibus expedita velit aut quae!"
        imageSrc={solidarite}
        discoverHandler={() => handleDiscover("solidarite")}
      />

      <CustomModal
        isOpen={isSortiesOpen}
        onClose={onSortiesClose}
        header="Sorties"
        body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, voluptatibus."
        imageSrc={sortieP}
        discoverHandler={() => handleDiscover("sorties")}
      />

      <CustomModal
        isOpen={isPrisEnContesOpen}
        onClose={onPrisEnContesClose}
        header="Pris en Contes"
        body="Nous sommes des Vivants Debout avec nos assises roulantes pour jouer sur les planches ou ailleurs. Le mouvement immobile, la parole silencieuse, transformés, cachés ou visibles sont transfigurés par des comédiens en Devenir, là où on ne les attend pas. Dans nos ateliers Théâtre accessibles à tous, nous créons à chaque instant en bousculant les limites que l’on croit avoir, en apprenant des uns des autres, avec un appétit de vivre hors norme. Oyez, abordez le plaisir par le rire, par le partage ! Osez sans limite d’âge, nous rejoindre pour de nouvelles aventures inédites, pour rebondir encore plus haut, encore plus loin."
        imageSrc={theatre}
        discoverHandler={() => handleDiscover("prisEnContes")}
      />
    </>
  );
}

export default Home;
