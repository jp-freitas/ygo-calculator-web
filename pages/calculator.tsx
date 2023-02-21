import { Button, ButtonGroup, Center, Container, Heading, Input, Text } from "@chakra-ui/react";
import { CaretLeft, CaretRight } from 'phosphor-react'

export default function Calculator({ playerOne, playerTwo, playerOneLP, playerTwoLP }: CalculatorType) {
  return (
    <Container display={"flex"} p={0} alignItems={"flex-start"} justifyContent={"space-between"} flexDirection={"column"}>
      <Center gap={2}>
        <Heading m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
          <Text color={"gray.400"}>{playerOne}</Text>
          <Input
            color={"gray.50"}
            border={"none"}
            bg={"blackAlpha.800"}
            value={playerOneLP}
          />
        </Heading>
        <Heading m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
          <Text color={"gray.400"}>{playerTwo}</Text>
          <Input
            color={"gray.50"}
            border={"none"}
            bg={"blackAlpha.800"}
            value={playerTwoLP}
          />
        </Heading>
      </Center>
      <ButtonGroup w="100%">
        <Button w="100%" bg={"blackAlpha.500"} color={"#fff"}>
          <CaretLeft />
        </Button>
        <Button w="100%" bg={"blackAlpha.500"} color={"#fff"}>
          <CaretRight />
        </Button>
      </ButtonGroup>
    </Container>
  )
}