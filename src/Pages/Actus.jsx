import Header from "../Header";
import { useEffect } from "react";
import {
  Flex,
  Box,
  Grid,
  Img,
  GridItem,
  Heading,
  Text,
  Button,
  UnorderedList,
  ListItem,
  Link,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  SimpleGrid
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import SolidariteImg from "../../public/solidariteP.png";
import LienGif from "../../public/info.gif";
import Masks from "../../public/theatre.png";

function PrisEnContes() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    document.getElementById("root").style.backgroundColor = "#D2C4F3";
  });

  return (
    <>
      <Header ></Header>
    
    </>
  );
}

export default PrisEnContes;
