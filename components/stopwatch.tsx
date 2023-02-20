import { Box, Button, ButtonGroup, Center, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import { differenceInMilliseconds } from "date-fns";
import { useEffect, useState } from "react";

export default function Stopwatch() {
  const [time, setTime] = useState(2400000)
  const [active, setActive] = useState(false)
  const [initialDate, setInititalDate] = useState<Date>(new Date())
  const [millisecondsPassed, setMillisecondsPassed] = useState(0)
  const currentMilliseconds = active ? time - millisecondsPassed : 2400000;

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;

    if (active) {
      interval = setInterval(() => {
        const millisecondsDifference = differenceInMilliseconds(
          new Date(),
          new Date(initialDate),
        );
        if (millisecondsDifference >= time) {
          setTime(2400000)
          setActive(!active)
          clearInterval(interval)
        } else {
          setMillisecondsPassed(millisecondsDifference)
        }
      }, 10)
    } else {
      clearInterval(interval)
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, time, initialDate, millisecondsPassed, currentMilliseconds,]);

  function handleStart() {
    const startedDate = new Date();
    setInititalDate(startedDate);
    setMillisecondsPassed(0);
    setActive(true);
  }

  function handleReset() {
    setTime(2400000);
    setActive(!active);
  }

  return (
    <Container minW={"100vw"} minH={"100vh"} p={"0"} bg={"gray.900"}>
      <Center>
        <Flex
          gap={"16"}
          alignItems={"center"}
          w={"30em"}
          minHeight={"100%"}
          direction={"column"}
        >
          <Heading color={"#fff"} m={"1rem 0 1rem 0"}>
            Timer
          </Heading>
          <Spacer />
          <Box>
            <Text color={"#fff"} fontSize={"2.4rem"}>
              {("0" + Math.floor((currentMilliseconds / 60000) % 60)).slice(-2)}:
              {("0" + Math.floor((currentMilliseconds / 1000) % 60)).slice(-2)}:
              {("0" + Math.floor((currentMilliseconds / 10) % 100)).slice(-2)}
            </Text>
          </Box>
          <Spacer />
          <ButtonGroup w={"90%"}>
            {active ? (
              <>
                <Button w="100%" onClick={() => handleReset()}>
                  Reiniciar
                </Button>
              </>
            ) : (
              <Button w="100%" onClick={handleStart}>
                Iniciar
              </Button>
            )}
          </ButtonGroup>
        </Flex>
      </Center>
    </Container>
  );
}