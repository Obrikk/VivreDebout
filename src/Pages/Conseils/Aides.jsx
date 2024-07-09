import Header from "../../Header";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  Grid,
  GridItem,
  Heading,
  Text,
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
  Link,
} from "@chakra-ui/react";

import { motion, AnimatePresence } from "framer-motion";
import "../../styles/navbar.css";
import { HamburgerIcon } from "@chakra-ui/icons";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MotionLink = motion(Link);

function Aides() {
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const [isPrestataireOpen, setPrestataireOpen] = useState(false);
  const [isMandataireOpen, setMandataireOpen] = useState(false);
  const [isDirectOpen, setDirectOpen] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();

    document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#FF87BB";

        document.getElementById("root").style.fontFamily = "Tahoma";
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
  
  const MotionBox = motion(Box);

  const CustomTextModal = ({ isOpen, onClose, header, contents }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % contents.length);
    };

    const handlePrev = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? contents.length - 1 : prevIndex - 1
      );
    };

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={customModalStyles.modalContent}>
          <ModalHeader style={customModalStyles.modalHeader}>
            {contents[currentIndex].title}
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
                <Text>{contents[currentIndex].text}</Text>
              </MotionBox>
            </AnimatePresence>

            <Text padding={"7px 30px"}   boxShadow={"2px 2px 6px "} borderRadius={"15px"} border={"1px solid transparent"}  top={{base:"7rem",md:"8rem",sm:"7rem"}}  m={"auto"} pos={"absolute"} color={"#AE004B"} fontWeight={"bold"} >{`${
              currentIndex + 1
            } / ${contents.length}`}</Text>
          </ModalBody>
          <ModalFooter
            bottom={"0"}
            pos={"absolute"}
            display={"flex"}
            gap={"10px"}
          >
            {currentIndex === 0 && (
              <Button
                padding={"30px 60px"}
                onClick={handleNext}
                color="white"
                backgroundColor="#FD0873"
                _hover={{ bg: "#AE004B" }}
              >
                Suivant
              </Button>
            )}
            {currentIndex === 1 && (
              <Button
                padding={"30px 60px"}
                onClick={handlePrev}
                color="white"
                backgroundColor="#FD0873"
                _hover={{ bg: "#AE004B" }}
              >
                Précédent
              </Button>
            )}
        
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
                      whileTap={{ animation: "fillAnimation 1.5s forwards" }}
                    
                    >
                      {item.label}
                    </MotionLink>
                  ))}
                </DrawerBody>
                <DrawerFooter>
                  <Button variant="outline" m={"auto"} padding={"30px 45px"} onClick={onDrawerClose}>
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
        >
          <GridItem display="flex" justifyContent="center" alignItems="center">
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
              padding={"10px"}
            >
              <Heading
                fontSize={{ lg: "2.5rem", xl:"2.8rem", base: "2.5rem",sm:"2.9rem" }}
                textTransform="uppercase"
              >
                Prestataire
              </Heading>
              <Text
                fontSize={{
                  sm: "2rem",
                  lg: "1.4rem",
                
  
                  base: "1.5rem",
                }}
                textAlign={"center"}
              >
              L'employeur est l'agence prestataire qui missionne les auxiliaires de vie chez leurs clients en situation de handicap
              </Text>
              <Button
                padding={"30px 60px"}
                fontSize={"1.3rem"}
                color="white"
                backgroundColor="#FD0873"
                _hover={{ bg: "#AE004B" }}
                onClick={() => {
                  setPrestataireOpen(true);
                }}
                
              >
                Lire plus
              </Button>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex
              as={motion.div}
              width={{
                lg: "97%",

                md: "80%",
                sm: "90%",
                xl: "90%",
                base: "93%",
              }}
              textAlign="center"
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
              padding={"10px"}
            >
              <Heading
                as="h2"
                size="lg"
                textAlign="center"
                textTransform="uppercase"
                   fontSize={{ lg: "2.5rem", xl:"2.8rem", base: "2.5rem",sm:"2.9rem" }}
              >
                mandataire
              </Heading>
              <Text
                fontSize={{
                  sm: "2rem",
                  lg: "1.4rem",
                
                    
                  base: "1.5rem",
                }}
                padding={"10px"}
              >
                L'employeur est la personne en situation de handicap mais toutes les formalités administratives sont faites par une agence mandataire (recrutement, vacances, congés etc)
              </Text>
              <Button
                fontSize={"1.3rem"}
                padding={"30px 60px"}
                color="white"
                backgroundColor="#FD0873"
                _hover={{ bg: "#AE004B" }}
                onClick={() => {
                  setMandataireOpen(true);
                }}
             
              >
                Lire plus
              </Button>
            </Flex>
          </GridItem>
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex
              as={motion.div}
              width={{
                lg: "97%",

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
              padding={"10px"}
            >
              <Heading
                as="h2"
                size="lg"
                textAlign="center"
                textTransform="uppercase"
            fontSize={{ lg: "2.5rem", xl:"2.8rem", base: "2.5rem",sm:"2.9rem" }}
                
              >
                emploi direct
              </Heading>
              <Text
                fontSize={{
                  sm: "2rem",
                  lg: "1.5rem",
               
  
                  base: "1.5rem",
                }}
                padding={"10px"}
                textAlign={"center"}
              >
       L'employeur est la personne en situation de handicap et elle doit s'occuper de toutes les formalités administratives.
              </Text>
              <Button
                fontSize={"1.3rem"}
                padding={"30px 60px"}
                color="white"
               
                onClick={() => {
                  setDirectOpen(true);
                }}
                backgroundColor="#FD0873"
                _hover={{ bg: "#AE004B" }}
              >
                Lire plus
              </Button>
            </Flex>
          </GridItem>
        </Grid>

        {/* Modals */}
        <CustomTextModal
          isOpen={isPrestataireOpen}
          onClose={() => setPrestataireOpen(false)}
          header="Mode prestataire"
          contents={[
            {
              title: "Avantages",
              text: "Vous n'êtes pas l'employeur et êtes totalement déchargé des démarches administratives. Vous payez la facture des prestations. Présentation d'un personnel qui intervient chez vous, et dont les remplacements en cas de maladie, congés sont assurés. Il s'agit, en général, d'un personnel efficace pour le maintien de l'hygiène du logement, courses de proximité, préparation et aide à la prise du repas.",
            },
            {
              title: "Inconvéniants",
              text: "Bien que le personnel ait un agrément qualité, il n'a pas l'expérience nécessaire pour gérer les personnes handicapées (transferts, assistance respiratoire...). Les intervenants changent fréquemment. Même s'ils ont une formation de premiers secours de niveau 1, ils ne sont pas autorisés à préparer les médicaments. Le planning des interventions est fixe : les projets de dernière minute ou dépassant les horaires sont impossibles, sauf si une modification est demandée à l'avance pour que la structure s'organise. Les horaires d'intervention sont généralement de 8h à 20h. Ce mode est le plus coûteux et le Conseil Départemental le recommande...",
            },
            // Add more pages as needed
          ]}
        />
        <CustomTextModal
          isOpen={isMandataireOpen}
          onClose={() => setMandataireOpen(false)}
          header="Mode mandataire"
          contents={[
            {
              title: "Avantages",
              text: "Vous n'êtes qu'en partie l'employeur : l'entreprise ou l'association d'aide à la personne sélectionne votre personnel, assure ses remplacements en cas de maladie, congés, vous décharge de toutes les démarches administratives à votre nom et pour votre compte.Ce mode est moins onéreux que le mode prestataire. Néanmoins vous payez les salaires et en sus les frais de gestion du prestataire de service.Ce mode permet plus de souplesse : vous bénéficiez d'un(e) auxiliaire de vie attitré(e) qui saura mieux s'adapter à vos exigences. Le personnel intervient chez vous aux horaires fixés à votre convenance en accord avec ce dernier, pourvu que vous respectiez le code du travail (durée, majoration de salaire...)",
            },
            {
              title: "Inconvéniants",
              text: "Vous avez l’entière responsabilité juridique liée à votre qualité d’employeur donc le licenciement vous incombe.",
            },
            // Add more pages as needed
          ]}
        />
        <CustomTextModal
          isOpen={isDirectOpen}
          onClose={() => setDirectOpen(false)}
          header="Mode emploi direct"
          contents={[
            {
              title: "Avantages",
              text: "Vous êtes décisionnaire de recruter et d'embaucher qui vous voulez, agencez votre emploi du temps à votre convenance, pourvu que vous respectiez le code du travail. Votre personnel dépend de la convention collective du particulier-employeur.Votre auxiliaire de vie attitré(e) connait vos exigences et permet plus de souplesse à la réalisation de vos projets (maîtrise des aides techniques, transferts, conduite voiture, ...).C'est le mode le moins onéreux, le plus utilisé par les grands handicapés.",
            },
            {
              title: "Inconvéniants",
              text: "Vous êtes l'employeur à part entière : vous réalisez toutes les démarches administratives (contrat de travail, déclarations à l’Urssaf, établissement des bulletins de salaires). Rassurez-vous, le CESU* donne moins de fil à retordre en 3 clics sur le site internet.Le remplacement éventuel de l’intervenant pendant ses congés maladie ou vacances vous incombe.La rupture du contrat de travail (ex : hospitalisation de l’employeur, décès) entraîne des indemnités supplémentaires au même titre que le licenciement. Il existe, toutefois, la possibilité de souscrire une garantie facultative liée à la rupture du contrat.",
            },
            // Add more pages as needed
          ]}
        />
      </Box>
    </>
  );
}

export default Aides;
