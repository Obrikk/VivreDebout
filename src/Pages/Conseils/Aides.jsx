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
  position,
} from "@chakra-ui/react";
import { ArrowBackIcon, ArrowLeftIcon, HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "../../styles/navbar.css";

const MotionLink = motion(Link);

function Aides() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
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
      justifyContent: "center",
      textAlign: "center",
      position: "fixed",
      height: "85vh",
      backgroundColor: "#FFF0F5",
    },
    modalHeader: {
      fontWeight: "bold",
      fontSize: "2em",
    },
    modalBody: {
      textAlign: "justify",
      fontSize: "1.1rem",
    },
  };

  const CustomTextModal = ({ isOpen, onClose, header, body }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={customModalStyles.modalContent}>
          <ModalHeader style={customModalStyles.modalHeader}>{header}</ModalHeader>
          <ModalCloseButton />
          <ModalBody style={customModalStyles.modalBody}>
            <Text mt="30px">{body}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} color="white" _hover={{ bg: "#AB87FF" }} backgroundColor="#AB87BF">
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
            <Flex>{/* Other header content */}</Flex>
          </Header>
        )}
      </Flex>
      <Box w="100%" height="100%" display="flex" flexDirection="column" alignItems="center">
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
                "2xl": "80%",
                md: "95%",
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
              padding="1.5rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
              alignItems="center"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
                textAlign="center"
              >
                Prestataire
              </Heading>
              <Text
                fontSize={{
                  lg: "1.4rem",
                  md: "1.4rem",
                  sm: "1.2rem",
                  base: "1.1rem",
                }}
                textAlign="center"
                justifyContent="center"
              >
                Vous pouvez faire appel à une association ou une entreprise privée prestataire...
              </Text>
              <Button
                bg="#AB87FF"
                _hover={{ bg: "rgba(171, 135, 255, 0.6)" }}
                color="white"
                fontSize={{
                  lg: "1.3rem",
                  md: "1.1rem",
                  sm: "1rem",
                  base: "1rem",
                }}
                padding={{
                  lg: "1.5rem",
                  md: "1.5rem",
                  sm: "1.5rem",
                  base: "1.4rem",
                }}
                height={{
                  lg: "3rem",
                  md: "3rem",
                  sm: "3rem",
                  base: "3rem",
                }}
                width={{
                  lg: "15rem",
                  md: "15rem",
                  sm: "15rem",
                  base: "15rem",
                }}
                mt={{
                  lg: "2rem",
                  md: "2rem",
                  sm: "1rem",
                  base: "0.5rem",
                }}
                onClick={() => setPrestataireOpen(true)}
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
                md: "95%",
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
              padding="1.5rem"
              whileHover={{ scale: 1.05 }}
              initial={{ y: "-20rem" }}
              animate={{ y: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
              alignItems="center"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
                textAlign="center"
              >
                Mandataire
              </Heading>
              <Text
                fontSize={{
                  lg: "1.4rem",
                  md: "1.4rem",
                  sm: "1.2rem",
                  base: "1.1rem",
                }}
                textAlign="center"
                justifyContent="center"
              >
                Vous pouvez faire appel à une association ou une entreprise privée mandataire...
              </Text>
              <Button
                bg="#AB87FF"
                _hover={{ bg: "rgba(171, 135, 255, 0.6)" }}
                color="white"
                fontSize={{
                  lg: "1.3rem",
                  md: "1.1rem",
                  sm: "1rem",
                  base: "1rem",
                }}
                padding={{
                  lg: "1.5rem",
                  md: "1.5rem",
                  sm: "1.5rem",
                  base: "1.4rem",
                }}
                height={{
                  lg: "3rem",
                  md: "3rem",
                  sm: "3rem",
                  base: "3rem",
                }}
                width={{
                  lg: "15rem",
                  md: "15rem",
                  sm: "15rem",
                  base: "15rem",
                }}
                mt={{
                  lg: "2rem",
                  md: "2rem",
                  sm: "1rem",
                  base: "0.5rem",
                }}
                onClick={() => setMandataireOpen(true)}
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
                md: "95%",
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
              padding="1.5rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#FFC9E1"
              alignItems="center"
            >
              <Heading
                fontSize={{
                  lg: "2.8em",
                  md: "2.4rem",
                  xl: "2.5rem",
                  sm: "2.4rem",
                  base: "2.4rem",
                }}
                textAlign="center"
              >
                Emploi Direct
              </Heading>
              <Text
                fontSize={{
                  lg: "1.4rem",
                  md: "1.4rem",
                  sm: "1.2rem",
                  base: "1.1rem",
                }}
                textAlign="center"
                justifyContent="center"
              >
                Vous pouvez employer directement une personne...
              </Text>
              <Button
                bg="#AB87FF"
                _hover={{ bg: "rgba(171, 135, 255, 0.6)" }}
                color="white"
                fontSize={{
                  lg: "1.3rem",
                  md: "1.1rem",
                  sm: "1rem",
                  base: "1rem",
                }}
                padding={{
                  lg: "1.5rem",
                  md: "1.5rem",
                  sm: "1.5rem",
                  base: "1.4rem",
                }}
                height={{
                  lg: "3rem",
                  md: "3rem",
                  sm: "3rem",
                  base: "3rem",
                }}
                width={{
                  lg: "15rem",
                  md: "15rem",
                  sm: "15rem",
                  base: "15rem",
                }}
                mt={{
                  lg: "2rem",
                  md: "2rem",
                  sm: "1rem",
                  base: "0.5rem",
                }}
                onClick={() => setDirectOpen(true)}
              >
                En savoir plus
              </Button>
            </Flex>
          </GridItem>
        </Grid>
      </Box>

      <CustomTextModal
        isOpen={isPrestataireOpen}
        onClose={() => setPrestataireOpen(false)}
        header="Avantages"
        body="Vous n'êtes pas l'employeur et êtes totalement déchargé des démarches administratives. Vous payez la facture des prestations.
Présentation d'un personnel qui intervient chez vous, et dont les remplacements en cas de maladie, congés sont assurés.
Il s'agit, en général, d'un personnel efficace pour le maintien de l'hygiène du logement, courses de proximité, préparation et aide à la prise du repas."
      />

      <CustomTextModal
        isOpen={isMandataireOpen}
        onClose={() => setMandataireOpen(false)}
        header="Avantages"
        body="Vous n'êtes qu'en partie l'employeur : l'entreprise ou l'association d'aide à la personne sélectionne votre personnel, assure ses remplacements en cas de maladie, congés, vous décharge de toutes les démarches administratives à votre nom et pour votre compte.
Ce mode est moins onéreux que le mode prestataire. Néanmoins vous payez les salaires et en sus les frais de gestion du prestataire de service.
Ce mode permet plus de souplesse : vous bénéficiez d'un(e) auxiliaire de vie attitré(e) qui saura mieux s'adapter à vos exigences. Le personnel intervient chez vous aux horaires fixés à votre convenance en accord avec ce dernier, pourvu que vous respectiez le code du travail (durée, majoration de salaire...)"
      />

      <CustomTextModal
        isOpen={isDirectOpen}
        onClose={() => setDirectOpen(false)}
        header="Avantages"
        body="Vous êtes décisionnaire de recruter et d'embaucher qui vous voulez, agencez votre emploi du temps à votre convenance, pourvu que vous respectiez le code du travail. Votre personnel dépend de la convention collective du particulier-employeur.
Votre auxiliaire de vie attitré(e) connait vos exigences et permet plus de souplesse à la réalisation de vos projets (maîtrise des aides techniques, transferts, conduite voiture, ...).
C'est le mode le moins onéreux, le plus utilisé par les grands handicapés."
      />
    </>
  );
}

export default Aides;
