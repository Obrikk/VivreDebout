import Header from "../../Header";
import { useEffect, useState } from "react";
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
import SolidariteImg from "../../../public/solidariteP.png";
import LienGif from "../../../public/info.gif";


import "../../styles/navbar.css";

const MotionLink = motion(Link);

function Aides() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const [isHandicapOpen, setHandicapOpen] = useState(false);
  const [isVivreDeboutOpen, setVivreDeboutOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.backgroundColor = "#ff006e";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customModalStyles = {
    modalContent: {
      borderRadius: "15px",
      overflow: "none",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      position: "fixed",
      height: "85vh",
      backgroundColor: "#FFF0F5",
    },
    modalHeader: {
      fontWeight: "bold",
      fontSize: "2em",
    },
    modalBody: {
      
      textAlign: "justify",
      fontSize: "1.1rem",
    },
    modalImage: {
      width: "350px ", // Ajoutez cette ligne pour que l'image prenne toute la largeur du conteneur
    },
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
        <ModalContent style={customModalStyles.modalContent}>
          <ModalHeader style={customModalStyles.modalHeader}>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={customModalStyles.modalBody}>
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
            <Image src={images[currentImageIndex]} alt={header} style={customModalStyles.modalImage} />
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
                    { label: "Accueil", href: "/" },
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
      <Box w="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
       
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}
          height="100%"
          templateRows="auto"
          pos="relative"
          top={{ base: "10rem", sm: "10rem", md: "7rem", lg: "0", xl: "4rem" }}
          rowGap="3rem"
          margin={"auto"}
        >
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex 
              as={motion.div}
              width={{
                lg: "97%",
                "2xl": "80%",
                md: "95%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              textAlign="justify"
              justifyContent="space-around"
              height={{
                lg: "60vh",
                xl: "65vh",
                md: "350px",
                sm: "350px",
                base: "350px",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
              >
                Mode Prestataire
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                pos="relative"
                mt="30px"
                fontSize={{
                  md: "1.2rem",
                  sm: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                  base: "1.1rem",
                }}
              >
                <ListItem>
                  Programmes pour les personnes en situation de handicap
                </ListItem>
                <ListItem>Événements ouverts à tous</ListItem>
                <ListItem>Sessions de sensibilisation et d'information</ListItem>
              </UnorderedList>
              <Button
                width="fit-content"
                onClick={() => setHandicapOpen(true)}
                mt="40px"
                color="white"
                _hover={{ bg: "#AB87FF" }}
                backgroundColor="#ff006e"
                textAlign={"center"}
              >
                En savoir plus
              </Button>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex 
              as={motion.div}
              width={{
                lg: "97%",
                "2xl": "80%",
                md: "95%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              textAlign="justify"
              justifyContent="space-around"
              height={{
                lg: "60vh",
                xl: "65vh",
                md: "350px",
                sm: "350px",
                base: "350px",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
              >
                Mode Mandataire
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                pos="relative"
                mt="30px"
                fontSize={{
                  md: "1.2rem",
                  sm: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                  base: "1.1rem",
                }}
              >
                <ListItem>Activités de soutien aux personnes en difficulté</ListItem>
                <ListItem>Ateliers de développement personnel</ListItem>
                <ListItem>Groupes de parole et de soutien</ListItem>
              </UnorderedList>
              <Button
                width="fit-content"
                onClick={() => setVivreDeboutOpen(true)}
                mt="40px"
                color="white"
                _hover={{ bg: "#AB87FF" }}
                backgroundColor="#ff006e"
              >
                En savoir plus
              </Button>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex 
              as={motion.div}
              width={{
                lg: "97%",
                "2xl": "80%",
                md: "95%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              textAlign="justify"
              justifyContent="space-around"
              height={{
                lg: "60vh",
                xl: "65vh",
                md: "350px",
                sm: "350px",
                base: "350px",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
              >
              Mode Direct

              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                pos="relative"
                mt="30px"
                fontSize={{
                  md: "1.2rem",
                  sm: "1.1rem",
                  lg: "1.2rem",
                  xl: "1.2rem",
                  base: "1.1rem",
                }}
              >
                <ListItem>Expositions et visites guidées</ListItem>
                <ListItem>Conférences et débats culturels</ListItem>
                <ListItem>Ateliers d'art et de création</ListItem>
              </UnorderedList>
              <Button
                width="fit-content"
                onClick={onOpen}
                mt="40px"
                color="white"
                _hover={{ bg: "#AB87FF" }}
                backgroundColor="#ff006e"
              >
                En savoir plus
              </Button>
            </Flex>
          </GridItem>
        </Grid>
        <CustomImageModal
          isOpen={isHandicapOpen}
          onClose={() => setHandicapOpen(false)}
          header="Programmes pour les personnes en situation de handicap"
          body="Nous proposons divers programmes adaptés pour les personnes en situation de handicap, afin de garantir une participation pleine et entière à nos activités."
          images={[LienGif]}
        />
        <CustomImageModal
          isOpen={isVivreDeboutOpen}
          onClose={() => setVivreDeboutOpen(false)}
          header="Vivre Debout"
          body="Nos activités de soutien et de développement personnel aident les individus à surmonter les difficultés de la vie quotidienne et à retrouver confiance en eux."
          images={[SolidariteImg]}
        />
        <CustomImageModal
          isOpen={isOpen}
          onClose={onClose}
          header="Culture et Patrimoine"
          body="Découvrez notre riche programme d'expositions, de visites guidées, de conférences et d'ateliers artistiques, conçu pour enrichir votre connaissance et appréciation du patrimoine culturel."
          images={[LienGif, SolidariteImg]}
        />
      </Box>
    </>
  );
}

export default Aides;

