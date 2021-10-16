import React, { useState, useEffect, useRef } from 'react';
import { Box, Button, Input, Heading } from '@chakra-ui/react';
import alarmAudio from '../videoWallpper/baothuc.mp3';
function CountDown() {
  const [time, setTime] = useState(0);
  const [isPlay, setIsPlay] = useState(false);
  const [isPause, setIsPause] = useState(false);
  const [timeNotFormat, setTimeNotFormat] = useState({
    hour: 0,
    minute: 0,
    second: 0,
  });
  const [isAlarm, setIsArlam] = useState(false);
  const alarm = useRef();
  const [isCountDown, setIsCountDown] = useState(false);
  const coutDownTime = useRef();
  // const unCountTime = useRef();

  useEffect(() => {
    return () => {
      setTime(0);
      clearInterval(coutDownTime.current);
    };
  }, []);
  useEffect(() => {
    if (time === 0) {
      clearInterval(coutDownTime.current);
      if (isCountDown) {
        setIsArlam(true);
        alarm.current.play();
      }
      setIsCountDown(false);
    }
  }, [time]);
  const formatTime = timer => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours} : ${getMinutes} : ${getSeconds}`;
  };

  const formatTimeToSecond = ({ hour, minute, second }) => {
    return hour * 3600 + minute * 60 + second;
  };

  const handleClickPlay = () => {
    if (!isPlay) {
      coutDownTime.current = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    }
    setIsPlay(true);
    setIsPause(false);
  };

  const handleClickPause = () => {
    clearInterval(coutDownTime.current);
    setIsPause(true);
    setIsPlay(false);
  };

  const handleClickReset = () => {
    clearInterval(coutDownTime.current);
    setTime(0);
    setIsPlay(false);
    setIsCountDown(false);
  };

  const handleChangCountDown = e => {
    setTimeNotFormat({ ...timeNotFormat, [e.target.name]: +e.target.value });
  };
  const handleCountDownStart = () => {
    if (!isCountDown) {
      const timeFormatSecond = formatTimeToSecond(timeNotFormat);
      setTime(timeFormatSecond);
      handleClickPlay();

      setTimeNotFormat({
        hour: 0,
        minute: 0,
        second: 0,
      });
      setIsCountDown(true);
    }
  };

  return (
    <Box>
      <Box>
        <audio src={alarmAudio} ref={alarm} />
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
          mr={5}
          onClick={handleClickReset}
        >
          Reset
        </Button>
      </Box>
      <Box d="flex" maxW={300} m="0 auto" mt={5}>
        <Input
          type="number"
          name="hour"
          mr={5}
          placeholder="Hour"
          value={timeNotFormat.hour}
          onChange={e => handleChangCountDown(e)}
        />
        <Input
          mr={5}
          name="minute"
          placeholder="Minute"
          onChange={e => handleChangCountDown(e)}
          value={timeNotFormat.minute}
        />
        <Input
          name="second"
          placeholder="Second"
          onChange={e => handleChangCountDown(e)}
          value={timeNotFormat.second}
        />
      </Box>
      <Button
        color="white"
        bg="rgba(255, 255, 255, 0.2)"
        _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
        onClick={handleCountDownStart}
        mt={5}
      >
        Start
      </Button>
      {isAlarm && (
        <Button
          color="white"
          bg="rgba(255, 255, 255, 0.2)"
          _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
          onClick={() => {
            setIsArlam(false);
            alarm.current.pause();
            alarm.current.currentTime = 0;
          }}
          mt={5}
          ml={5}
        >
          Off Alarm
        </Button>
      )}
    </Box>
  );
}

export default CountDown;
