import Header from "../../Header";
import { useState, useEffect } from "react";
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
import { HamburgerIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/navbar.css";

const MotionLink = motion(Link);

function Pch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);
  const [isPrestataireOpen, setPrestataireOpen] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  const images = [
    "/public/Pch-1.png",
    "/path/to/image2.jpg",
    "/path/to/image3.jpg",
    "/path/to/image4.jpg",
  ];

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

  const modalTexts = [
    "L'État a toujours considéré la personne choisissant la PCH* comme un particulier devant appliquer à son personnel la convention collective du particulier-employeur. Le principe est louable, mais la PCH* devrait au moins prendre en compte les obligations financières liées au droit du travail et à ladite convention. Par exemple, l'ancienneté, les majorations salariales pour les jours fériés, les indemnités en cas de décès de l'employeur ou de licenciement, et la surveillance médicale du salarié sont autant de points qui mettent la personne handicapée en infraction.",
    " Sans préavis ni considération des conséquences, le conseil départemental applique la nouvelle loi de la sécurité sociale, remplaçant la déclaration au forfait par la déclaration au réel. Pour mieux comprendre, il était auparavant possible de calculer ses cotisations patronales sur la base du SMIC, quel que soit le salaire versé. Désormais, les cotisations patronales sont calculées sur l'intégralité du salaire, améliorant ainsi les prestations sociales du salarié.",
    " La personne handicapée n'est pas contre l'amélioration de la couverture sociale de son personnel, bien au contraire. Mais peut-elle le faire ? NON ! Le Conseil Départemental refuse de prendre en compte l'augmentation nécessaire de la PCH* (une augmentation de 3 à 4 € du coût horaire). Résultat ? La personne handicapée reste en infraction : le Conseil Départemental force le bénéficiaire de la PCH* à ne pas respecter la convention, le mettant également en difficulté avec l'URSSAF, organisme qui valide le versement de la PCH*.",
    " Le collectif Les Handignés a dénoncé la politique du handicap en constante régression, exprimant leur ras-le-bol de subir les conséquences de la crise économique, qui a bon dos, et dénonçant la situation qui pousse plusieurs millions de personnes handicapées à vivre en dessous du seuil de pauvreté en France. Les conseils départementaux se protègent en affirmant qu'ils appliquent la loi et qu'il suffit de passer du mode direct au mode prestataire ou mandataire. Dans le contexte de crise économique, il devient difficile de comprendre cette situation en comparant les tarifs des différents modes.",
    " Vivre Debout rejoint le collectif des Handignés et l'ENIL* au Parlement Européen pour rappeler aux élus les lois en vigueur.",
  ];

  const CustomTextModal = ({ isOpen, onClose, header, texts, currentIndex, setCurrentIndex }) => (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent style={customModalStyles.modalContent}>
        <ModalHeader style={customModalStyles.modalHeader}>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody style={customModalStyles.modalBody}>
          <IconButton
            icon={<ArrowBackIcon />}
            onClick={() => setCurrentIndex(currentIndex > 0 ? currentIndex - 1 : texts.length - 1)}
            mb={2}
          />
          <Text mt="30px">{texts[currentIndex]}</Text>
          <IconButton
            icon={<ArrowForwardIcon />}
            onClick={() => setCurrentIndex(currentIndex < texts.length - 1 ? currentIndex + 1 : 0)}
            mt={2}
          />
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} color="white" _hover={{ bg: "#AB87FF" }} backgroundColor="#AB87BF">
            Fermer
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );

  const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
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
            lg: "1fr 1fr ",
            xl: "1fr 1fr",
          }}
          height="100%"
          templateRows="auto"
          pos="relative"
          top={{ base: "10rem", sm: "10rem", md: "1.5rem" }}
          gap={"20px"}
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
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#EEE7FF"
            >
              <Heading textAlign={"center"} fontSize="2em" mb={4}>
                PCH/Convention
              </Heading>
              <Text fontSize="1.2em" mb={4}>
                La Prestation de Compensation du Handicap (PCH) est une aide personnalisée destinée à financer les besoins liés à la perte d'autonomie des personnes en situation de handicap.
              </Text>
              <Button
                _hover={{ bg: "#AB87FF" }}
                backgroundColor="#AB87BF"
                color="white"
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
          <GridItem display="flex" justifyContent="center" alignItems="flex-end">
            <Flex
              as={motion.div}
              width={{
                base: "100%",
              }}
              height={{
                base: "fit-content",
              }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"
              borderRadius="0.75rem"
              padding={"10px"}
              whileHover={{ scale: 1.05 }}
              initial={{ y: "30rem" }}
              animate={{ y: "0rem" }}
              direction="column"
              cursor="pointer"
              bg="#EEE7FF"
              alignItems="center"
              justifyContent={{ base: "space-between", md: "space-around" }}
              alignSelf={"center"}
            >
              <Box w={{ base: "100%", md: "100%" }} maxW="600px">
                <Slider {...settings}>
                  <Box>
                    <img src="../public/Pch-1.png" alt="Image 1" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-2.png" alt="Image 2" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-3.png" alt="Image 3" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-4.png" alt="Image 4" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-5.png" alt="Image 5" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-6.png" alt="Image 6" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../public/Pch-7.png" alt="Image 7" style={{ width: "100%" }} />
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
