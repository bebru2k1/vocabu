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
import videoWallper1 from '../videoWallpper/wallper1.mp4';
import audioRain from '../videoWallpper/rain.wav';
import audioMusic from '../videoWallpper/music.mp3';

import Video from './Video';
import Clock from './Clock';
import { music1, music2 } from '../data/dataMusic';
// import '@fontsource/raleway/400.css';
function SadGNNB() {
  const [playRain, setPlayRain] = useState(false);
  const [playMusic, setPlayMusic] = useState(false);
  const [music, setMusic] = useState(null);
  // const bg = useColorModeValue()

  const rainAudio = useRef(null);
  const musicAudio = useRef(null);
  // useEffect(() => {
  //   rainAudio.current.play();
  //   musicAudio.current.play();
  // }, [rainAudio, musicAudio]);

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
        <Box maxW={500} m="0 auto">
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
            <audio
              src={audioRain}
              loop={true}
              // autoPlay={true}
              ref={rainAudio}
            ></audio>
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
            <audio
              src={audioMusic}
              loop={true}
              // autoPlay={true}
              ref={musicAudio}
            ></audio>
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

          {music && (
            <Box>
              <Button
                color="rgba(0, 0, 0)"
                bg="rgba(255, 255, 255, 0.4)"
                _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                pt={10}
                pb={10}
                m={2}
                mt={5}
                // d="flex"
              >
                <Box>
                  <Avatar size="lg" src={music.author.image} />
                </Box>
                <Box p={5}>
                  <Heading fontSize={20}>{music.name}</Heading>
                  <Text mt={2}>{music.author.name}</Text>
                </Box>
              </Button>
            </Box>
          )}
          <Flex maxW="95%">
            <Flex flexDirection="column" mt={5} w="50%" justify="flex-start">
              {music1?.map((item, index) => (
                <Button
                  justify="flex-start"
                  d="flex"
                  id={index}
                  variant="link"
                  color="rgba(0, 0, 0)"
                  // bg="rgba(255, 255, 255, 0.4)"
                  // _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                  onClick={() => {
                    setPlayMusic(true);
                    musicAudio.current.currentTime = item.time;
                    musicAudio.current.play();
                    setMusic(item);
                  }}
                  pt={2}
                  pb={2}
                  m={2}
                  whiteSpace="nowrap"
                  overflow="hidden !important"
                  textOverflow="ellipsis"
                  w="100%"
                >
                  {item.name}
                </Button>
              ))}
            </Flex>
            <Flex flexDirection="column" mt={5} w="50%" align="flex-start">
              {music2?.map((item, index) => (
                <Button
                  id={index}
                  variant="link"
                  color="rgba(0, 0, 0)"
                  // bg="rgba(255, 255, 255, 0.4)"
                  // _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                  onClick={() => {
                    setPlayMusic(true);
                    musicAudio.current.currentTime = item.time;
                    musicAudio.current.play();
                    setMusic(item);
                  }}
                  pt={2}
                  pb={2}
                  m={2}
                  w="100%"
                  whiteSpace="nowrap"
                  overflow="hidden"
                  textOverflow="ellipsis"
                >
                  {item.name}
                </Button>
              ))}
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}

export default SadGNNB;
