import Header from "../../Header";
import '../../styles/footer.css';
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
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
  Grid,
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
import { ArrowBackIcon, ArrowForwardIcon, HamburgerIcon, ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "../../styles/navbar.css";
import Slider from "react-slick";

const MotionLink = motion(Link);

function Instruction() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
 

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const content = [
    "Après vous avoir énoncé les prises en charges, votre enfant obtient peut-être une AESH* (Accompagnant-e-s d’Elèves en Situation de Handicap) pour l'accompagner au cours de sa maternelle. La classe comprend que le copain (copine) porte un handicap et cela peut s'avérer une réussite car l'école devient ainsi le premier lieu d'apprentissage à d'accueil de la différence. Les bienfaits pourraient être très importants si on pouvait pérenniser les AESH* et leur attribuer davantage d'heures auprès de l'enfant.             Personne ne se rebelle : ni l'enfant, trop jeune pour comprendre, ni les parents à qui on a démontré la voie générale dissuasive et qui font le deuil de la scolarité dont on aurait rêvé pour son enfant.", 
    
    "En cours préparatoire (CP), vous a-t-on laissé le choix ? La majorité des enfants handicapés sont orientés vers une section ULIS, une classe spécialement aménagée (maximum 12 élèves dans les établissements publics). Bien qu'ils partagent certaines activités comme la musique, le sport, et les sciences avec les autres élèves, ils restent souvent 'à l'écart'. Cela permet un suivi adapté à leurs capacités tout en restant dans le milieu scolaire ordinaire.       En section ULIS*, il suffit d'interroger les professeurs des écoles, dont c'est souvent la première affectation pour la plupart une fois diplômés, pour comprendre que l'autonomie de l'enfant est déjà compromise. En primaire, il y a peu de chances que votre enfant sache lire et écrire car cela relève de la mission impossible lorsqu'il s'agit d'instruire un groupe, 12 élèves en moyenne, composé de troubles différents mais dont le QI* peut être très satisfaisant.     ",

      "      Au sein de l'IME*, on rassure : votre enfant est accueilli dans les meilleures conditions avec pour preuves à l'appui, un projet d'établissement, un projet individualisé... mais il suffit de s'entretenir avec le personnel (Educateur spécialisé, Aide Médico Psychologique...) pour comprendre que l'IME* est en sous-effectif avec un personnel prêt à craquer, financement oblige.            L'enfant devient inévitablement un assisté : il dépend physiquement et subit. Dans un IME*, apprendre à lire, à écrire ? Combien de parents ont-ils entendus Non, votre enfant n'a pas les capacités d'apprendre et combien de parents ont réussi malgré tout à faire en sorte que ce même enfant apprenne à lire, à écrire : les bases de l'autonomie.",
      

    "  L  'autonomie s'apprend dès le plus jeune âge. Optez pour le bien-être de votre enfant en visant pour lui une évolution à son rythme dans l'apprentissage. Nombreuses sont les familles qui ont découvert les cours par correspondance : le choix est large. Il faut choisir celui qui permettra à l’enfant de prendre confiance, d’être capable d’appeler par tél ou par mail pour dire stop, je n’ai pas compris ou n’arrive pas à résoudre tel problème... et d’être immédiatement renseigné.      Trop de parents se trompent, pensant qu’ils n’ont pas les connaissances ou même le temps : un bon cours par correspondance ne demande pas au parent d’être un professeur. Souvent, le cours par correspondance dégage du temps pour l’enfant : son rythme est respecté, il peut même s’ouvrir à des activités de loisirs. Il faut se battre pour demander le financement des cours à la MDPH* et si l’enfant a besoin d’un assistant de vie compte tenu d’un très lourd handicap, la demande de la PCH* est possible. Ce n’est pas la MDPH* qui proposera cette alternative il faudra argumenter pour l’obtenir. ",

    "Vivre Debout est disponible pour entendre, comprendre chaque cas et vous conseiller dans la rédaction et dans l'appui du projet de vie de votre enfant présenté à la MDPH*. La prise en charge actuelle ne correspond peut-être plus aux aspirations. Les différentes CHA* peuvent être consultées en fonction des demandes et de l'expertise de chacune (droits, instruction, accessibilité, aides techniques, emploi direct...)."

    // Ajoutez d'autres contenus ici si nécessaire
  ];

  const ModalWithNavigation = ({ isOpen, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? content.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === content.length - 1 ? 0 : prevIndex + 1));
    };

    return (
      <Slider {...settings}>

    
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
          backgroundColor="#FFF0F5"
        >
          <ModalHeader fontWeight="bold" fontSize="2em">
            Vigilance et Autonomie dans l'Éducation
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody textAlign="justify" fontSize="1.1rem" position="relative">
            <IconButton
              icon={<ArrowLeftIcon />}
              onClick={handlePrevious}
              position="absolute"
              left="10px"
              top="50%"
              transform="translateY(-50%)"
              backgroundColor="#FFF0F5"
              _hover={{ bg: "#E0D0E5" }}
              zIndex="10"
            />
            <UnorderedList spacing={3} listStyleType="circle" mt="30px">
              <ListItem>{content[currentIndex]}</ListItem>
            </UnorderedList>
            <IconButton
              icon={<ArrowRightIcon />}
              onClick={handleNext}
              position="absolute"
              right="10px"
              top="50%"
              transform="translateY(-50%)"
              backgroundColor="#FFF0F5"
              _hover={{ bg: "#E0D0E5" }}
              zIndex="10"
            />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="white" _hover={{ bg: "#AB87FF" }} backgroundColor="#AB87BF">
              Fermer
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Slider>
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
            <Flex>{/* Autres contenus de l'en-tête */}</Flex>
          </Header>
        )}
      </Flex>
    <Grid
           templateColumns={{
       base: "1fr"
       
        }}
            height="100%"
          templateRows="auto"
          gap={{xl:"5rem",lg:"5rem",md:10,base:"5rem"}}
          pos="relative"
         
          top={{ base: "6rem", sm: "4rem", md: "4rem",lg:"4rem" }}
        >
         
    
        <GridItem display="flex" justifyContent="center" alignItems="center">
          <Flex
            as={motion.div}
        
               width={{  base: "97.5vw",lg:"89vw"}}
              textAlign="justify"
              justifyContent="space-around"
              height={{ base: "70vh", sm: "70vh", md: "50vh", lg: "50vh", xl: "65vh" }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#EEE7FF"
          >
            <Heading
              textAlign={"center"}
              fontSize={{
                lg: "2.8em",
                md: "2.4rem",
                xl: "3rem",
                sm: "2.4rem",
                base: "2.4rem",
              }}
            >
              L'INSTRUCTION
            </Heading>
            <UnorderedList
              spacing={3}
              listStyleType="circle"
              pos="relative"
              mt="30px"
              fontSize={{
                md: "1.3rem",
                lg: "1.3rem",
                xl: "1.5rem",
                base: "1.1rem",
                sm: "1.25rem",
              }}
            >
              <ListItem>SEGPA : Section d'Enseignement Général et Professionnel Adapté</ListItem>
              <ListItem>IME : Institut Médico-Éducatif</ListItem>
              <ListItem>ULIS : Unité Localisée pour l'Inclusion Scolaire (école, collège, lycée général ou professionnel)</ListItem>
            </UnorderedList>
            <Button padding={"40px"} onClick={onOpen} >
              En Savoir plus !
            </Button>
          </Flex>
        </GridItem>
     </Grid>
      <ModalWithNavigation isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default Instruction;
