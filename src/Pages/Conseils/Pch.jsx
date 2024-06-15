import Header from "../../Header";
import { useState, useEffect } from "react";
import Slider from "react-slick";
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
import { HamburgerIcon, ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import "../../styles/navbar.css";

const MotionLink = motion(Link);

function Pch() {
const { isOpen, onOpen, onClose } = useDisclosure();
const { isOpen: isDrawerOpen, onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure();
const [isMobile, setIsMobile] = useState(false);
const [isPrestataireOpen, setPrestataireOpen] = useState(false);
const [currentTextIndex, setCurrentTextIndex] = useState(0);

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
display: "flex",
flexDirection: "column",
alignItems: "center",
},
};

const modalTexts = [
"Comment devenir autonome lorsque la vie bascule dans la dépendance physique ?",
"Sur le long cours, des bénévoles en situation de handicap accompagnent leurs pairs afin qu'ils puissent échanger leur expérience, et permettre chez l'autre, de développer une confiance en soi et se déterminer par soi-même. Cet accompagnement s'appelle la Pair-émulation.",
"Combien d'accidentés graves ou de personnes soudainement envahies par la maladie sombrent dans une dépression ? Combien sont-ils à refuser toute aide car ils pensent que personne ne peut se mettre à leur place et les comprendre ?",
"Une personne qui a vécu ce basculement et qui s'en sort peut s'avérer être le seul contact possible.",
"Le bénévole, avant de devenir Pair émulateur, suit une formation spécifique dispensée par le Groupement Français des Personnes Handicapées, qui fait partie comme Vivre Debout de la Coordination Handicap Autonomie."
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
<Flex mt={"3%"} w="100%" height="100%" display="flex" flexDirection="column" alignItems="center" justifyContent={"center"}>
<Box width="100%" display="grid" gridTemplateColumns={{ base: "1fr", md: "2fr 1fr" }} gap={4} alignItems="center">
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
Pair-Emulation
</Heading>
<Text
fontSize={"1.5rem"}
>
Comment devenir autonome lorsque la vie bascule dans la dépendance physique ?
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
lg: "2rem",
md: "1.5rem",
sm: "1.5rem",
base: "1.4rem",
}}
onClick={() => setPrestataireOpen(true)}
>
En savoir plus
</Button>
</Flex>
<Box
as="section"
width="100%"
display="flex"
flexDirection="column"
alignItems="center"
justifyContent="center"
bg="#fff"
boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
borderRadius="0.75rem"
height={{
lg: "60vh",
xl: "65vh",
md: "350px",
sm: "350px",
base: "350px",
}}
>
export default function SimpleSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}
</Box>
</Box>
</Flex>

<CustomTextModal
isOpen={isPrestataireOpen}
onClose={() => setPrestataireOpen(false)}
header="Pair-Emulation"
texts={modalTexts}
currentIndex={currentTextIndex}
setCurrentIndex={setCurrentTextIndex}
/>
</>
);
}

export default Pch;