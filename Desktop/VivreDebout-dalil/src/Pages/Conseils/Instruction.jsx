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
  UnorderedList,
  ListItem,
  Heading,
  Text,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/navbar.css";

const MotionBox = motion(Box);
const MotionLink = motion(Link);

const modalTexts = [
  "Après vous avoir énoncé les prises en charges, votre enfant obtient peut-être une AESH* (Accompagnant-e-s d’Elèves en Situation de Handicap) pour l'accompagner au cours de sa maternelle. La classe comprend que le copain (copine) porte un handicap et cela peut s'avérer une réussite car l'école devient ainsi le premier lieu d'apprentissage à d'accueil de la différence. Les bienfaits pourraient être très importants si on pouvait pérenniser les AESH* et leur attribuer davantage d'heures auprès de l'enfant.",
  "          Personne ne se rebelle : ni l'enfant, trop jeune pour comprendre, ni les parents à qui on a démontré la voie générale dissuasive et qui font le deuil de la scolarité dont on aurait rêvé pour son enfant.  En cours préparatoire (CP), vous a-t-on laissé le choix ? La majorité des enfants handicapés sont orientés vers une section ULIS, une classe spécialement aménagée (maximum 12 élèves dans les établissements publics). ",
  " Bien qu'ils partagent certaines activités comme la musique, le sport, et les sciences avec les autres élèves, ils restent souvent 'à l'écart'. Cela permet un suivi adapté à leurs capacités tout en restant dans le milieu scolaire ordinaire.       En section ULIS*, il suffit d'interroger les professeurs des écoles, dont c'est souvent la première affectation pour la plupart une fois diplômés, pour comprendre que l'autonomie de l'enfant est déjà compromise.",
  " En primaire, il y a peu de chances que votre enfant sache lire et écrire car cela relève de la mission impossible lorsqu'il s'agit d'instruire un groupe, 12 élèves en moyenne, composé de troubles différents mais dont le quotient intellectuel peut être très satisfaisant.    Au sein de l'IME*, on rassure : votre enfant est accueilli dans les meilleures conditions avec pour preuves à l'appui, un projet d'établissement, un projet individualisé... mais il suffit de s'entretenir avec le personnel (Educateur spécialisé, Aide Médico Psychologique...) ",
  " pour comprendre que l'IME* est en sous-effectif avec un personnel prêt à craquer, financement oblige.          L'enfant devient inévitablement un assisté : il dépend physiquement et subit. Dans un IME*, apprendre à lire, à écrire ? Combien de parents ont-ils entendus (Non, votre enfant n'a pas les capacités d'apprendre) et combien de parents ont réussi malgré tout à faire en sorte que ce même enfant apprenne à lire, à écrire : les bases de l'autonomie.","  L'autonomie s'apprend dès le plus jeune âge. Optez pour le bien-être de votre enfant en visant pour lui une évolution à son rythme dans l'apprentissage. Nombreuses sont les familles qui ont découvert les cours par correspondance : le choix est large.   Il faut choisir celui qui permettra à l’enfant de prendre confiance, d’être capable d’appeler par tél ou par mail pour dire (stop, je n’ai pas compris ou n’arrive pas à résoudre tel problème...) et d’être immédiatement renseigné. ",
  "      Trop de parents se trompent, pensant qu’ils n’ont pas les connaissances ou même le temps : un bon cours par correspondance ne demande pas au parent d’être un professeur. Souvent, le cours par correspondance dégage du temps pour l’enfant : son rythme est respecté, il peut même s’ouvrir à des activités de loisirs. Il faut se battre pour demander le financement des cours à la MDPH* (Maison départemantale des personnes handicapées) et si l’enfant a besoin d’un assistant de vie compte tenu d’un très lourd handicap, la demande de la PCH* est possible.  Ce n’est pas la MDPH* qui proposera cette alternative il faudra argumenter pour l’obtenir. ",

  "Vivre Debout est disponible pour entendre, comprendre chaque cas et vous conseiller dans la rédaction et dans l'appui du projet de vie de votre enfant présenté à la MDPH*. La prise en charge actuelle ne correspond peut-être plus aux aspirations. Les différentes CHA* peuvent être consultées en fonction des demandes et de l'expertise de chacune (droits, instruction, accessibilité, aides techniques, emploi direct...).",
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
      <ModalContent style={customModalStyles.modalContent}>
        <ModalHeader style={customModalStyles.modalHeader}>
          {header}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody style={customModalStyles.modalBody}>
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

          <Text
            color={"#1D7235"}
            fontSize={"1.3rem"}
            fontWeight={"bold"}
        borderRadius={"15px"} 
        border={"1px solid transparent"}
        boxShadow={"2px 2px 6px "} 
        padding={"7px 30px"}
        top={{base:"7rem",md:"8rem",sm:"7rem"}} 
        m={"auto"}
        pos={"absolute"}
          >{`${currentIndex + 1} / ${texts.length}`}</Text>
        </ModalBody>

        <ModalFooter display={"flex"} gap={"10px"}>
        {currentIndex > 0 && (
            <Button
              padding={{ base: "30px 30px", sm: "30px 40px" }}
              onClick={handlePrev}
              color="white"
              backgroundColor="#32C35B"
              _hover={{ bg: "#1D7235" }}
            >
              Précédent
            </Button>
          )}

          {currentIndex < texts.length - 1 && (
            <Button
              padding={{ base: "30px 30px", sm: "30px 40px" }}
              onClick={handleNext}
              color="white"
              backgroundColor="#32C35B"
              _hover={{ bg: "#1D7235" }}
            >
              Suivant
            </Button>
            )}
  
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function Instruction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [isPrestataireOpen, setPrestataireOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#D4F4DD";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
                    { label: "Pris En Contes", href: "./pris-en-contes " },
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
                  <Button variant="outline"m={"auto"} padding={"30px 40px"} onClick={onDrawerClose}>
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
            xl: "90%",
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
          padding={"10px"}
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
            Enseignement/Formation
          </Heading>

          <UnorderedList
            fontSize={{
              sm: "1.4rem",
              lg: "1.7rem",
              xl:"1.8rem",
              base: "1.25rem",
            }}
            textAlign={"justify"}
            spacing={4}
            padding={"10px"}
          >
            <ListItem>
              SEGPA* : Section d'Enseignement Général et Professionnel Adapté
            </ListItem>
            <ListItem>IME* : Institut Médicalisé pour Enfant</ListItem>
            <ListItem>
              ULIS* : Unité Localisée pour l'Inclusion Scolaire (école, collège,
              lycée général ou professionnel)
            </ListItem>
          </UnorderedList>
          <Button
            padding={"35px 60px"}
            fontSize={"1.3rem"}
            color="white"
            backgroundColor="#32C35B"
            onClick={() => setPrestataireOpen(true)}
            _hover={{ bg: "#1D7235" }}
          >
            En savoir plus
          </Button>
        </Flex>
      </Box>
      <CustomTextModal
        isOpen={isPrestataireOpen}
        onClose={() => setPrestataireOpen(false)}
        header="Enseignement/Formation"
        texts={modalTexts}
        
      />
    </>
  );
}

export default Instruction;
