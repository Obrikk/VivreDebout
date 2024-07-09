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
  Image,
} from "@chakra-ui/react";
import {
  ArrowBackIcon,
  ArrowForwardIcon,
  HamburgerIcon,
} from "@chakra-ui/icons";
import { motion } from "framer-motion";
import SolidariteImg from "../../public/solidariteP.png";
import LienGif from "../../public/info.gif";
import Masks from "../../public/theatre.png";

import "../styles/navbar.css";

const customModalStyles = {
  modalContent: {
    borderRadius: "15px",
    overflow: "none",
    fontFamily: "Tahoma",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    position: "fixed",
    wordSpacing: "0em",
    hyphens: "auto",
    padding: "6px",
    backgroundColor: "#FFF0F5",
    lineHeight: "2.5rem",
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: "1.8em",
    lineHeight: "NORMAL",
  },
  modalBody: {
    textAlign: "justify",
    fontSize: "1.2rem",
    display: "flex",

    justifyContent: "space-around",
    flexDirection: "column",
    fontSize: "1.1rem",
  },
};

// Example of adjusting font sizes based on screen size
const screenSize = window.innerWidth; // Get the current window width

if (screenSize < 768) {
  // md screens (Bootstrap md breakpoint)
  customModalStyles.modalHeader.fontSize = "1.3em";
  customModalStyles.modalBody.fontSize = "1.2rem";
  customModalStyles.modalContent.fontSize = "1.2rem";

  customModalStyles.modalContent.height = "90vh";
}

if (screenSize > 768) {
  // md screens (Bootstrap md breakpoint)

 
  customModalStyles.modalHeader.fontSize = "1.7rem";
  customModalStyles.modalContent.fontSize = "1.1rem";
customModalStyles.modalBody.lineHeight = "2rem";
  customModalStyles.modalContent.height = "95vh";
}

const MotionLink = motion(Link);

