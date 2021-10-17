import React from 'react';
import { Avatar } from '@chakra-ui/avatar';
import { motion } from 'framer-motion';
function AvatarPlayList({ music }) {
  const MotionAvatar = motion(Avatar);
  return (
    <MotionAvatar
      size="xl"
      src={music.author.image}
      animate={{ rotate: [0, 360] }}
      transition={{
        ease: 'linear',
        repeat: Infinity,
        duration: 3,
      }}
      mb="5"
    />
  );
}

export default React.memo(AvatarPlayList);
