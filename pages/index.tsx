import {
  Button,
  Container,
  Flex,
  Heading,
} from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Container maxW={"100vw"} h={"100vh"} p={"2"} bg={"gray.900"}>
      <Flex w={"100%"} h={"100%"} align="center" justify="center" direction={"column"}>
        <Heading color={"#fff"} m={"0.65rem 0 0.65rem 0"}>
          Calculadora
        </Heading>
        <Link href="/calculator">
          Começar duelo
        </Link>
      </Flex>
    </Container>
  );
}
