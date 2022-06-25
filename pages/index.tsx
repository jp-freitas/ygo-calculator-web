import { Flex, Container, NumberInput, NumberInputField, Heading, Box, Text, ButtonGroup, Button, Spacer } from '@chakra-ui/react'
import { FormEvent, useEffect, useState } from 'react'

export default function Home() {
  const [time, setTime] = useState(0);
  const [active, setActive] = useState(false);
  const [paused, setPaused] = useState(true);


  useEffect(() => {
    let interval: string | number | NodeJS.Timer | undefined;

    if (active && paused === false) {
      interval = setInterval(() => {
        setTime((time) => time - 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval)
    };
  }, [active, paused]);

  function onChangeTimeInput(event: FormEvent<HTMLInputElement>) {
    setTime(Number(event.currentTarget.value) * 60000);
  }

  function handleStart() {
    if (time === 0) {
      alert('Please, insert a number');
      return;
    } else {
      setActive(true);
      setPaused(false);
    }
  }

  function handleReset() {
    setActive(!active);
    setTime(0);
  }

  function togglePauseButton() {
    setPaused(!paused);
  }

  return (
    <Container minW={'100vw'} minH={'100vh'} p={'0'} bg={'gray.900'}>
      <Flex gap={'16'} alignItems={'center'} w={'100%'} minHeight={'100%'} direction={'column'}>
        <Heading color={'#fff'} m={'1rem 0 1rem 0'}>Contador Torneio</Heading>
        <Spacer />
        <NumberInput w={{ base: '90%' }} colorScheme={'teal'} color={'#fff'}>
          <NumberInputField
            name='time'
            value={time}
            onChange={onChangeTimeInput}
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
                <Button w='50%' onClick={handleReset}>Reiniciar</Button>
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
    </Container>
  )
}
