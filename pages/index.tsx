import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import { Calculator } from "./calculator";

export default function Home() {
  return (
    <Container maxW={"100vw"} h={"100vh"} p={"2"} bg={"gray.900"}>
      <Flex w={"100%"} h={"100%"} align="center" justify="center" direction={"column"}>
        {/* <Heading color={"#fff"} m={"0.65rem 0 0.65rem 0"}>
          Calculadora
        </Heading>
        <Button margin={"1rem"} >
          Começar duelo
        </Button> */}
        <Calculator
          playerOne="João Pedro"
          playerOneLP={8000}
          playerTwo="Renan"
          playerTwoLP={8000}
        />
      </Flex>
    </Container>
  );
}
