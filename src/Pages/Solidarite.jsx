import Header from "../Header";
import '../styles/footer.css';
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
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import SolidariteImg from "../../public/solidariteP.png";
import LienGif from "../../public/info.gif";

import "../styles/navbar.css";

const MotionLink = motion(Link);

function CustomModal({ isOpen, onClose, header, body }) {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
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
        <ModalHeader
          fontWeight="bold"
          fontSize={{ sm: "1.5em", lg: "2em", xl: "3.5em" }}
          overflow="visible"
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
        <ModalCloseButton />
        <ModalBody 
        display={"flex"}
        flexDirection={"column"}
        gap={"4rem"}
        

        >
        <Button  colorScheme="blue" mr={3} onClick={() => handleRedirect('/page1')}>
            npm run dev
          </Button>
          <Button  colorScheme="blue" mr={3} onClick={() => handleRedirect('/Conseils/Instruction')}>
          Instructions
          </Button>
          <Button colorScheme="blue" mr={3} onClick={() => handleRedirect('/Conseils/Emulation')}>
            Emulation
          </Button>
          <Button colorScheme="blue" mr={3} onClick={() => handleRedirect('Aides')}>
            Aides
          </Button>
          <Button colorScheme="blue" mr={3} onClick={() => handleRedirect('Stagiaires')}>
          Stagiaires
          </Button>
        </ModalBody>
        <ModalFooter overflow="visible">
       
          <Button backgroundColor="#EEE7FF" mr={3} onClick={onClose}>
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

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    });
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
                      onClick={handleLinkClick(item.href)}
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
          <Header></Header>
        )}
      </Flex>
      <Box
        w="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Img
          src={SolidariteImg}
          w="8rem"
          pos="relative"
          top={{ xl: "3em", lg: "1em", base: "1.5em" }}
        />
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
          top={{ base: "10rem", sm: "10rem", md: "10rem", lg: "0", xl: "0" }}
        
          rowGap="3rem"
        >
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
              bg="#fdf8e1"
              justifyContent={{ base: "space-between", md: "space-around" }}
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "3rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
              >
                Conseils
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                pos="relative"
                fontSize={{
                  md: "1.3rem",
                  lg: "1.2rem",
                  xl: "1.5rem",
                  base: "1.1rem",
                  sm: "1.25rem",
                }}
              >
                <ListItem>
                  Nous conseillons sur le respect de l'éthique citoyenne.
                </ListItem>
                <ListItem>
                  Parfois, nous devons publiquement dénoncer et critiquer les
                  violations de la convention de l'ONU.
                </ListItem>
              </UnorderedList>
              <Flex justifyContent="center">
                <Button
                  onClick={onModal1Open}
                  w={{ lg: "60%", "2xl": "50%" }}
                  h={{ lg: "10vh", md: "10vh", sm: "10vh", base: "10vh" }}
                >
                  Accéder aux conseils
                </Button>
              </Flex>
            </Flex>
          </GridItem>
          <GridItem
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
          >
            <Flex
              as={motion.div}
              width={{
                lg: "96%",
                "2xl": "80%",
                md: "80%",
                sm: "90%",
                xl: "90%",
                base: "87%",
              }}
              height={{
                lg: "40vh",
                md: "250px",
                sm: "250px",
                base: "250px",
                xl: "45vh",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="0.75rem"
              pl="10px"
              pr="10px"
              pb="15px"
              whileHover={{ scale: 1.05 }}
              initial={{ y: "30rem" }}
              animate={{ y: "0rem" }}
              direction="column"
              cursor="pointer"
              bg="#fdf8e1"
              alignItems="center"
              justifyContent="space-around"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.8rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
              >
                Actions <br />
                Solidaires
              </Heading>
              <Text
                fontSize={{
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                  base: "1.1rem",
                  sm: "1.25rem",
                }}
                textAlign="center"
              >
                {/* Text ici si il y'en a */}
              </Text>
              <Button
                onClick={onModal2Open}
                w={{ lg: "60%", "2xl": "50%" }}
                h={{ lg: "10vh", md: "10vh", sm: "10vh", base: "10vh" }}
              >
                En savoir plus
              </Button>
            </Flex>
          </GridItem>
          <GridItem
            className="box1"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
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
              bg="#fdf8e1"
            >
              <Heading
                fontSize={{
                  lg: "2.3em",
                  md: "2.4rem",
                  xl: "2.7rem",
                  sm: "2.4rem",
                  base: "2.3rem",
                }}
              >
                Liens Utiles
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                fontSize={{
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                  sm: "1.25rem",
                  base: "1.05rem",
                }}
              >
                <ListItem>
                  <Link isExternal href="https://mdphenligne.cnsa.fr/">
                    MPDH en ligne
                  </Link>
                </ListItem>
                <ListItem>  
                  <Link
                    isExternal
                    href="https://www.yvelines.fr/fiche/pole-autonomie-territorial-st-quentin/"
                  >
                    Pôle autonomie de SQY
                  </Link>
                </ListItem>
                <ListItem>
                  <Link
                    isExternal
                    href="https://www.economie.gouv.fr/recrutement/dgfip-avis-de-recrutement-de-travailleurs-en-situation-de-handicap-par-la-voie"
                  >
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
        
      />
      <CustomModal
        isOpen={isModal2Open}
        onClose={onModal2Close}
        header="Actions Solidaires"
        body="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius, maxime inventore! Assumenda totam fugit qui error iusto alias id, corporis velit veritatis, provident, modi repellat fugiat ipsam. Ab, ipsa dolorum!"
      />
    </>
  );
}

export default PrisEnContes;
