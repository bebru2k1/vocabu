import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  Box,
  Button,
  Avatar,
  Heading,
  Text,
  Flex,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { music as musicData } from '../data/dataMusic';
import { motion } from 'framer-motion';
import AvatarPlayList from './AvatarPlayList';
function Music({ music, setPlayMusic, musicAudio, setMusic, playMusic }) {
  const [timeCurrentAudio, setTimeCurrentAudio] = useState(0);
  const currentTimeF = useRef();
  const MotionButton = motion(Button);
  const MotionAvatar = motion(Avatar);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const setCurentTimeAudio = () => {
    if (!playMusic && currentTimeF.current) {
      console.log('clear');
      clearInterval(currentTimeF.current);
    }
    console.log(playMusic, !currentTimeF.current);
    if (playMusic) {
      currentTimeF.current = setInterval(
        () => setTimeCurrentAudio(musicAudio.current.currentTime),
        1000
      );
    }
  };
  const handleMusic = () => {
    const result = musicData?.filter(
      item =>
        timeCurrentAudio <= item.time[1] && timeCurrentAudio >= item.time[0]
    );
    setMusic(result[0]);
  };
  useEffect(() => {
    handleMusic();
  }, [timeCurrentAudio]);

  useEffect(() => {
    setCurentTimeAudio();
  }, [playMusic]);

  return (
    <>
      <MotionButton
        onClick={onOpen}
        color="white"
        bg="rgba(255, 255, 255, 0.2)"
        mr={5}
        // _hover={{ }}
        whileHover={{ scale: 1.1, background: 'rgba(255, 255, 255, 0.3)' }}
      >
        PlayList
      </MotionButton>
      {music && (
        <Box
          color="rgba(0, 0, 0)"
          bg="rgba(255, 255, 255, 0.4)"
          _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
          p={5}
          m="0 auto"
          mt={5}
          mb={5}
          borderRadius={10}
          // d="flex"
          // flexDirection="column"
          maxW={250}
        >
          <AvatarPlayList music={music} />

          <Heading
            fontSize={23}
            whiteSpace="nowrap"
            overflow="hidden !important"
            textOverflow="ellipsis"
            w="100%"
            cursor="pointer"
          >
            {music.name}
          </Heading>
          <Text mt={2}>{music.author.name}</Text>
        </Box>
      )}
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">PLAYLIST</DrawerHeader>
          <DrawerBody>
            <Flex maxW={[400, 600, 600]} m="0 auto">
              <Flex flexDirection="column" mt={5} w="50%">
                {musicData?.slice(0, 7).map((item, index) => (
                  <Box
                    key={index}
                    color="rgba(0, 0, 0)"
                    // bg="rgba(255, 255, 255, 0.4)"
                    _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                    onClick={() => {
                      setPlayMusic(true);
                      musicAudio.current.currentTime = item.time[0];
                      musicAudio.current.play();
                      setMusic(item);
                      onClose();
                    }}
                    p={2}
                    borderRadius={5}
                    m={2}
                    whiteSpace="nowrap"
                    overflow="hidden !important"
                    textOverflow="ellipsis"
                    w="100%"
                    cursor="pointer"
                  >
                    {item.name}
                  </Box>
                ))}
              </Flex>
              <Flex flexDirection="column" mt={5} w="50%">
                {musicData?.slice(7, 14).map((item, index) => (
                  <Box
                    key={index}
                    color="rgba(0, 0, 0)"
                    // bg="rgba(255, 255, 255, 0.4)"
                    _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                    onClick={() => {
                      setPlayMusic(true);
                      musicAudio.current.currentTime = item.time[0];
                      musicAudio.current.play();
                      setMusic(item);
                      onClose();
                    }}
                    p={2}
                    borderRadius={5}
                    m={2}
                    w="100%"
                    cursor="pointer"
                    whiteSpace="nowrap"
                    overflow="hidden"
                    textOverflow="ellipsis"
                  >
                    {item.name}
                  </Box>
                ))}
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Music;
