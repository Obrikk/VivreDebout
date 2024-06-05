import Header from "../Header";
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
import Masks from "../../public/theatre.png";

import "../styles/navbar.css";

const MotionLink = motion(Link);

function PrisEnContes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (href) => (e) => {
    e.preventDefault();
    setTimeout(() => {
      window.location.href = href;
    }, 1500);
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
              variant="outline"
              onClick={onDrawerOpen}
              h={"60px"}
              w={"60px"}
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
                  fontSize={"2rem"}
                  fontWeight={"700"}
                >
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
          <Header>
            <Flex>{/* Other header content */}</Flex>
          </Header>
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
          src={Masks}
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
                md: "95%",
                sm: "80%",
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
              bg="#EEE7FF"
              onClick={onOpen}
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
                Inclusivité
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                pos="relative"
                mt="30px"
                fontSize={{
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.4rem",
                  base: "1.1rem",
                  sm: "1.25rem",
                }}
              >
                <ListItem>
                  Montez sur Scène avec "Pris en Contes 2023-2024"
                </ListItem>
                <ListItem>
                  Maison du Voisinage Les Coudrays Rue de Bassigny - 78310
                  Maurepas
                </ListItem>
                <ListItem> Tous les mardis de 17h45 à 19h45 </ListItem>
              </UnorderedList>
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
                lg: "97%",
                "2xl": "80%",
                md: "95%",
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
              bg="#EEE7FF"
              alignItems="center"
              justifyContent={{ base: "space-between", md: "space-around" }}
              onClick={onOpen}
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
                Debout !
              </Heading>
              <Text
                fontSize={{
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.4rem",
                  base: "1.1rem",
                  sm: "1.25rem",
                }}
                textAlign="center"
              >
                Être en mouvement dans l’audace et la créativité, c’est possible
                !
              </Text>
              <Button
                onClick={onOpen}
                w={{ lg: "60%", "2xl": "50%" }}
                h={{
                  lg: "30%",
                  "2xl": "25%",
                  md: "30%",
                  sm: "30%",
                  base: "30%",
                }}
              >
                Rejoignez-nous !
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
                sm: "80%",
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
              bg="#EEE7FF"
              onClick={onOpen}
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
                Futures Manifestations
              </Heading>
              <UnorderedList
                spacing={3}
                listStyleType="circle"
                mt="25px"
                fontSize={{
                  md: "1.3rem",
                  lg: "1.3rem",
                  xl: "1.3rem",
                  sm: "1.25rem",
                  base: "1.05rem",
                }}
              >
                <ListItem>14 juin 15h nuit du handicap</ListItem>
                <ListItem>
                  Novembre 2024, du lundi 18 au dimanche 24, semaine du handicap
                  en entreprise
                </ListItem>
                <ListItem>25 janvier 2025, "50 ans vivre debout"</ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
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
            Pourquoi nous rejoindre ?
          </ModalHeader>
          <Text
            fontSize="1.07em"
            textAlign="justify"
            pl="15px"
            pr="15px"
            pos="relative"
            top="50px"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,
            maxime inventore! Assumenda totam fugit qui error iusto alias id,
            corporis velit veritatis, provident, modi repellat fugiat ipsam. Ab,
            ipsa dolorum!
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
    </>
  );
}

export default PrisEnContes;
