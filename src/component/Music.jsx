import React from 'react';
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
import { music1, music2 } from '../data/dataMusic';
import { motion } from 'framer-motion';
function Music({ music, setPlayMusic, musicAudio, setMusic }) {
  const MotionButton = motion(Button);
  const { isOpen, onOpen, onClose } = useDisclosure();
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
      <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">PLAYLIST</DrawerHeader>
          <DrawerBody>
            <Flex maxW={[400, 600, 600]} m="0 auto">
              <Flex flexDirection="column" mt={5} w="50%">
                {music1?.map((item, index) => (
                  <Box
                    id={index}
                    color="rgba(0, 0, 0)"
                    // bg="rgba(255, 255, 255, 0.4)"
                    _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                    onClick={() => {
                      setPlayMusic(true);
                      musicAudio.current.currentTime = item.time;
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
                {music2?.map((item, index) => (
                  <Box
                    id={index}
                    color="rgba(0, 0, 0)"
                    // bg="rgba(255, 255, 255, 0.4)"
                    _hover={{ bg: 'rgba(255, 255, 255, 0.3)' }}
                    onClick={() => {
                      setPlayMusic(true);
                      musicAudio.current.currentTime = item.time;
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
