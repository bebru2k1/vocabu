import React, { useRef, useEffect, useState } from 'react';
import {
  Box,
  chakra,
  Heading,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  useColorModeValue,
  Button,
  Icon,
  Flex,
  Avatar,
} from '@chakra-ui/react';
import { FiPlay, FiPause } from 'react-icons/fi';

import audioRain from '../videoWallpper/rain.wav';
import audioMusic from '../videoWallpper/music.mp3';

import Video from './Video';
import Clock from './Clock';
import Music from './Music';

// import '@fontsource/raleway/400.css';
function SadGNNB() {
  const [playRain, setPlayRain] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [music, setMusic] = useState(null);
  // const bg = useColorModeValue()

  // const rainAudio = useRef(new Audio(audioRain));

  const musicAudio = useRef(new Audio(audioMusic));
  const rainAudio = useRef(null);
  // useEffect(() => {
  //   rainAudio.current.play();
  //   musicAudio.current.play();
  // }, [rainAudio, musicAudio]);
  useEffect(() => {
    return () => {
      rainAudio.current?.pause();
      musicAudio.current?.pause();
    };
  }, []);

  const handleChangeAudioVolumeRain = volume => {
    // console.log(volume);
    rainAudio.current.volume = +volume / 100;
  };
  const handleChangeAudioVolumeMusic = volume => {
    // console.log(volume);
    musicAudio.current.volume = +volume / 100;
  };
  const handleClickPlayRain = type => {
    console.log(type);
    if (type === 'play') {
      rainAudio.current.play();
      setPlayRain(true);
    }
    if (type === 'pause') {
      rainAudio.current.pause();
      setPlayRain(false);
    }
  };
  const handleClickPlayMusic = type => {
    if (type === 'play') {
      musicAudio.current.play();
      setPlayMusic(true);
    }
    if (type === 'pause') {
      musicAudio.current.pause();
      setPlayMusic(false);
    }
  };
  return (
    <Box mt={5} color="white">
      <audio src={audioRain} loop={true} ref={rainAudio} />
      <Video />
      <Box zIndex={2} pos="relative" textAlign="center">
        <Heading
          fontSize={{ base: '70px', md: '100px', lg: '130px' }}
          as="span"
          textTransform="uppercase"
          borderRadius={5}
          fontFamily="Amatic SC"
        >
          Study With Rain
        </Heading>
        <Clock />
        <Box maxW={500} m="0 auto" mt={5}>
          <Box>
            <Flex align="center" justify="center">
              <Text
                fontFamily="Amatic SC"
                fontSize={40}
                fontWeight="bold"
                mr={5}
              >
                Rain Volume
              </Text>
              {playRain ? (
                <Icon
                  fontSize={30}
                  as={FiPause}
                  cursor="pointer"
                  onClick={() => handleClickPlayRain('pause')}
                ></Icon>
              ) : (
                <Icon
                  fontSize={30}
                  as={FiPlay}
                  cursor="pointer"
                  onClick={() => handleClickPlayRain('play')}
                ></Icon>
              )}
            </Flex>

            {/* <Box>
              <Button> Play </Button>
              <Button>Pause</Button>
            </Box> */}

            <Slider
              maxW={300}
              aria-label="slider-ex-5"
              onChange={val => handleChangeAudioVolumeRain(val)}
              defaultValue={100}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>
          <Box>
            <Flex align="center" justify="center">
              <Text
                fontFamily="Amatic SC"
                fontSize={40}
                fontWeight="bold"
                mr={5}
              >
                Music Volume
              </Text>
              {playMusic ? (
                <Icon
                  fontSize={30}
                  as={FiPause}
                  cursor="pointer"
                  onClick={() => handleClickPlayMusic('pause')}
                ></Icon>
              ) : (
                <Icon
                  fontSize={30}
                  as={FiPlay}
                  cursor="pointer"
                  onClick={() => handleClickPlayMusic('play')}
                ></Icon>
              )}
            </Flex>

            <Slider
              maxW={300}
              aria-label="slider-ex-5"
              onChange={val => handleChangeAudioVolumeMusic(val)}
              defaultValue={100}
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Box>

          <Music
            music={music}
            setPlayMusic={setPlayMusic}
            musicAudio={musicAudio}
            setMusic={setMusic}
            playMusic={playMusic}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default SadGNNB;
