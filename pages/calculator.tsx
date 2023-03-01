import Link from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Heading,
  Input,
  Text
} from "@chakra-ui/react";
import {
  ArrowCounterClockwise,
  ArrowUUpLeft,
  CaretLeft,
  CaretRight,
  Divide,
  Equals,
  Minus,
  NumberEight,
  NumberFive,
  NumberFour,
  NumberNine,
  NumberOne,
  NumberSeven,
  NumberSix,
  NumberThree,
  NumberTwo,
  NumberZero,
  Plus,
  Queue
} from "phosphor-react";
import { useState } from "react";
import Stopwatch from "../components/stopwatch";

export default function Calculator() {
  const [playerSelected, setPlayerSelected] = useState(1);
  const [playerOneLP, setPlayerOneLP] = useState(8000);
  const [playerTwoLP, setPlayerTwoLP] = useState(8000);
  const [calculate, setCalculate] = useState("0");
  const playerOne = "João Pedro";
  const playerTwo = "Alex";

  function togglePlayerSelected(player: number) {
    setPlayerSelected(player);
  }

  function Reset() {
    setCalculate("");
  }

  function ResetLP() {
    setPlayerOneLP(8000);
    setPlayerTwoLP(8000);
  }

  function AddExpression(signal: string) {
    setCalculate(signal += calculate)
  }

  function AddNumber(value: string) {
    let toCalculate = calculate
    setCalculate(toCalculate += value);
  }

  function Calculate() {
    const matches = calculate.match(/([-+]?)(\d+)/)
    switch (matches?.[1]) {
      case "+":
        playerSelected === 1 ? setPlayerOneLP(Number(matches?.[2]) + playerOneLP) : setPlayerTwoLP(Number(matches?.[2]) + playerTwoLP)
        break;
      case "-":
        playerSelected === 1 ? setPlayerOneLP(playerOneLP - Number(matches?.[2])) : setPlayerTwoLP(playerTwoLP - Number(matches?.[2]))
        break;
      default:
        break;
    }
    Reset()
  }

  return (
    <Container
      maxW={"100vw"}
      h={"100vh"}
      display={"flex"}
      p={2}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDirection={"column"}
      bg={"gray.900"}
    >
      <Center
        w={"100%"}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-evenly"}
      >
        <Box ml={"0"} mr={"5"}>
          <Link href="/">
            <CaretLeft weight="bold" size={32} color={"#fff"} />
          </Link>
        </Box>
        <Stopwatch w={"100%"} />
      </Center>
      <Center gap={2} w={"100%"}>
        <Heading
          w={"100%"}
          m={"0.65rem 0 0.65rem 0"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text
            color={`${playerSelected === 1 ? "#fff" : "gray.400"}`}
            alignSelf={"start"}
          >
            {playerOne}
          </Text>
          <Text color={"gray.50"} alignSelf={"start"}>
            {playerOneLP}
          </Text>
        </Heading>
        <Heading
          w={"100%"}
          m={"0.65rem 0 0.65rem 0"}
          display={"flex"}
          flexDirection={"column"}
        >
          <Text
            color={`${playerSelected === 2 ? "#fff" : "gray.400"}`}
            alignSelf={"end"}
          >
            {playerTwo}
          </Text>
          <Text color={"gray.50"} alignSelf={"end"}>
            {playerTwoLP}
          </Text>
        </Heading>
      </Center>
      <Center w={"100%"} h={"100%"} gap={2} flexDirection={"column"}>
        <Input
          m={"0.65rem 0 0.65rem 0"}
          textAlign={"center"}
          h={"3.5rem"}
          p={"1 auto"}
          fontSize="4xl"
          color={"black.900"}
          bg={"gray.200"}
          border={"transparent"}
          value={calculate}
          disabled
        />
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            rounded={"md"}
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => togglePlayerSelected(1)}
          >
            <CaretLeft weight="fill" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddExpression("+")}
          >
            <Plus weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddExpression("-")}
          >
            <Minus weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => togglePlayerSelected(2)}
          >
            <CaretRight weight="fill" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("1")}
          >
            <NumberOne weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("2")}
          >
            <NumberTwo weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("3")}
          >
            <NumberThree weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("4")}
          >
            <NumberFour weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("5")}
          >
            <NumberFive weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("6")}
          >
            <NumberSix weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("7")}
          >
            <NumberSeven weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("8")}
          >
            <NumberEight weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("9")}
          >
            <NumberNine weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("0")}
          >
            <NumberZero weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("00")}
          >
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={() => AddNumber("000")}
          >
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
          >
            <Divide weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
          >
            <ArrowUUpLeft weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
          >
            <Queue weight="bold" size={24} />
          </Button>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={ResetLP}
          >
            <ArrowCounterClockwise weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
            onClick={Calculate}
          >
            <Equals weight="bold" size={24} />
          </Button>
        </ButtonGroup>
      </Center>
    </Container>
  );
}
