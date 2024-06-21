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
   
      backgroundColor: "#FFF0F5",
    },
    modalHeader: {
      fontWeight: "bold",
      fontSize: "1.8em",
    },
    modalBody: {
      fontSize: "1.1rem",
      textAlign: "justify",
      padding:"7px"
    },
  };

  // Example of adjusting font sizes based on screen size
const screenSize = window.innerWidth; // Get the current window width

  if (screenSize < 768) { // md screens (Bootstrap md breakpoint)
  customModalStyles.modalHeader.fontSize = "2em";
  customModalStyles.modalBody.fontSize = "1.1rem";
  customModalStyles.modalContent.height="90vh"
}


if (screenSize > 768) { // md screens (Bootstrap md breakpoint)
  customModalStyles.modalHeader.fontSize = "2em";
  customModalStyles.modalBody.fontSize = "1.2rem";
  customModalStyles.modalContent.height="90vh"
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
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Text>{contents[currentIndex].text}</Text>
              </MotionBox>
            </AnimatePresence>

            <Text fontWeight={"bold"} top={"7"} left={"5"} pos={"absolute"}>{`${
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
            <Button
              padding={"30px 60px"}
              onClick={onClose}
              color="white"
              _hover={{ bg: "#AE004B" }}
              backgroundColor="#FD0873"
            >
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
                fontSize={{ lg: "3.5rem", base: "2.5rem", sm: "3.2rem" }}
                textTransform="uppercase"
              >
                Prestataire
              </Heading>
              <Text
                fontSize={{
                  sm: "1.6rem",
                  lg: "1.7rem",
                  xl: "1.8rem",

                  base: "1.5rem",
                }}
                textAlign={"center"}
              >
                Vous êtes l'employeur de l'intervenant, et l'organisme
                prestataire...
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
                as="h2"
                size="lg"
                textAlign="center"
                textTransform="uppercase"
                fontSize={{ lg: "2.8rem", base: "2.5rem" }}
              >
                mandataire
              </Heading>
              <Text
                fontSize={{
                  sm: "1.6rem",
                  lg: "1.7rem",
                  xl: "1.8rem",

                  base: "1.5rem",
                }}
                padding={"10px"}
              >
                L'association ou l'entreprise mandataire s'occupe...
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
                as="h2"
                size="lg"
                textAlign="center"
                textTransform="uppercase"
                fontSize={{ lg: "2.8rem", base: "2.5rem" }}
                
              >
                emploi direct
              </Heading>
              <Text
                fontSize={{
                  sm: "1.6rem",
                  lg: "1.7rem",
                  xl: "1.8rem",

                  base: "1.5rem",
                }}
                padding={"10px"}
                textAlign={"center"}
              >
                Vous êtes l'employeur direct de votre salarié...
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
              text: "Bien que doté d'un agrément qualité, le personnel ne l'est pas pour autant suite à l'expérience des personnes avec handicap (transferts, assistance ventilation respiratoire...).Le changement d’intervenants est fréquent. Et si c'est une obligation qu'il ait suivi une formation de niveau 1 aux premiers secours, il n'est pas autorisé à préparer les médicaments.Proposition d'un planning des interventions qui reste figé : tout projet de dernière minute ou risquant de dépasser les contraintes horaires est irréalisable, à moins de demander une modification suffisamment au préalable afin que la structure puisse organiser l'emploi de son personnel.Les horaires d'intervention oscillent en général entre 8h 00 et 20h 00.C'est le mode le plus onéreux et le Conseil Départemental conseille de l’utiliser...",
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
