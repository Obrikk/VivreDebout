import Header from "../Header";
import "../styles/footer.css";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Grid,
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
  Img,
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import SolidariteImg from "../../public/handshake.png";
import LienGif from "../../public/info.gif";

import "../styles/navbar.css";

const MotionLink = motion(Link);

function CustomModal({ isOpen, onClose, header, body, additionalButtons }) {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
      borderRadius= "15px"
      overflow= "none"
      display= "flex"
      flexDirection= "column"
    fontSize={"1.4rem"}
      alignItems= "center"
      alignSelf= "center"
      textAlign= "center"
      position= "fixed"
      height= "95vh"
      backgroundColor= "#FFF0F5"
      >
        <ModalHeader
         fontWeight= "bold"
      fontSize= "1.8em"
        >
          {header}
        </ModalHeader>
        <Text
          fontSize="1.07em"
          textAlign="justify"
          pl="15px"
          pr="15px"
          pos="relative"
          top="50px"
        >
          {body}
        </Text>
        <ModalBody    textAlign= "justify"
      fontSize= "1.2rem"
      display= "flex"
      justifyContent={'space-around'}
      flexDirection= "column"
            >
          {additionalButtons && additionalButtons.map((button, index) => (
            <Button
            fontSize={"1.2rem"}
            padding={"35px 130px"}
              key={index}
              colorScheme="blue"
             
              onClick={() => handleRedirect(button.url)}
            >
              {button.label}
            </Button>
          ))}
        </ModalBody>
        <ModalFooter overflow="visible">
          <Button fontSize={"1.2rem"} padding={"30px 0px"}  backgroundColor="#EEE7FF"  onClick={onClose}>
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

function PrisEnContes() {
  const {
    isOpen: isModal1Open,
    onOpen: onModal1Open,
    onClose: onModal1Close,
  } = useDisclosure();
  const {
    isOpen: isModal2Open,
    onOpen: onModal2Open,
    onClose: onModal2Close,
  } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.backgroundColor = "#FCEFB4";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

 

  // Les contenus des modals
  const modal1Content = {
    
    buttons: [
      { label: "Pch", url: "/Pch" },
      { label: "Instructions", url: "Instruction" },
      { label: "Emulation", url: "Emulation" },
      { label: "Auxiliaire de vie", url: "Aides" },
      { label: "Stagiaires", url: "Stagiaires" },
    ],
  };

  const modal2Content = {
    
    header: "Actions Solidaires",
    body: "Les actions solidaires de Vivre Debout sont très variées : apporter une aide ponctuelle ou régulière à domicile non prise en charge par les auxiliaires de vie, offrir un complément financier permettant de diminuer le reste à charge, trier des papiers, faire une avance de frais, aider au déplacement, chaque situation est unique et nous  nous adaptons au maximum à chaque besoin, sans jamais décider pour nos bénéficiaires qui restent maîtres de leurs choix.", 
  };

  return (
    <>
      <Flex
        as="header"
        w="100%"
        p={4}
        alignItems="center"
        justifyContent="space-between"
      >
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
            <Drawer
              as={motion.div}
              isOpen={isDrawerOpen}
              placement="right"
              onClose={onDrawerClose}
            >
              <DrawerOverlay />
              <DrawerContent backgroundColor="white">
                <DrawerCloseButton />
                <DrawerHeader
                  textAlign={"center"}
                  fontSize={"3rem"}
                  fontWeight={"700"}
                >
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
                    { label: "Sorties", href: "./Sorties" },
                    { label: "Nous Connaître", href: "./nous-connaître" },
                    { label: "Pris En Contes", href: "./pris-en-contes" },
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
                     
                    >
                      {item.label}
                    </MotionLink>
                  ))}
                </DrawerBody>
                <DrawerFooter>
                  <Button padding={"30px 60px"}  variant="outline" mr={3} onClick={onDrawerClose}>
                    Fermer
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Header></Header>
        )}
      </Flex>
      <Box
  w="100%" height="100%" display="flex" flexDirection="column" alignItems="center"
  



  
      > 
    <Img src={SolidariteImg} w="10rem" pos="relative" top={{ xl: "5em", base: "3em" }} />
        
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
          top={{ base: "10rem", sm: "10rem", lg: "-2rem" }}
          rowGap="3rem"
        >
          <GridItem    as={motion.div} display="flex" justifyContent="center" alignItems="center">
            <Flex
              as={motion.div}
              width={{
                lg: "97%",
                "2xl": "80%",
                md: "80%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              textAlign="justify"
              height={{
                lg: "60vh",
                xl: "65vh",
                base: "65vh",
              }}
               background="white"
              borderRadius="20px"
              boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
             
              
              padding={"15px"}
            >
              <Heading
              fontSize={{ lg: "3rem",  base: "2.3rem",sm:"3.5rem" }}
                
                   size="lg"
                  textTransform="uppercase"
                      textAlign="center"
              >
                Conseils
              </Heading>
              <UnorderedList
                spacing={7}
                listStyleType="circle"
                         fontSize={{
                  sm: "2rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                
                  base: "1.5rem",
                }}
                textAlign="justify"
                width={'90%'}
              >
                <ListItem>
                  Nous conseillons sur le respect de l'éthique citoyenne.
                </ListItem>
                <ListItem>
                 Nous sommes amenés parfois dénoncer et critiquer les
                  violations de la convention de l'ONU.
                </ListItem>
              </UnorderedList>
              <Flex justifyContent="center">
                <Button
                
                  onClick={onModal1Open}
               padding={"35px 45px"}
              fontSize={"1.3rem"}
                color="white"
                  backgroundColor="#AB87FF"
                      _hover={{ bg: "#9260CC" }}
                >
                  Accéder aux conseils
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem  display="flex" justifyContent="center" alignItems="flex-end">
            <Flex
                    as={motion.div}
                    width={{
                    
                      
                      md: "80%",
                      sm: "90%",
                      xl: "80%",
                      base: "87%",
                    }}
                    height={{
                   lg: "45vh",
                      xl: "45vh",
                      md: "350px",
                      sm: "350px",
                      base: "40vh",
                    }}
                    background="white"
                    borderRadius="20px"
                    boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="space-around"
                    gap="3"
            >
              <Heading
                textAlign="center"
                marginTop="5%"
                textTransform="uppercase"
          fontSize={{ lg: "2.4rem",  base: "2.3rem",sm:"3.5rem" }}
                
              >
                Actions Solidaires
              </Heading>
              {/* Text removed here */}
              <Button
                onClick={onModal2Open}
           padding={"35px 45px"}
              fontSize={"1.3rem"}
                color="white"
                backgroundColor="#AB87FF"
                  _hover={{ bg: "#9260CC" }}
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
                md: "80%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              textAlign="justify"
              height={{
                lg: "60vh",
                xl: "65vh",
                base: "55vh",
              }}
               background="white"
              borderRadius="20px"
              boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
             
              
           
            
            >
              <Heading
                  textAlign="center"
                
                textTransform="uppercase"
                     fontSize={{ lg: "3rem", base: "2.3rem",sm:"3.5rem" }}
                
              >
                Liens Utiles
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                fontSize={{
                  sm: "2.1rem",
                  lg: "1.3rem",
                  xl: "1.7rem",
                 
                  base: "1.5rem",
                  
                }}
                pos={"relative"}
                bottom={{base:"3rem"}}
                textAlign="justify"
              >
                <ListItem
                
                >
                  <Link
                  
                  isExternal href="https://mdphenligne.cnsa.fr/">
                    MPDH en ligne
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal href="https://www.yvelines.fr/fiche/pole-autonomie-territorial-st-quentin/">
                    Pôle autonomie de SQY
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal href="https://www.economie.gouv.fr/recrutement/dgfip-avis-de-recrutement-de-travailleurs-en-situation-de-handicap-par-la-voie">
                    DGFIP
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal href="https://www.capemploi.info/">
                    CAP Emploi
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <CustomModal
        isOpen={isModal1Open}
        onClose={onModal1Close}
        header={modal1Content.header}
        body={modal1Content.body}
        additionalButtons={modal1Content.buttons}
      />
      <CustomModal
        isOpen={isModal2Open}
        onClose={onModal2Close}
        header={modal2Content.header}
        body={modal2Content.body}
      />
    </>
  );
}

export default PrisEnContes;

