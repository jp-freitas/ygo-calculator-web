import {
  Button,
  Container,
  Flex,
  Heading,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { DuelModal } from "../components/duelmodal";
import { DuelistContext } from "../contexts/DuelistsContext";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { duel, setDuel } = useContext(DuelistContext);

  return (
    <Container maxW={"100vw"} h={"100vh"} p={"2"} bg={"gray.900"}>
      <Flex w={"100%"} h={"100%"} align="center" justify="center" direction={"column"}>
        <Heading color={"#fff"} m={"0.65rem 0 0.65rem 0"}>
          Calculadora
        </Heading>
        <Button w={"95%"} onClick={() => onOpen()}>Começar Duelo</Button>
      </Flex>
      <DuelModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        duel={duel}
        setDuel={setDuel}
      />
    </Container>
  );
}
