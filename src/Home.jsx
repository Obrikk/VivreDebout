import Header from "../src/Header";
import { useEffect, useState } from "react";
import Pen from "../public/pen.gif";
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
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Image,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import FamilyDisabled from "../public/FamilyDisab.svg";
import Solidarite from "../public/solidarite.png";
import Atelier from "../public/Ateliers.jpg";
import theatre from "../public/theatre.png";
import sortie from "../public/sorties.png";
import solidarite from "../public/solidariteP.png";
import sortieP from "../public/sortieP.png";

import "../src/styles/home.css";
import "./styles/navbar.css";

const MotionLink = motion(Link);

function Home() {
  const {
    isOpen: isSolidariteOpen,
    onOpen: onSolidariteOpen,
    onClose: onSolidariteClose,
  } = useDisclosure();
  const {
    isOpen: isSortiesOpen,
    onOpen: onSortiesOpen,
    onClose: onSortiesClose,
  } = useDisclosure();
  const {
    isOpen: isPrisEnContesOpen,
    onOpen: onPrisEnContesOpen,
    onClose: onPrisEnContesClose,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
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

  const CustomImageModal = ({ isOpen, onClose, header, body, images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
    };

    const handleNextImage = () => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="15px"
          overflow="hidden"
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
            {images.length > 1 && (
              <>
                <IconButton
                  icon={<ArrowBackIcon />}
                  onClick={handlePrevImage}
                  position="absolute"
                  left="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex="10"
                />
                <IconButton
                  icon={<ArrowForwardIcon />}
                  onClick={handleNextImage}
                  position="absolute"
                  right="10px"
                  top="50%"
                  transform="translateY(-50%)"
                  zIndex="10"
                />
              </>
            )}
            <Image src={images[currentImageIndex]} alt={header} />
            {body && <Text mt="30px">{body}</Text>}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="white" _hover={{ bg: "#AB87FF" }} backgroundColor="#AB87BF">
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
  };

  return (
    <>
      <Flex as="header" w="100%" p={4} alignItems="center" justifyContent="space-between">
        {isMobile ? (
          <>
            <IconButton
              aria-label="Options"
              icon={<HamburgerIcon />}
              variant="outline"
              onClick={onDrawerOpen}
              h={"60px"}
              w={"60px"}
              borderRadius={"15px"}
              color={"white"}
              bg={"black"}
              _hover={{ bg: "white", color: "black" }}
            />
            <Drawer as={motion.div} isOpen={isDrawerOpen} placement="right" onClose={onDrawerClose}>
              <DrawerOverlay />
              <DrawerContent backgroundColor="white">
                <DrawerCloseButton />
                <DrawerHeader textAlign={"center"} fontSize={"2rem"} fontWeight={"700"}>
                  Menu
                </DrawerHeader>
                <DrawerBody
                  fontSize={" 1.6rem"}
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  fontWeight={"500"}
                  mt={"25px"}
                  gap={"50px"}
                >
                  {[
                    { label: "Actualités", href: "./actus" },
                    { label: "Solidarité", href: "./solidarite" },
                    { label: "Sorties", href: "./Sorties" },
                    { label: "Nous Connaître", href: "./nous-connaître" },
                    { label: "Nous Soutenir", href: "./soutien" },
                  ].map((item, index) => (
                    <MotionLink
                      key={index}
                      href={item.href}
                      initial={{ backgroundColor: "transparent" }}
                      whileHover={{
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: "8px",
                        padding: "8px",
                        transition: "0.4s all ease",
                      }}
                      whileTap={{ animation: "fillAnimation 1.5s forwards" }}
                      onClick={(e) => {
                        e.preventDefault();
                        setTimeout(() => {
                          window.location.href = item.href;
                        }, 1500);
                      }}
                    >
                      {item.label}
                    </MotionLink>
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
          <Header>
            <Flex>{/* Other header content */}</Flex>
          </Header>
        )}
      </Flex>
      <Box w="100%" height="100%" display="flex" flexDirection="column" alignItems="center" >
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "3fr 2fr",
            xl: "2fr 1fr",
          }}
          height="100%"
          templateRows="auto"
          pos="relative"
          top={{ base: "2rem", sm: "0rem", md: "4rem", lg: "10", xl: "10" }}
          rowGap="3rem"
          ml={{base: "0px", lg: "40px"}} // Ajusté pour éviter les débordements
          
        >
          <GridItem 
            display="flex"  
            justifyContent="center" 
            alignItems="center"
            pos={"relative"}
          >
            <Flex
              flexDirection={"column"}
              as={motion.div}
              width={{
                lg: "97%",
                "2xl": "80%",
                md: "95%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
            >
           
              <Heading
                fontSize={{
                  md: "4rem",
                  sm: "4rem",
                  base: "3rem",
                }}
                
             
              >
                {/* <Image
                  className="pen"
                  src={Pen}
                  h={"10vh"}
                  pos={"relative"}
                  right={{base:"20%"}}
                  top={{base:"0"}}
                  display={{ base: "block", sm: "block" }} // Ensure the pen is displayed on all screen sizes
                /> */}
                Vivre Debout
              </Heading>
              <Text
                textAlign="justify"
                fontSize={{
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.4rem",
                  base: "1.1rem",
                  sm: "1.5rem",
                }}
                mt={{ base: 6 }}
                mb={{ base: "8rem",sm:"8rem",md:"1rem" }}
              >
                Vivre Debout est membre administrateur de la Coordination Handicap
                Autonomie qui regroupe des petites associations qui défendent les
                mêmes valeurs et droits… Vivre Debout existe depuis 50 ans et a pour
                objectif de maintenir l’autonomie et l’indépendance des Personnes à
                Mobilité Réduite.
              </Text>
              <Flex  gap={{lg:"6",base:"5rem"}} pos={"relative"} display="flex" flexDirection={{base:"column",md:"row"}} alignItems="center">
                <Box  cursor="pointer" onClick={onSortiesOpen}>
                  <Text mb={"1rem"} textAlign={"center"} fontSize={{base:"5xl",sm:"5xl",md:'4xl'}} fontWeight="bold">
                    Sorties
                  </Text>
                  <Image
                    h={{ lg: "80%",sm:'60vw',md:"80%" }}
                    src={sortie}
                    alt="Sortie"
                    borderRadius="10px"
                  />
                </Box>
                <Box cursor="pointer" onClick={onSolidariteOpen}>
                  <Text  mb={"1rem"}  textAlign={"center"} fontSize={{base:"5xl",sm:"5xl",md:'4xl'}}  fontWeight="bold">
                    Solidarité
                  </Text>
                  <Image
                    h={{ lg: "80%",sm:'60vw',md:"80%" }}
                    src={Solidarite}
                    alt="Solidarité"
                    borderRadius="10px"
                  />
                </Box>
                <Box cursor="pointer" onClick={onPrisEnContesOpen}>
                  <Text  mb={"1rem"}  textAlign={"center"} fontSize={{base:"5xl",sm:"5xl",md:'4xl'}}  fontWeight="bold">
                    Pris En Contes
                  </Text>
                  <Image
                    h={{ lg: "80%",sm:'60vw',md:"80%" }}
                    src={Atelier}
                    alt="Pris en conte"
                    borderRadius="10px"
                  />
                </Box>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="flex-end">
            <Flex
              as={motion.div}
              w={{
                lg: "45vw",
                md: "40vw",
                sm: "55vw",
                base: "250px",
                xl: "40vw",
              }}
              pos="relative"
            >
              <Image
                display={{base:"none",lg:"block"}}
                src={FamilyDisabled}
                alt="Family Disabled"
                maxW="100%"
                maxH="100%"
              />
            </Flex>
          </GridItem>
        </Grid>
      </Box>
      <CustomImageModal
        isOpen={isSolidariteOpen}
        onClose={onSolidariteClose}
      
        body="La solidarité est l’un des piliers de l’association. Elle se manifeste de bien des façons : Aider l’un ou l’autre à faire des courses, offrir un complément financier permettant de diminuer le reste à charge, trier des papiers, faire une avance de frais, chaque situation est unique et nous  nous adaptons au maximum à chaque besoin, sans jamais décider pour nos bénéficiaires qui restent maîtres de leurs choix."
        images={[solidarite]
          
          
        }
        discoverHandler={() => handleDiscover("solidarite")}
      />
      <CustomImageModal
        isOpen={isSortiesOpen}
        onClose={onSortiesClose}
        header="Sorties"
        body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum, voluptatibus."
        images={[sortieP ]}

        discoverHandler={() => handleDiscover("sorties")}
      />
      <CustomImageModal
        isOpen={isPrisEnContesOpen}
        onClose={onPrisEnContesClose}
        header="Pris En Contes"
        body="Nous sommes des Vivants Debout avec nos assises roulantes pour jouer sur les planches ou ailleurs. Le mouvement immobile, la parole silencieuse, transformés, cachés ou visibles sont transfigurés par des comédiens en Devenir, là où on ne les attend pas. Dans nos ateliers Théâtre accessibles à tous, nous créons à chaque instant en bousculant les limites que l’on croit avoir, en apprenant des uns des autres, avec un appétit de vivre hors norme. Oyez, abordez le plaisir par le rire, par le partage ! Osez sans limite d’âge, nous rejoindre pour de nouvelles aventures inédites, pour rebondir encore plus haut, encore plus loin."
        images={[theatre]}
        discoverHandler={() => handleDiscover("prisEnContes")}
      />
    </>
  );
}

export default Home;
