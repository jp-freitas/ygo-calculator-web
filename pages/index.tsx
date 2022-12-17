import {
  Flex,
  Container,
  Heading,
  Box,
  Text,
  ButtonGroup,
  Button,
  Spacer,
  Center,
  useToast,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Howl } from "howler";
import { differenceInMilliseconds } from 'date-fns';

export default function Home() {
  const [time, setTime] = useState(2400000)
  const [active, setActive] = useState(false)
  const [paused, setPaused] = useState(true)
  const [initialDate, setInititalDate] = useState<Date>(new Date())
  const [millisecondsPassed, setMillisecondsPassed] = useState(() => {
    if (active) {
      differenceInMilliseconds(new Date(), new Date(initialDate))
    }
    return 0;
  })
  const currentMilliseconds = active ? time - millisecondsPassed : 2400000;

  const toast = useToast();

  const audioClips = [
    {
      sound: "https://soundbible.com/mp3/Fire_pager-jason-1283464858.mp3",
      label: "Fire Pager",
    },
  ];
  
  function playAudio() {
    const sound = new Howl({
      src: audioClips.map((item) => item.sound),
      html5: true,
    });
    sound.play();
  }

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;
    if (active && !paused) {
      interval = setInterval(() => {
        const millisecondsDifference = differenceInMilliseconds(
          new Date(),
          new Date(initialDate),
        )
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

    switch (currentMilliseconds) {
      case 1799990:
        toast({
          title: "Faltam 30 Minutos",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      case 1199990:
        toast({
          title: "Faltam 20 Minutos",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      case 599990:
        toast({
          title: "Faltam 10 Minutos",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      case 299990:
        toast({
          title: "Faltam 5 Minutos",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      case 119990:
        toast({
          title: "Faltam 2 minutos",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      case 10:
        toast({
          title: "Acabou o tempo",
          status: "success",
          duration: 2000,
        });
        playAudio();
        break;
      default:
        break;
    }

    return () => {
      clearInterval(interval);
    };
  }, [active, time, toast, initialDate, paused, millisecondsPassed, currentMilliseconds]);

  function handleStart() {
    const startedDate = new Date();
    setInititalDate(startedDate);
    setMillisecondsPassed(0);
    setActive(true);
    setPaused(false)
  }

  function togglePauseButton() {
    setPaused(!paused);
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
                <Button w="50%" onClick={() => handleReset()}>
                  Reiniciar
                </Button>
                <Button w="50%" onClick={() => togglePauseButton()}>
                  {paused ? "Continuar" : "Pausar"}
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
