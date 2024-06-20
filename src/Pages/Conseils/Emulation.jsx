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
import { motion } from "framer-motion";
import "../../styles/navbar.css";

const MotionLink = motion(Link);

const modalTexts = [
  "Comment devenir autonome lorsque la vie bascule dans la dépendance physique ? Sur le long cours, des bénévoles en situation de handicap accompagnent leurs pairs afin qu'ils puissent échanger leur expérience, et permettre chez l'autre, de développer une confiance en soi et se déterminer par soi-même. Cet accompagnement s'appelle la Pair-émulation.",
  "Combien d'accidentés graves ou de personnes soudainement envahies par la maladie sombrent dans une dépression ? Combien sont-ils à refuser toute aide car ils pensent que personne ne peut se mettre à leur place et les comprendre ? Une personne qui a vécu ce basculement et qui s'en sort peut s'avérer être le seul contact possible. Le bénévole, avant de devenir Pair émulateur, suit une formation spécifique dispensée par le Groupement Français des Personnes Handicapées, qui fait partie comme Vivre Debout de la Coordination Handicap Autonomie."
];

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
      <ModalContent borderRadius="15px" overflow="hidden" display="flex" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center" position="fixed" height="85vh" backgroundColor="#FFF0F5">
        <ModalHeader fontWeight="bold" fontSize={{ base: "1.8em", md: "2em", lg: "2.2em" }}>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody textAlign="justify" fontSize={{ base: "1.2rem", md: "1.1rem", lg: "1.2rem" }} w="100%">
          <Text>{texts[currentIndex]}</Text>
          <Text fontWeight={"bold"} top={"7"} left={"5"} pos={"absolute"}>{`${currentIndex + 1} / ${texts.length}`}</Text>
        </ModalBody>
        <ModalFooter display={'flex'} gap={"10px"}>
          {currentIndex == 1 && (
            <Button padding={"30px 60px"} onClick={handlePrev} color="white" backgroundColor="#AB87FF" _hover={{ bg: "#9260CC" }}>
              Précédent
            </Button>
          )}

{currentIndex == 0 && (
            <Button padding={"30px 60px"} onClick={handleNext} color="white" backgroundColor="#AB87FF" _hover={{ bg: "#9260CC" }}>
              Suivant
            </Button>
          )}
          <Button padding={"30px 60px"}  onClick={onClose} color="white" _hover={{ bg: "#AB87FF" }} backgroundColor="#AB87BF">
              Fermer
            </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

function Aides() {
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
    document.getElementById("root").style.backgroundColor = "#ff006e";
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
            base: "87%",
          }}
          height={{
            lg: "60vh",
            xl: "65vh",
            base: "65vh",
          }}
          background="white"
          borderRadius="20px"
          boxShadow="1px 1px 15px rgba(0, 0, 0, 0.2)"
          flexDirection="column"
          alignItems="center"
          justifyContent={"space-around"}
          padding={'10px'}
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
            Pair-Emulation
          </Heading>

          <Text
            fontSize={{
              sm: "1.6rem",
              lg: "1.7rem",
              xl: "1.8rem",
              base: "1.5rem",
            }}
            textAlign={"justify"}
          >
            Comment devenir autonome lorsque la vie bascule dans la dépendance physique ?
          </Text>
          <Button
            padding={"30px 60px"}
            fontSize={"1.3rem"}
            color="white"
            backgroundColor="#AB87FF"
            onClick={() => setPrestataireOpen(true)}
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

export default Aides;