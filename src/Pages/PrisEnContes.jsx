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
import { ArrowBackIcon, ArrowForwardIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import SolidariteImg from "../../public/solidariteP.png";
import LienGif from "../../public/info.gif";
import Masks from "../../public/theatre.png";

import "../styles/navbar.css";

const MotionLink = motion(Link);

function PrisEnContes() {
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
        document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#FF9CC7";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const customModalStyles = {
    modalContent: {
  
     
      
    },
    modalHeader: {
      
    },
    modalBody: {
      
   
    },
    modalImage: {
      
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
      <Modal 
        
      isOpen={isOpen} onClose={onClose}>
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
        height="85vh">
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody >
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
            <Button onClick={onClose}  color="white"backgroundColor="#AB87FF">
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
        <Img src={Masks} w="8rem" pos="relative" top={{ xl: "3em", lg: "1em", base: "1.5em" }} />
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
          top={{ base: "10rem", sm: "10rem", md: "7rem", lg: "0", xl: "0" }}
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
                textAlign={"center"}
              >
             Articles
              </Heading>
              <UnorderedList
       spacing={3}
       listStyleType="circle"
                fontSize={{
         sm: "1.7rem",
         lg: "1.3rem",
         xl: "1.5rem",
       
         base: "1.35rem",
       }}
       textAlign="justify"
       width={'90%'}
              >
                <ListItem>
                  Montez sur Scène avec "Pris en Contes 2023-2024"
                </ListItem>
                <ListItem>
                  Maison du Voisinage Les Coudrays Rue de Bassigny - 78310 Maurepas
                </ListItem>
                <ListItem> Tous les mardis de 17h45 à 19h45 </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="flex-end">
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
                  fontSize={{ lg: "3rem",  base: "2.3rem",sm:"3.5rem" }}
              >
                Debout !
              </Heading>
              <Text
            
             listStyleType="circle"
                      fontSize={{
               sm: "1.7rem",
               lg: "1.3rem",
               xl: "1.5rem",
             
               base: "1.35rem",
             }}
             textAlign="justify"
             width={'90%'}
              >
                Être en mouvement dans l’audace et la créativité, c’est possible !
              </Text>
              <Button onClick={onOpen}  padding={"30px 60px"}
              fontSize={"1.3rem"}
                color="white"
                  backgroundColor="#FA0871"
                      _hover={{ bg: "#9260CC" }}>
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
                textAlign={"center"}
              >
                Futures Manifestations
              </Heading>
              <UnorderedList
              spacing={4}
              listStyleType="circle"
                       fontSize={{
                sm: "1.7rem",
                lg: "1.3rem",
                xl: "1.5rem",
              
                base: "1.35rem",
              }}
              textAlign="justify"
             
              >
                <ListItem>
                  <Link  onClick={() => setHandicapOpen(true)}>14 juin 15h nuit du handicap</Link>
                </ListItem>
                <ListItem>
                  Novembre 2024, du lundi 18 au dimanche 24, semaine du handicap en entreprise
                </ListItem>
                <ListItem>
                  <Link onClick={() => setVivreDeboutOpen(true)}>25 janvier 2025, "50 ans vivre debout"</Link>
                </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
        </Grid>
      </Box>


      <CustomImageModal
      
        isOpen={isHandicapOpen}
        onClose={() => setHandicapOpen(false)}

        images={["../../public/FlyerNuitDuHandicap1.png", "../../public/FlyerNuitDuHandicap2.png"]


        
        }
      />

      <CustomImageModal
        isOpen={isVivreDeboutOpen}
        onClose={() => setVivreDeboutOpen(false)}
        images={["../../public/VivreDebout50Ans.jpg"]}
      />
      
      <Modal  isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius="15px"
          overflowY="auto"
         
          
          flexDirection="column"
          position="fixed"
          height="85vh"
        >
          <ModalHeader
            fontWeight="bold"
            fontSize={{ base: "2.5em", xl: "3em" }}
            overflow="visible"
            textAlign={"center"}
          >
            Pourquoi nous rejoindre ?
          </ModalHeader>
          <Text
             fontSize={{ base: "1.3em", xl: "1.2rem" }} 
            textAlign="justify"
            pl="15px"
            pr="15px"
            pos="relative"
            top="50px"
          >
            Vous avez envie d'aider mais vous ne savez pas comment faire ni ce que vous pourriez faire ?
Chez Vivre Debout, toutes les bonnes volontés sont appréciées !!
Du chef de projet, animateur d'activité, aide administrtatif ou bureautique, ou encore chauffeur, tout le monde a sa place chez Vivre Debout et toujours dans le respect absolu de ce qu"il peut donner, jamais plus.
N'hésitez plus rejoingnez nous
          </Text>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter display={"flex"} justifyContent={"center"} overflow="visible">
            <Button padding={"30px 60px"}   backgroundColor="#FA0871"
                      _hover={{ bg: "#9260CC" }} color={'white'}  onClick={onClose}>
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PrisEnContes;
