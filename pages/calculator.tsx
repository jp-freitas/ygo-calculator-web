import { Box, Button, ButtonGroup, Center, Container, Heading, Input, Text } from "@chakra-ui/react";
import { ArrowCounterClockwise, ArrowUUpLeft, CaretLeft, CaretRight, Divide, Equals, Minus, NumberEight, NumberFive, NumberFour, NumberNine, NumberOne, NumberSeven, NumberSix, NumberThree, NumberTwo, NumberZero, Plus, Queue } from 'phosphor-react'
import Stopwatch from "../components/stopwatch";

export default function Calculator() {
  const playerOne = 'João Pedro'
  const playerOneLP = 8000
  const playerTwo = 'Alex'
  const playerTwoLP = 8000

  return (
    <Container maxW={"100vw"} h={"100vh"} display={"flex"} p={2} alignItems={"center"} justifyContent={"space-between"} flexDirection={"column"} bg={"gray.900"}>
      <Stopwatch />
      <Center gap={2} w={"100%"} h={"100%"}>
        <Heading w={"100%"} m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
          <Text color={"gray.400"} alignSelf={"start"}>{playerOne}</Text>
          <Text color={"gray.50"} alignSelf={"start"}>{playerOneLP}</Text>
        </Heading>
        <Heading w={"100%"} m={"0.65rem 0 0.65rem 0"} display={"flex"} flexDirection={"column"}>
          <Text color={"gray.400"} alignSelf={"end"}>{playerTwo}</Text>
          <Text color={"gray.50"} alignSelf={"end"}>{playerTwoLP}</Text>
        </Heading>
      </Center>
      <Center w={"100%"} h={"100%"} gap={2} flexDirection={"column"}>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <CaretLeft weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <Plus weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <Minus weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <CaretRight weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberOne weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberTwo weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberThree weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberFour weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberFive weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberSix weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberSeven weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberEight weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberNine weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberZero weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
            <NumberZero weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <Divide weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <ArrowUUpLeft weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <Queue weight="bold" size={24} />
          </Button>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <ArrowCounterClockwise weight="bold" size={24} />
          </Button>
        </ButtonGroup>
        <ButtonGroup w={"100%"} h={"100%"}>
          <Button w={"100%"} h={"100%"} bg={"blackAlpha.900"} color={"gray.400"}>
            <Equals weight="bold" size={24} />
          </Button>
        </ButtonGroup>
      </Center>
    </Container>
  )
}