import Header from "../../Header";
import { useState, useEffect } from "react";

import {
  Flex,
  Box,
  Button,
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
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence} from "framer-motion";
import "../../styles/navbar.css";
const MotionBox = motion(Box);
const MotionLink = motion(Link);

const modalTexts = [
  " Sur le long cours, des bénévoles en situation de handicap accompagnent leurs pairs afin qu'ils puissent échanger leur expérience, et permettre chez l'autre, de développer une confiance en soi et se déterminer par soi-même. Cet accompagnement s'appelle la Pair-émulation.",
  "Combien d'accidentés graves ou de personnes soudainement envahies par la maladie sombrent dans une dépression ? Combien sont-ils à refuser toute aide car ils pensent que personne ne peut se mettre à leur place et les comprendre ? Une personne qui a vécu ce basculement et qui s'en sort peut s'avérer être le seul contact possible. Le bénévole, avant de devenir Pair émulateur, suit une formation spécifique dispensée par le Groupement Français des Personnes Handicapées, qui fait partie comme Vivre Debout de la Coordination Handicap Autonomie."
];

const customModalStyles = {
  modalContent: {
    borderRadius: "15px",
    overflow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    position: "fixed",
    lineHeight: "1.9rem",
    wordSpacing: "0em",
    hyphens: "auto",
    backgroundColor: "#FFF0F5",
    width: "95%", // Ajout de la largeur
    maxWidth: "50vw", // Optionnel : Limite maximale de largeur
   
  },
  modalHeader: {
    fontWeight: "bold",
    fontSize: "1.8em",
    marginTop:"15px",
  },
  modalBody: {
    textAlign: "justify",
    
    fontSize: "1.2rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};


  const screenSize = window.innerWidth; 
  if (screenSize < 768) {
  
    customModalStyles.modalHeader.fontSize = "2.2rem";
    customModalStyles.modalBody.fontSize = "1.3rem";
    customModalStyles.modalContent.height = "95vh";
    customModalStyles.modalBody.lineHeight = "2.4rem";
    customModalStyles.modalContent.maxWidth = "95%";
  }

  if (screenSize < 500) {
  
    customModalStyles.modalHeader.fontSize = "2em";
    customModalStyles.modalBody.fontSize = "1.1rem";
    customModalStyles.modalContent.height = "95vh";
    customModalStyles.modalBody.lineHeight = "2rem";
    customModalStyles.modalContent.maxWidth = "95%";
  }
  if (screenSize > 768) {
   
customModalStyles.modalBody.fontSize = "1.3rem";
customModalStyles.modalBody.lineHeight = "2.7rem";
    customModalStyles.modalHeader.fontSize = "1.9rem";
  customModalStyles.modalContent.height = "95vh";
  customModalStyles.modalContent.maxWidth = "75%";
 
  }

  if (screenSize > 1008) {
   
    customModalStyles.modalBody.fontSize = "1.6rem";
        customModalStyles.modalHeader.fontSize = "2.5rem";
  
     
      }

const CustomTextModal = ({ isOpen, onClose, header, texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? texts.length - 1 : prevIndex - 1
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent  style={customModalStyles.modalContent}>
        <ModalHeader  style={customModalStyles.modalHeader}  >{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody  style={customModalStyles.modalBody}>
        <AnimatePresence mode="wait">
            <MotionBox
            key={currentIndex} // Ensure unique key for re-rendering
                px={4}
                mt={{base:"8rem",md:"10rem",lg:"12rem",sm:"8rem"}}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
            >
              <Text>{texts[currentIndex]}</Text>
            </MotionBox>
          </AnimatePresence>
          <Text borderRadius={"15px"} boxShadow={"2px 2px 6px "} padding={"7px 30px"} border={"1px solid transparent"} color={"#89B106"} fontWeight={"bold"}    top={{base:"7rem",md:"8rem",sm:"7rem"}}  m={"auto"} pos={"absolute"}>{`${currentIndex + 1} / ${texts.length}`}</Text>
        </ModalBody>
        <ModalFooter display={'flex'} gap={"10px"}>
          {currentIndex == 1 && (
            <Button padding={"30px 60px"} onClick={handlePrev} color="white" backgroundColor="#A8D908" _hover={{ bg: "#89B106" }} >
              Précédent
            </Button>
          )}

{currentIndex == 0 && (
            <Button padding={"30px 60px"} onClick={handleNext} color="white" backgroundColor="#A8D908" _hover={{ bg: "#89B106" }}>
              Suivant
            </Button>
          )}
         
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function Emulation() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [isPrestataireOpen, setPrestataireOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
        document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#E6FC9C";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                  fontSize={"1.6rem"}
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
             
                    >
                      {item.label}
                    </MotionLink>
                  ))}
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" m
                  ={"auto"} padding={"30px 45px"} onClick={onDrawerClose}>
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
        mt={"3%"}
        w="100%"
        height="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent={"center"}
      >
        <Flex
          as={motion.div}
          width={{
            lg: "97%",
            md: "80%",
            sm: "90%",
            xl: "95%",
            base: "93%",
          }}
          height={{
            lg: "60vh",
            xl: "65vh",
            base: "70vh",
          }}
          background="white"
          borderRadius="20px"
          boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
          flexDirection="column"
          alignItems="center"
          justifyContent={"space-around"}
          padding={"20px"}
          
        >
          <Heading
            fontSize={{
              lg: "2.8em",
              md: "2.4rem",
              xl: "4rem",
              sm: "2.4rem",
              base: "2rem",
            }}
            textAlign="center"
          >
            Pair-Emulation
          </Heading>

          <Text
            fontSize={{
              sm: "1.4rem",
              lg: "1.7rem",
              xl:"1.8rem",
              base: "1.25rem",
            }}
            textAlign={"justify"}
            
            
          >
           Des bénévoles en situation de handicap apportent un soutien essentiel à leurs pairs, facilitant ainsi l'échange d'expériences et renforçant la confiance en soi.
          </Text>
          <Button
      padding={"35px 60px"}
            fontSize={"1.3rem"}
            color="white"
            backgroundColor="#A8D908"
            onClick={() => setPrestataireOpen(true)}
            _hover={{bg:"#89B106"}}
          >
            En savoir plus
          </Button>
        </Flex>
      </Box>
      <CustomTextModal
        isOpen={isPrestataireOpen}
        onClose={() => setPrestataireOpen(false)}
        header="Information"
        texts={modalTexts}
      />
    </>
  );
}

export default Emulation;