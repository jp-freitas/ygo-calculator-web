import { Box, Center, Container, useDisclosure } from "@chakra-ui/react";
import { CaretLeft } from "phosphor-react";
import Stopwatch from "../components/stopwatch";
import CalculatorButtons from "../components/calculator-buttons";
import { ConfirmationModal } from "../components/confirmation-modal";

export default function Calculator() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={"100vw"} h={"100vh"} display={"flex"} p={2} alignItems={"center"} justifyContent={"space-between"} flexDirection={"column"} bg={"gray.900"}>
      <Center
        w={"100%"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Box ml={"0"} mr={"5"}>
          <Box onClick={() => onOpen()}>
            <CaretLeft weight="bold" size={32} color={"#fff"} />
          </Box>
        </Box>
        <Stopwatch w={"100%"} />
      </Center>
      <CalculatorButtons />
      <ConfirmationModal
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </Container>
  );
}
