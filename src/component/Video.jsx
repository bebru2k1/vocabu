import React from 'react';
import { chakra } from '@chakra-ui/react';
import videoWallper1 from '../videoWallpper/wallper1.mp4';
function Video() {
  const VideoChakra = chakra('video');
  return (
    <VideoChakra
      loop={true}
      autoPlay={true}
      muted={true}
      pos="fixed"
      top={0}
      bottom={0}
      w="100%"
      h="100%"
      objectFit="cover"
      src={videoWallper1}
      zIndex={1}
    ></VideoChakra>
  );
}

export default React.memo(Video);
