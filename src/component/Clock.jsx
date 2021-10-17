import React, { useState, useRef } from 'react';
import { Box, Heading, Button, Input } from '@chakra-ui/react';
import Timer from './Timer';
import CountDown from './CountDown';
function Clock() {
  const [isCountDown, setIsCountDown] = useState(false);
  // const [timeCount, setTimeCount] = useState({
  //   hour: 0,
  //   minute: 0,
  //   second: 0,
  // });
  // const [isCountDown, setIsCountDown] = useState(0);
  // const [isOpenCPNCountDown, setIsOpenCPNCountDown] = useState(0);

  return (
    <Box mt={5}>
      {isCountDown ? <CountDown /> : <Timer />}
      {isCountDown ? (
        <Button
          // color="white"
          mt={5}
          colorScheme="facebook"
          // variant="link"
          onClick={() => setIsCountDown(false)}
        >
          Timer
        </Button>
      ) : (
        <Button
          // color="white"
          mt={5}
          colorScheme="facebook"
          // variant="link"
          onClick={() => setIsCountDown(true)}
        >
          CountDown
        </Button>
      )}
    </Box>
  );
}

export default Clock;
