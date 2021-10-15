import React from 'react';
import { Text, Code } from '@chakra-ui/react';
function Banner() {
  return (
    <Text fontSize="md" mt={10}>
      Tôi ơi hãy <Code colorScheme="blue">strong </Code> lên! Hãy{' '}
      <Code colorScheme="blue">win myself</Code> của mình, sự thật thì luôn luôn
      đơn giản nhưng
      <Code colorScheme="blue">people make it complicated</Code>, nên là mình cứ{' '}
      <Code colorScheme="blue">enjoy</Code> cái{' '}
      <Code colorScheme="blue">moment</Code> này, cố gắng{' '}
      <Code colorScheme="blue">smile</Code> khi gặp{' '}
      <Code colorScheme="blue"> hard</Code> và{' '}
      <Code colorScheme="blue"> sad story</Code> trong{' '}
      <Code colorScheme="blue"> life</Code> này
    </Text>
  );
}

export default Banner;
