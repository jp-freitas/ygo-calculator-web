import { Flex, Container, NumberInput, NumberInputField, Heading, Box, Text, ButtonGroup, Button, Spacer, Center, useToast } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

//https://soundbible.com/mp3/Fire_pager-jason-1283464858.mp3

export default function Home() {
  const [initialTime, setInitialTime] = useState(0);
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(true);
  const toast = useToast();

  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;

    if (active && paused === false) {
      interval = setInterval(() => {
        setTime((time) => time - 10);
      }, 10);
    }
    if (time < 0) {
      clearInterval(interval);
      setTime(0);
      setActive(!active);
      setPaused(!paused);
    }

    switch (time) {
      case 1799990:
        toast({
          title: 'Faltam 30 Minutos',
          status: 'success',
          duration: 2000,
        });
        break;
      case 1199990:
        toast({
          title: 'Faltam 20 Minutos',
          status: 'success',
          duration: 2000,
        });
        break;
      case 599990:
        toast({
          title: 'Faltam 10 Minutos',
          status: 'success',
          duration: 2000,
        });
        break;
      case 299990:
        toast({
          title: 'Faltam 5 Minutos',
          status: 'success',
          duration: 2000,
        });
        break;
      case 119990:
        toast({
          title: 'Faltam 2 minutos',
          status: 'success',
          duration: 2000,
        });
        break;
      case 10:
        toast({
          title: 'Acabou o tempo',
          status: 'success',
          duration: 2000,
        });
        break;
      default:
        break;
    }

    return () => {
      clearInterval(interval)
    };
  }, [active, paused, initialTime, time, toast]);

  function handleStart() {
    if (time === 0) {
      toast({
        title: 'Insira um número',
        status: 'error',
        duration: 3000,
      });
      return;
    } else {
      setActive(true);
      setPaused(false);
    }
  }

  function handleReset() {
    setTime(0);
    setInitialTime(0);
    setActive(!active);
  }

  function togglePauseButton() {
    setPaused(!paused);
  }

  return (
    <Container minW={'100vw'} minH={'100vh'} p={'0'} bg={'gray.900'}>
      <Center>
        <Flex gap={'16'} alignItems={'center'} w={'30em'} minHeight={'100%'} direction={'column'}>
          <Heading color={'#fff'} m={'1rem 0 1rem 0'}>Contador Torneio</Heading>
          <Spacer />
          <NumberInput w={{ base: '90%' }} colorScheme={'teal'} color={'#fff'}>
            <NumberInputField
              name='time'
              value={time}
              disabled={active}
              onChange={(event) => {
                setInitialTime(Number(event.target.value) * 60000),
                  setTime(Number(event.target.value) * 60000)
              }
              }
              placeholder='Quantos minutos você deseja?'
            />
          </NumberInput>
          <Spacer />
          <Box>
            <Text color={'#fff'} fontSize={'2.4rem'}>
              {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
              {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
              {("0" + ((time / 10) % 100)).slice(-2)}
            </Text>
          </Box>
          <Spacer />
          <ButtonGroup w={'90%'}>
            {
              active ?
                <>
                  <Button w='50%' onClick={() => handleReset()}>Reiniciar</Button>
                  <Button w='50%' onClick={togglePauseButton}>
                    {paused ? 'Continuar' : 'Pausar'}
                  </Button>
                </>
                :
                <Button w='100%' onClick={handleStart}>
                  Iniciar
                </Button>
            }
          </ButtonGroup>
        </Flex>
      </Center>
    </Container>
  )
}
