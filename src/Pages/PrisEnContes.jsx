import Header from '../Header'
import { useEffect } from 'react'
import { Flex, Box, Grid, Img, GridItem, Heading, Text, Button, UnorderedList, ListItem, Link, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import SolidariteImg from '../../public/solidariteP.png'
import LienGif from '../../public/info.gif'
import Masks from '../../public/theatre.png'
import '../styles/conte.css'


function PrisEnContes() {

  const { isOpen, onOpen, onClose } = useDisclosure()



  useEffect(() => {
    document.getElementById('root').style.backgroundColor = "#D2C4F3"
  })



  return (
    <>
      <Header ></Header>
      <Box
        w="100%"
        height="100%"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}

      >
        <Img
          src={Masks}
          w={"8rem"}
          pos="relative"
          top={{ xl: "3em", lg: "4em" }}

        ></Img>
        <Grid
          templateColumns={{
            base: "1fr",
            sm:"1fr",
            md: "1fr",
            lg: "1fr 1fr 1fr",
            xl: "1fr 1fr 1fr",
          }}

          height={{ lg: "100%", xl: "100%", md: "100%", sm: "100%",base:"100%"}}
          templateRows={{ sm: "auto", lg: "auto", xl: "auto", md: "auto",base:"auto"}}

          pos={"relative"}
          top={{ xl: "-3em", md: "5em", lg: "1rem",sm:"5em",base:"5em"  }}
          rowGap={{ md: "3rem", sm: "3rem",base:"3rem" }}
        >
          <GridItem

            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            {/* box 1 */}
            <Flex
              as={motion.div}
              width={{ lg: "96%", "2xl": "70%", md: "80%",sm: "80%", xl: "90%",base:"80%"}}
              textAlign={{ lg: "justify" }}
              justifyContent={{ md: "space-around", xl: "space-around",sm:"space-around",base:"space-between"}}

              height={{ lg: "85%", xl: "90%", md: "350px", sm: "350px", base: "350px" }}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction={"column"}
              bg="#EEE7FF"
            >
              <Heading fontSize={{ lg: "3em", md: "2.4rem", xl: "3rem",sm:"2.4rem",base:"2.4rem" }}>Inclusivité</Heading>
              <UnorderedList
                spacing={3}
                listStyleType={"circle"}

                fontSize={{ md: "1.3rem", lg: "1.2rem", xl: "1.4rem",sm:"1.1rem",base:"1.1rem" }}



              >
                <ListItem>
                  {" "}
                  Montez sur Scène avec "Pris en Contes 2023-2024"
                </ListItem>
                <ListItem>
                  Maison du Voisinage Les Coudrays Rue de Bassigny - 78310
                  Maurepas Parking facile d'accès situé à proximité
                </ListItem>
                <ListItem> Tous les mardis de 17h45 à 19h45 </ListItem>
              </UnorderedList>
            </Flex>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems={'flex-end'}>




            {/* Box 2 */}
            <Flex
              as={motion.div}
              width={{ lg: "90%", "2xl": "70%", md: "80%", sm: "80%", xl: "90%",base:"80%" }}
              height={{ lg: "60%", md: "250px", sm: "250px",base:"250px" }}

              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              whileHover={{ scale: 1.05 }}
              initial={{ y: "30rem" }}

              animate={{ y: "0rem" }}
              direction={"column"}

              cursor="pointer"
              bg="#EEE7FF"

              alignItems={{ lg: "center" }}
              justifyContent={{ md: "space-around", xl: "space-around",sm:"space-around", base: "space-between" }}
            >
              <Heading fontSize={{ lg: "2.4em", md: "2.4rem", xl: "3rem", sm:"2.4rem",base:"2.4rem" }}>Debout !</Heading>
              <Text
                fontSize={{ md: "1.3rem", lg: "1.2rem", xl: "1.4rem",base:"1.1rem" }}
                textAlign={"center"}>
                Être en mouvement dans l’audace et la créativité, c’est possible
                !
              </Text>
              <Button
                mb={{ lg: "1rem", "2xl": "1rem" }}

                onClick={onOpen}
                w={{ lg: "60%", "2xl": "50%" }}
                h={{ lg: "30%", "2xl": "25%", md: "30%",sm:"30%",base:"30%" }}
              >
                Rejoignez-nous !
              </Button>
              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                  borderRadius="15px"
                  overflowY="auto"
                  display="flex"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  position="fixed"
                  height="85vh"
                >
                  <ModalHeader
                    fontWeight="bold"
                    fontSize={{ sm: "1.5em", lg: "2em", xl: "3.5em" }}
                    overflow="visible"
                  >
                    Pourquoi nous rejoindre ?
                  </ModalHeader>
                  <Text
                    fontSize="1.07em"
                    textAlign="justify"
                    pl="15px"
                    pr="15px"
                    pos="relative"
                    top="50px"
                  >
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Eius, maxime inventore! Assumenda totam fugit qui error
                    iusto alias id, corporis velit veritatis, provident, modi
                    repellat fugiat ipsam. Ab, ipsa dolorum!
                  </Text>
                  <ModalCloseButton />
                  <ModalBody></ModalBody>
                  <ModalFooter overflow="visible">
                    <Button backgroundColor="#EEE7FF" mr={3} onClick={onClose}>
                      Fermer
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
          </GridItem>
          <GridItem
            display={"flex"}
            justifyContent={"center"}
            alignItems="center"
          >
            {/* Box 3 */}
            <Flex
              as={motion.div}
              width={{ lg: "96%", "2xl": "70%", md: "80%", sm: "80%", xl: "90%",base:"80%" }}
              textAlign={{ lg: "justify" }}
              justifyContent={{ md: "space-around", xl: "space-around",sm:"space-around",base: "space-between" }}
              height={{ lg: "85%", xl: "90%", md: "350px",sm:"350px",base:"350px" }}
              boxShadow={"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;"}
              borderRadius={"0.75rem"}
              padding={"1rem"}
              whileHover={{ scale: 1.05 }}
              initial={{ x: "-20rem" }}
              animate={{ x: "0rem" }}
              cursor="pointer"
              direction={"column"}
              bg="#EEE7FF"
            >
              <Heading fontSize={{ lg: "2.4em", md: "2.4rem", xl: "3rem", sm:"2.4rem",base:"2.3rem" }}>Futures Manifestations</Heading>
              <UnorderedList
                spacing={3}
                listStyleType={"circle"}

                fontSize={{ md: "1.3rem", lg: "1.2rem", xl: "1.4rem",sm:"1rem" }}


              >
                <ListItem>14 juin 15h nuit du handicap</ListItem>

                <ListItem>
                  Novembre 2024, du lundi 18 au dimanche 24, semaine du handicap
                  en entreprise
                </ListItem>
                <ListItem>25 janvier 2025, "50 ans vivre debout" </ListItem>
              </UnorderedList>
              {/* <Img src={LienGif} backgroundColor={'transparent'}></Img> */}
            </Flex>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}
export default PrisEnContes;