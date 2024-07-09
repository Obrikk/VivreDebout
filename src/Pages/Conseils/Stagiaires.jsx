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
        document.getElementById("root").style.fontFamily = "Tahoma";
    document.getElementById("root").style.backgroundColor = "#edf2f4";
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
            lg: " 1fr",
            xl: "1fr 1fr",
          }}
          height="100%"
          templateRows="auto"
          gap={{ xl: "5rem", lg: "5rem", md: 10, base: "5rem" }}
          pos="relative"

          top={{ base: "6rem", sm: "10rem", md: "10rem", lg: "4rem" }}

        >
          {/* 1er grid item */}
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex

              as={motion.div}
              width={{ base: "97.5vw", lg: "89vw", xl: "40vw" }}
              textAlign="justify"
              justifyContent="space-around"
              height={{ base: "60vh", sm: "50vh", md: "50vh", lg: "50vh", xl: "65vh" }}
              boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
              borderRadius="0.75rem"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction="column"
              bg="#edef4"
            >
            
                <Heading
                  textAlign={"center"}
                  fontSize={"2.5rem"}
                >
                  Stagiaires
                </Heading>

                <Text
                fontSize={{base:"1.1rem",md:"1.2rem"}}
                  textAlign={"justify"}
                >
                  Vivre Debout accueille des stagiaires en cours de formation quelle que soit la formation.
                  En 2024, Vivre Debout a accueilli 2 stagiaires Web développement et 1 stagiaire en Management des organisations.
                  Les stages sont encadrés et ceux-ci se sont déroulés au siège de l’association.
                  Dans les années à venir, Vivre Debout étudiera sa politique d’accueil pour pouvoir proposer à plus de stagiaires de mettre en application leur formation dans un environnement audacieux et courageux.
                </Text>
            </Flex>
          </GridItem>

          {/* 2ieme grid item */}
          <GridItem display="flex" justifyContent="center" alignItems="center">
            <Flex as={motion.div}
              width={{  base: "97.5vw",lg:"89vw",xl:"40vw" }}
              textAlign="justify"
             display="flex" justifyContent="center" alignItems="center"
              height={{ base: "60vh", sm: "50vh", md: "50vh", lg: "50vh", xl: "65vh" }}
            boxShadow={"0 0 21px 3px rgba (0,0,0,0.5), 0 15px 54px 10px rgba(0,0,0,0.3)"}
              borderRadius="12px"
              padding="1rem"
              whileHover={{ scale: 1.05 }}
              initial={{ x: "20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
            bg={'#d4d7dd'}
            border={"55px solid #fff"}
              marginBottom={{base:"3em",sm:"3em",md:"0",lg:"0",xl:"0"}}>

         <Box padding={"10px"} width={{ base: "90vw",sm:"65vw",md:"65vw",lg:"60vw",xl:"40vw"}} display="flex" justifyContent="center">
          
      <Slider style={{ width: "100%" }} {...settings}>
      
          <img  src="../public/Image1.png" alt="Image 1"  />
       
    
          <img src="../public/Image2.png" alt="Image 2"  />
        
      
          <img src="../public/Image3.png" alt="Image 3"  />
        
        
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
