import Header from "../../Header.jsx";
import { useEffect, useState } from "react";
import {
  Flex,
  Box,
  IconButton,
  Drawer,
  Heading,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
  Text,
  Button,
  useDisclosure,
  Grid,
  GridItem
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "../../styles/navbar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MotionLink = motion(Link);

function Stagiaire() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0"
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

      <Box margin={"auto"} w="100%" p={4}>
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "1fr",
            md: "1fr 1fr",
            lg: "1fr 1fr",
            xl: "1fr 1fr"
          }}
          gap={6}
          
        >
          {/* 1er grid item */}
          <GridItem w="100%" h={{ base: "40vh", md: "70vh" }} bg="blue.500">
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box display={"flex"} justifyContent={"space-around"} flexDirection={"column"} p={"15px"}  w={{ base: "80%", sm: "55%" }} h={{ base: "80%", sm: "65vh" }} bg="white" boxShadow="md" borderRadius="md">
            <Heading
         
            textAlign={"center"}
          fontSize={"2.5rem"}
            >
              Stagiaires
            </Heading>

          <Text

          textAlign={"justify"}
          >
          Vivre Debout accueille des stagiaires en cours de formation quelle que soit la formation.
En 2024, Vivre Debout a accueilli 2 stagiaires Web développement et 1 stagiaire en Management des organisations. 
Les stages sont encadrés et ceux-ci se sont déroulés au siège de l’association.
Dans les années à venir, Vivre Debout étudiera sa politique d’accueil pour pouvoir proposer à plus de stagiaires de mettre en application leur formation dans un environnement audacieux et courageux.
          </Text>

              </Box>
            </Flex>
          </GridItem>

          {/* 2ieme grid item */}
          <GridItem w="100%" h={{ base: "40vh", md: "70vh" }} bg="green.500">
            <Flex justifyContent="center" alignItems="center" h="100%">
              <Box w={{ base: "100%", md: "80%" }} maxW="600px">
                <Slider {...settings}>
                  <Box>
                    <img src="../../../public/Image1.png" alt="Image 1" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../../../public/image2.png" alt="Image 2" style={{ width: "100%" }} />
                  </Box>
                  <Box>
                    <img src="../../../public/Image3.png" alt="Image 3" style={{ width: "100%" }} />
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

export default Stagiaire;
