import React, { useState, useRef } from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';

function Clock() {
  const [time, setTime] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);

  const coutTime = useRef();

  const handleClickPlay = () => {
    if (!isPlay) {
      coutTime.current = setInterval(() => {
        setTime(time => time + 1);
      }, 1000);
    }
    setIsPlay(true);
    setIsPause(false);
  };

  const handleClickPause = () => {
    clearInterval(coutTime.current);
    setIsPause(true);
    setIsPlay(false);
  };

  const handleClickReset = () => {
    if (isPause) {
      clearInterval(coutTime.current);
      setTime(0);
      setIsPlay(false);
    }
  };

  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };
  return (
    <Box mt={5}>
      <Box>
        <Heading
          d="inline-block"
          pl={5}
          pr={5}
          borderRadius={10}
          bg="rgba(255, 255, 255, 0.2)"
          fontSize={{ base: '50px', md: '70px', lg: '100px' }}
        >
          {formatTime(time)}
        </Heading>
      </Box>
      <Box mt={5}>
        <Button
          color="white"
          bg="rgba(255, 255, 255, 0.2)"
          mr={5}
          onClick={handleClickPlay}
          _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
        >
          Play
        </Button>
        <Button
          color="white"
          bg="rgba(255, 255, 255, 0.2)"
          mr={5}
          _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
          onClick={handleClickPause}
        >
          Pause
        </Button>
        <Button
          color="white"
          bg="rgba(255, 255, 255, 0.2)"
          _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
          onClick={handleClickReset}
        >
          Reset
        </Button>
      </Box>
    </Box>
  );
}

export default Clock;
