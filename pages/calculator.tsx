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
  Backspace,
  CaretLeft,
  CaretRight,
  Copyright,
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
import { useContext, useState } from "react";
import Stopwatch from "../components/stopwatch";
import { DuelistContext } from "../contexts/DuelistsContext";

export default function Calculator() {
  const [playerSelected, setPlayerSelected] = useState(1);
  const [playerOneLP, setPlayerOneLP] = useState(8000);
  const [playerTwoLP, setPlayerTwoLP] = useState(8000);
  const [calculate, setCalculate] = useState("");
  const { duel } = useContext(DuelistContext);

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
    if (calculate.includes(signal)) {
      return
    } else {
      setCalculate(signal += calculate)
    }
  }

  function AddNumber(value: string) {
    let toCalculate = calculate
    setCalculate(toCalculate += value)
  }

  function ResetInput() {
    setCalculate("")
  }

  function DivideByTwo() {
    playerSelected === 1 ? setPlayerOneLP(playerOneLP / 2) : setPlayerTwoLP(playerTwoLP / 2)
  }

  function DeletLastInputString() {
    const arrayFromEachElementInString = calculate.split('')
    const removeTheLastItemFromArray = arrayFromEachElementInString.slice(0, -1)
    const convertTheArrayIntoString = removeTheLastItemFromArray.join("")
    setCalculate(convertTheArrayIntoString)
  }

  function Calculate() {
    const matches = calculate.match(/([-+]?)(\d+)/)
    switch (matches?.[1]) {
      case "+":
        const sumResult = playerSelected === 1 ? Number(matches?.[2]) + playerOneLP : Number(matches?.[2]) + playerTwoLP
        playerSelected === 1 ? setPlayerOneLP(sumResult) : setPlayerTwoLP(sumResult)
        break;
      case "-":
        const subtractResult = playerSelected === 1 ? playerOneLP - Number(matches?.[2]) : playerTwoLP - Number(matches?.[2]);
        const nonNegativeResult = Math.max(subtractResult, 0);
        playerSelected === 1 ? setPlayerOneLP(nonNegativeResult) : setPlayerTwoLP(nonNegativeResult)
        break;
      default:
        alert("Por favor selecione uma expressão")
        break;
    }
    Reset()
  }

  return (
    <Container maxW={"100vw"}
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
          onClick={() => togglePlayerSelected(1)}
          p={"0.65rem 0 0.65rem 0.65rem"}
          bg={`${playerSelected === 1 ? "blackAlpha.900" : ""}`}
        >
          <Text
            color={`${playerSelected === 1 ? "#fff" : "gray.400"}`}
            alignSelf={"start"}
            fontSize='2xl'
          >
            {duel.firstDuelist}
          </Text>
          <Text color={"gray.50"} alignSelf={"start"}>
            {playerOneLP}
          </Text>
        </Heading>
        <Heading
          w={"100%"}
          m={"0.65rem 0 0.65rem 0"}
          p={"0.65rem 0.65rem 0.65rem 0"}
          display={"flex"}
          flexDirection={"column"}
          onClick={() => togglePlayerSelected(2)}
          bg={`${playerSelected === 2 ? "blackAlpha.900" : ""}`}
        >
          <Text
            color={`${playerSelected === 2 ? "#fff" : "gray.400"}`}
            alignSelf={"end"}
            fontSize='2xl'
          >
            {duel.secondDuelist}
          </Text>
          <Text color={"gray.50"} alignSelf={"end"}>
            {playerTwoLP}
          </Text>
        </Heading>
      </Center>
      <Center w={"100%"} h={"100%"} gap={2} flexDirection={"column"}>
        <Box w={"100%"} h={"100%"} display="flex" alignItems="center" justifyContent="space-between">
          <Input
            m={"0.65rem 0.65rem 0 0"}
            textAlign={"center"}
            h={"80%"}
            p={"1 auto"}
            fontSize="4xl"
            color={"black.900"}
            bg={"gray.200"}
            border={"transparent"}
            value={calculate}
            disabled
          />
          <ButtonGroup h={"80%"} m={"0.65rem 0 0 0"}>
            <Button
              bg={"blackAlpha.900"}
              color={"gray.400"}
              onClick={DeletLastInputString}
              h={"100%"}
            >
              <Backspace size={32} weight="bold" />
            </Button>
            <Button
              bg={"blackAlpha.900"}
              color={"gray.400"}
              onClick={ResetInput}
              h={"100%"}
              w={"50%"}
            >
              <Text fontSize={"2xl"} fontWeight={"bold"}>C</Text>
            </Button>
          </ButtonGroup>
        </Box>
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
            onClick={DivideByTwo}
          >
            <Divide weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
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
            onClick={() => AddNumber("5")}
          >
            <NumberFive weight="bold" size={24} />
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
          <Button
            w={"100%"}
            h={"100%"}
            bg={"blackAlpha.900"}
            color={"gray.400"}
          >
            <ArrowUUpLeft weight="bold" size={24} />
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
          >
            <Queue weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
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
