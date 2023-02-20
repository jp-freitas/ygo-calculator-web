import { Container, Heading, Text } from "@chakra-ui/react";

export function Calculator({ playerOne, playerTwo, playerOneLP, playerTwoLP }: CalculatorType) {
  return (
    <Container display={"flex"} p={0} alignItems={"flex-start"} justifyContent={"space-between"}>
      <Heading color={"#fff"} m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
        <Text>{playerOne}</Text>
        <Text>{playerOneLP}</Text>
      </Heading>
      <Heading color={"#fff"} m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
        <Text>{playerTwo}</Text>
        <Text>{playerTwoLP}</Text>
      </Heading>
    </Container>
  )
}