function PrisEnContes() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const [isHandicapOpen, setHandicapOpen] = useState(false);
  const [isVivreDeboutOpen, setVivreDeboutOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#FF9CC7";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          overflowY="auto"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          position="fixed"
          height="85vh"
        >
          <ModalHeader></ModalHeader>
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
            <Image
              src={images[currentImageIndex]}
              alt={header}
              style={customModalStyles.modalImage}
            />
            {body && <Text mt="30px">{body}</Text>}
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="white" backgroundColor="#AB87FF">
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    );
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
          w="10rem"
          pos="relative"
          top={{ xl: "5em", base: "3em" }}
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
          top={{ base: "10rem", sm: "10rem", lg: "-2rem" }}
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
                base: "93%",
              }}
              textAlign="justify"
              height={{
                lg: "55vh",
                xl: "65vh",
                base: "70vh",
              }}
              background="white"
              borderRadius="20px"
              boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
              whileHover={{ scale: 1.05 }}
              cursor={"pointer"}
              padding={"15px"}
            >
              <Heading
                fontSize={{
                  lg: "2.8rem",
                  xl: "3rem",
                  base: "2.8rem",
                  sm: "3.5rem",
                }}
                size="lg"
                textTransform="uppercase"
                textAlign="center"
              >
                Ateliers
              </Heading>
              <UnorderedList
                spacing={4}
                listStyleType="circle"
                fontSize={{
                  sm: "1.7rem",
                  lg: "1.3rem",
                  xl: "1.45rem",

                  base: "1.35rem",
                }}
                textAlign="justify"
              >
                <ListItem>
                  Montez sur Scène avec "Pris En Contes" 2023-2024"
                </ListItem>
                <ListItem>
                  <Link href="https://www.google.fr/maps/place/25+Rue+de+la+Sa%C3%B4ne,+78310+Maurepas/@48.7666245,1.9398467,17z/data=!3m1!4b1!4m6!3m5!1s0x47e6836c41c246e1:0x1242a3f97a722123!8m2!3d48.7666245!4d1.9424216!16s%2Fg%2F11c5kfwmh_?entry=ttu">
                    Maison du Voisinage Les Coudrays Rue de Bassigny -78310
                    Maurepas
                  </Link>
                </ListItem>
                <ListItem>Tous les mardis de 17h45 à 19h15</ListItem>
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
                md: "80%",
                sm: "90%",
                xl: "80%",
                lg: "90%",
                base: "93%",
              }}
              height={{
                lg: "35vh",
                xl: "45vh",
                md: "350px",
                sm: "350px",
                base: "45vh",
              }}
              background="white"
              borderRadius="20px"
              boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
              flexDirection="column"
              alignItems="center"
              justifyContent="space-around"
              marginBottom={{ lg: "1.5rem", xl: "0" }}
              whileHover={{ scale: 1.05 }}
              cursor={"pointer"}
            >
              <Heading
                textAlign="center"
                textTransform="uppercase"
                fontSize={{
                  lg: "2.4rem",
                  xl: "2.8rem",
                  base: "2.5rem",
                  sm: "3.5rem",
                }}
              >
                Debout
              </Heading>
              <Text
                listStyleType="circle"
                fontSize={{
                  sm: "1.7rem",
                  lg: "1.3rem",
                  xl: "1.4rem",

                  base: "1.35rem",
                }}
                textAlign="center"
                padding={"5px"}
              >
                Être en mouvement dans l’audace et la créativité, c’est possible
                !
              </Text>
              <Button
                onClick={onOpen}
                padding={{
                  lg: "30px 30px",
                  xl: "35px 45px",
                  md: "35px 45px",
                  sm: "35px 45px",
                  base: "35px 45px    ",
                }}
                fontSize={"1.3rem"}
                color="white"
                backgroundColor="#FA0871"
                _hover={{ bg: "#AB004A" }}
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
                md: "80%",
                sm: "90%",
                xl: "90%",
                base: "93%",
              }}
              textAlign="justify"
              height={{
                lg: "55vh",
                xl: "65vh",
                base: "70vh",
              }}
              background="white"
              borderRadius="20px"
              boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
              flexDirection="column"
              alignItems="center"
              justifyContent={"space-around"}
              whileHover={{ scale: 1.05 }}
              cursor={"pointer"}
              marginBottom={{ base: "3rem", lg: "0" }}
              padding={"15px"}
            >
              <Heading
                fontSize={{
                  lg: "2.2rem",
                  xl: "2.7rem",
                  base: "2.5rem",
                  sm: "3.5rem",
                }}
                size="lg"
                textTransform="uppercase"
                textAlign="center"
              >
                Manifestations
              </Heading>
              <UnorderedList
                spacing={4}
                listStyleType="circle"
                fontSize={{
                  sm: "1.7rem",
                  lg: "1.3rem",
                  xl: "1.35rem",

                  base: "1.35rem",
                }}
                textAlign="justify"
              >
                <ListItem>
                  <Link onClick={() => setHandicapOpen(true)}>
                    14 juin 15h nuit du handicap
                  </Link>
                </ListItem>
                <ListItem>
                  Novembre 2024, du lundi 18 au dimanche 24, semaine du handicap
                  en entreprise
                </ListItem>
                <ListItem>
                  <Link onClick={() => setVivreDeboutOpen(true)}>
                    25 janvier 2025, "50 ans vivre debout"
                  </Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <CustomImageModal
        isOpen={isHandicapOpen}
        onClose={() => setHandicapOpen(false)}
        images={[
          "../../public/FlyerNuitDuHandicap1.png",
          "../../public/FlyerNuitDuHandicap2.png",
        ]}
      />

      <CustomImageModal
        isOpen={isVivreDeboutOpen}
        onClose={() => setVivreDeboutOpen(false)}
        images={["../../public/VivreDebout50Ans.jpg"]}
      />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={customModalStyles.modalContent}>
          <ModalHeader style={customModalStyles.modalHeader}>
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
       Le théâtre permet avant tout à nos adhérents qui le veulent de se retrouver et de monter un spectacle tout au long de l’année. Du rire, de la bonne humeur, et l’amitié sont les éléments les plus importants ! 
       De plus, le théâtre procure des bénéfices sur les plans émotionnel, social et physique. Cette activité a un impact profond et positif sur la vie des membres de la troupe, en leur offrant un espace pour s’exprimer, se développer et gagner en confiance en soi.
          </Text>
          <ModalBody style={customModalStyles.modalBody}></ModalBody>

          <ModalFooter
            display={"flex"}
            justifyContent={"center"}
            overflow="visible"
          >
            <Button
              padding={"30px 60px"}
              backgroundColor="#FA0871"
              _hover={{ bg: "#AB004A" }}
              color={"white"}
              onClick={onClose}
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
