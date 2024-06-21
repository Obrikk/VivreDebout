import Header from "../../Header";
import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {
  Flex,
  Box,
  Grid,
  GridItem,
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
import {
  HamburgerIcon,
  ArrowBackIcon,
  ArrowForwardIcon,
} from "@chakra-ui/icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NextArrow = ({ onClick }) => (
  <IconButton
    icon={< ArrowForwardIcon />}
    onClick={onClick}
    position="absolute"
    top="110%"
    right="10px"
    transform="translateY(-50%)"
    zIndex="1"
    backgroundColor="#AB87FF"
    color="white"
    _hover={{ bg: "#9260CC" }}
    borderRadius="50%"
  />
);

const PrevArrow = ({ onClick }) => (
  <IconButton
    icon={<ArrowBackIcon />}
    onClick={onClick}
    position="absolute"
    top="110%"
    left="10px"
    transform="translateY(-50%)"
    zIndex="1"
    backgroundColor="#AB87FF"
    color="white"
    _hover={{ bg: "#9260CC" }}
    borderRadius="50%"
  />
);

const settings = {
  dots: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const settingsImage = {
  dots: true,
  nextArrow: false,
  prevArrow: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const MotionLink = motion(Link);

function Pch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#BAF5FF";
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
      height: "95vh",
      backgroundColor: "#FFF0F5",
    },
    modalHeader: {
      fontWeight: "bold",
      fontSize: "1.8em",
    },
    modalBody: {
      textAlign: "justify",
      fontSize: "1.2rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
  };

  const screenSize = window.innerWidth; // Get the current window width
  if (screenSize < 768) {
    // md screens (Bootstrap md breakpoint)
    customModalStyles.modalHeader.fontSize = "2em";
    customModalStyles.modalBody.fontSize = "1.2rem";
    customModalStyles.modalContent.height = "90vh";
  }

  if (screenSize > 768) {
    // md screens (Bootstrap md breakpoint)
    customModalStyles.modalHeader.fontSize = "2em";
    customModalStyles.modalBody.fontSize = "1.3rem";
    customModalStyles.modalContent.height = "90vh";
  }

  const modalTexts = [
    "L'État a toujours considéré la personne choisissant la PCH* comme un particulier devant appliquer à son personnel la convention collective du particulier-employeur. Le principe est louable, mais la PCH* devrait au moins prendre en compte les obligations financières liées au droit du travail et à ladite convention. Par exemple, l'ancienneté, les majorations salariales pour les jours fériés, les indemnités en cas de décès de l'employeur ou de licenciement, et la surveillance médicale du salarié sont autant de points qui mettent la personne handicapée en infraction.",
    " Sans préavis ni considération des conséquences, le conseil départemental applique la nouvelle loi de la sécurité sociale, remplaçant la déclaration au forfait par la déclaration au réel. Pour mieux comprendre, il était auparavant possible de calculer ses cotisations patronales sur la base du SMIC, quel que soit le salaire versé. Désormais, les cotisations patronales sont calculées sur l'intégralité du salaire, améliorant ainsi les prestations sociales du salarié.",
    " La personne handicapée n'est pas contre l'amélioration de la couverture sociale de son personnel, bien au contraire. Mais peut-elle le faire ? NON ! Le Conseil Départemental refuse de prendre en compte l'augmentation nécessaire de la PCH* (une augmentation de 3 à 4 € du coût horaire). Résultat ? La personne handicapée reste en infraction : le Conseil Départemental force le bénéficiaire de la PCH* à ne pas respecter la convention, le mettant également en difficulté avec l'URSSAF, organisme qui valide le versement de la PCH*.",
    " Le collectif Les Handignés a dénoncé la politique du handicap en constante régression, exprimant leur ras-le-bol de subir les conséquences de la crise économique, qui a bon dos, et dénonçant la situation qui pousse plusieurs millions de personnes handicapées à vivre en dessous du seuil de pauvreté en France. Les conseils départementaux se protègent en affirmant qu'ils appliquent la loi et qu'il suffit de passer du mode direct au mode prestataire ou mandataire. Dans le contexte de crise économique, il devient difficile de comprendre cette situation en comparant les tarifs des différents modes.",
    " Vivre Debout rejoint le collectif des Handignés et l'ENIL* au Parlement Européen pour rappeler aux élus les lois en vigueur.",
  ];

  const CustomTextModal = ({
    isOpen,
    onClose,
    header,
    texts,
    currentIndex,
    setCurrentIndex,
  }) => {
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    };

    const handlePrev = () => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + texts.length) % texts.length
      );
    };

    const MotionBox = motion(Box);

    return (
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent style={customModalStyles.modalContent}>
          <ModalHeader fontWeight="bold" fontSize="2em">
            {header}
            <Text
              fontSize={"1.3rem"}
              fontWeight={"bold"}
              top={"6"}
              left={"1"}
              pos={"absolute"}
            >
              {currentIndex + 1} / {texts.length}
            </Text>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody style={customModalStyles.modalBody}>
            <AnimatePresence mode="wait">
              <MotionBox
                key={currentIndex} // Ensure unique key for re-rendering
                px={4}
                mt="30px"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
              >
                <Text>{texts[currentIndex]}</Text>
              </MotionBox>
            </AnimatePresence>
          </ModalBody>
          <ModalFooter
            bottom={"0"}
            pos={"absolute"}
            display={"flex"}
            gap={"10px"}
          >
            <Button
              onClick={handlePrev}
              color="white"
              _hover={{ bg: "#03A6C2" }}
              backgroundColor="#00D9FF"
              padding={{base:"30px 30px",sm:"30px 40px"}}
            >
              Précédent
            </Button>
        
            <Button
              onClick={handleNext}
              color="white"
              _hover={{ bg: "#03A6C2" }}
              backgroundColor="#00D9FF"
              padding={{base:"30px 30px",sm:"30px 40px"}}
            >
              Suivant
            </Button>
            <Button
              padding={{base:"30px 30px",sm:"30px 40px"}}
              onClick={onClose}
              color="white"
              _hover={{ bg: "#03A6C2" }}
              backgroundColor="#00D9FF"
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
            lg: " 1fr",
            xl: "1fr 1fr",
          }}
          height="100%"
          templateRows="auto"
          gap={{ xl: "5rem", lg: "5rem", md: 10, base: "5rem" }}
          pos="relative"
          top={{ base: "6rem", sm: "10rem", md: "10rem", lg: "4rem" }}
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
                fontSize={{ lg: "3.5rem", base: "2.3rem", sm: "3.2rem" }}
              >
                PCH/Convention
              </Heading>
              <Text
                width={"95%"}
                fontSize={{
                  sm: "2rem",
                  lg: "1.3rem",
                  xl: "1.5rem",
                
                  base: "1.35rem",
                }}
                textAlign="justify"
              >
                La Prestation de Compensation du Handicap (PCH) est une aide
                personnalisée destinée à financer les besoins liés à la perte
                d'autonomie des personnes en situation de handicap.
              </Text>
              <Button
                padding={"45px 60px"}
                fontSize={"1.3rem"}
                color="white"
                backgroundColor="#13D3F5"
                _hover={{ bg: "#9260CC" }}
                onClick={onOpen}
              >
                En savoir plus
              </Button>
              <CustomTextModal
                isOpen={isOpen}
                onClose={onClose}
                header="PCH/Convention"
                texts={modalTexts}
                currentIndex={currentTextIndex}
                setCurrentIndex={setCurrentTextIndex}
              />
            </Flex>
          </GridItem>

          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex
              as={motion.div}
              width={{ base: "97.5vw", lg: "89vw", xl: "40vw" }}
              textAlign="justify"
              display="flex"
              justifyContent="center"
              alignItems="center"
              height={{
                base: "60vh",
                sm: "50vh",
                md: "50vh",
                lg: "50vh",
                xl: "65vh",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              bg={"black"}
              marginBottom={{
                base: "3em",
                sm: "3em",
                md: "0",
                lg: "0",
                xl: "0",
              }}
            >
              <Box
                padding={"10px"}
                width={{
                  base: "90vw",
                  sm: "65vw",
                  md: "65vw",
                  lg: "60vw",
                  xl: "40vw",
                }}
                display="flex"
                justifyContent="center"
              >
                <Slider style={{ width: "100%" }}>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-1.png"
                      alt="Image 1"
                      style={{ width: "100%", position: "relative" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-2.png"
                      alt="Image 2"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-3.png"
                      alt="Image 3"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-4.png"
                      alt="Image 4"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-5.png"
                      alt="Image 5"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-6.png"
                      alt="Image 6"
                      style={{ width: "100%" }}
                    />
                  </Box>
                  <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                  >
                    <img
                      src="../public/Pch-7.png"
                      alt="Image 7"
                      style={{ width: "100%" }}
                    />
                  </Box>
                </Slider>
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default Pch;
