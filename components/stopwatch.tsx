import { Button, ButtonGroup, Center, ChakraProps, Flex, Text } from "@chakra-ui/react";
import { differenceInMilliseconds } from "date-fns";
import { ArrowCounterClockwise, Play } from "phosphor-react";
import { useEffect, useState } from "react";

export default function Stopwatch({ ...props }: ChakraProps) {
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

  return (
    <Flex align={"center"} justify={"space-between"} w={"100%"}>
      <Text color={"#fff"} fontSize={"2.4rem"} ml="6">
        {("0" + Math.floor((currentMilliseconds / 60000) % 60)).slice(-2)}:
        {("0" + Math.floor((currentMilliseconds / 1000) % 60)).slice(-2)}:
        {("0" + Math.floor((currentMilliseconds / 10) % 100)).slice(-2)}
      </Text>
      <ButtonGroup>
        <Button
          bg={"blackAlpha.900"}
          color={"gray.400"}
          onClick={() => { /** Starts the counter */ }}
        >
          <Play weight="bold" size={24} />
        </Button>
        <Button
          bg={"blackAlpha.900"}
          color={"gray.400"}
          onClick={() => { /** Reset the counter */ }}
        >
          <ArrowCounterClockwise weight="bold" size={24} />
        </Button>
      </ButtonGroup>
    </Flex>
  );
}